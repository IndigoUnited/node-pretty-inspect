'use strict';

var util = require('util');

module.exports = function (obj, depth, multiline) {
    var res = util.inspect(obj, false, depth || 10, true);

    return multiline ? res : res.replace(/\s+/g, ' ');
};

module.exports.log = function () {
    console.log(module.exports.apply(null, arguments));
};
