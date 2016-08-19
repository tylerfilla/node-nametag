
/*
 *
 * node-nametag
 * https://git.io/nametag
 *
 * Copyright (c) 2016 Tyler Filla
 *
 * This software may be modified and distributed under the terms of the MIT
 * license. See the LICENSE file for details.
 *
 */

/*global describe it*/

"use strict";

// Import standard assertion module
const assert = require("assert");

// Import main module
const nametag = require("../");

describe("nametag", function() {
    it("should get the calling function's name", function(done) {
        function getMyOwnName() {
            return nametag();
        }
        assert(getMyOwnName() === getMyOwnName.name);
        done();
    });
    it("should get the calling function's name (explicit type)", function(done) {
        function getMyOwnName() {
            return nametag.func();
        }
        assert(getMyOwnName() === getMyOwnName.name);
        done();
    });
    it("should get the calling function's object's type", function(done) {
        function Foo() {
        }
        Foo.prototype.bar = function() {
            return nametag.type();
        };
        assert(new Foo().bar() === Foo.name);
        done();
    });
    it("should get the calling function's file", function(done) {
        assert(nametag.file().endsWith("test-nametag.js"));
        done();
    });
    it("should get the calling line number", function(done) {
        let line1 = nametag.line();
        // stuff
        // more stuff
        // blah blah blah
        let line2 = nametag.line();
        assert(line2 - line1 == 4);
        done();
    });
    it("should get the calling column number", function(done) {
        let col1 = nametag.col();
        let columnNumber2 = nametag.col();
        assert(columnNumber2 - col1 == 9);
        done();
    });
});
