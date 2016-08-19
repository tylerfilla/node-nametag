"use strict";

exports.myName = function() {
    let oldPrepare = Error.prepareStackTrace;
    Error.prepareStackTrace = function(err, struct) {
        return struct;
    };
    let stack = new Error().stack;
    Error.prepareStackTrace = oldPrepare;
    return stack[1].getFunctionName();
};
