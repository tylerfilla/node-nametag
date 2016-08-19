#!/usr/bin/env node

"use strict";

const getter = require("./getter.js");

function func() {
    console.log(`My name is ${getter.myName()}`);
}

func();
