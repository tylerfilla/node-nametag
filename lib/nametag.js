
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

/**
 * Examine the calling function.
 * @module nametag
 * @author Tyler Filla <tylerfilla@gmail.com>
 * @license MIT
 */

"use strict";

function getCallStack() {
    // Get the stock stacktrace formatter
    let stockPrepareStackTrace = Error.prepareStackTrace;

    // Temporarily swap it out for a custom one which returns the raw, structured stacktrace
    Error.prepareStackTrace = function(error, stack) {
        return stack;
    };

    // Get the raw, unformatted stacktrace
    let stack = new Error().stack;

    // Replace the stock stacktrace formatter
    Error.prepareStackTrace = stockPrepareStackTrace;

    return stack;
}

/**
 * Retrieves the name of the function which calls this.
 * @returns {String} Name of the calling function
 */
const nametag = function() {
    return getCallStack()[2].getFunctionName();
};

/**
 * @see nametag
 */
nametag.func = nametag;

/**
 * Retrieves the name of the type of the object to which the caller belongs.
 * @returns {String} Name of the calling function's parent's type
 */
nametag.type = function() {
    return getCallStack()[2].getTypeName();
};

/**
 * Retrieves the name of the file from which this is called.
 * @returns {String} Name of the calling file
 */
nametag.file = function() {
    return getCallStack()[2].getFileName();
};

/**
 * Retrieves the current line number in the calling file.
 * @returns {Number} Line number of the call to this
 */
nametag.line = function() {
    return getCallStack()[2].getLineNumber();
};

/**
 * Retrieves the current column number in the calling file.
 * @returns {Number} Column number of the call to this
 */
nametag.col = function() {
    return getCallStack()[2].getColumnNumber();
};

module.exports = nametag;
