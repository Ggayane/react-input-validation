"use strict";

function _bind() {
  var _this = this;

  for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
    methods[_key] = arguments[_key];
  }

  methods.forEach(function (method) {
    return _this[method] = _this[method].bind(_this);
  });
}

module.exports = {
  _bind: _bind
};