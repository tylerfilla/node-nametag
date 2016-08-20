node-nametag
============

[![npm version](https://badge.fury.io/js/nametag.svg)](https://badge.fury.io/js/nametag)
[![Build Status](https://travis-ci.org/tylerfilla/node-nametag.svg?branch=master)](https://travis-ci.org/tylerfilla/node-nametag)
[![Dependency Status](https://david-dm.org/tylerfilla/node-nametag.svg)](https://david-dm.org/tylerfilla/node-nametag)

Examine the calling code.

Installation
------------

```sh
$ npm install nametag
```

Usage
-----

Here's a quick example:

```js
const nametag = require("nametag");

function foo() {
    return nametag();
}

foo(); // returns "foo"
```

This module also offers several similar functions to return the calling function's type, file, and line/column numbers.

Get the name of an object's type from within that object:

```js
const nametag = require("nametag");

function Foo() {
    // Stuff goes here
}

Foo.prototype.bar = function() {
    // FYI, nametag() will evaluate to "bar" at this point

    // Get type name
    return nametag.type();
};

let foo = new Foo();
foo.bar(); // returns "Foo"
```

Get path to file containing the calling function:

```js
// File: "/home/me/file.js"

const nametag = require("nametag");

function foo() {
    return nametag.file();
}

foo(); // returns "/home/me/file.js"
```

And, for my last trick, line and column numbers:

```js
const nametag = require("nametag");

nametag.line(); // returns 3
nametag.col(); // returns 9
```

The latter's pretty useless, in my opinion, but why not.

Explanation
-----------

This module uses V8's [Stack Trace API](https://github.com/v8/v8/wiki/Stack-Trace-API) to look up the name of the calling function. It uses similar methods for the other information. As such, this code will only function under V8-powered JavaScript contexts, which includes Node, Google Chrome, etc.

License
-------

MIT
