(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ReactInputValidation = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _libValidationRules = require('./lib/validation-rules');

var _libValidationRules2 = _interopRequireDefault(_libValidationRules);

var _libUtils = require('./lib/utils');

var _libUtils2 = _interopRequireDefault(_libUtils);

var ReactInputValidation = (function (_React$Component) {
  _inherits(ReactInputValidation, _React$Component);

  function ReactInputValidation(props) {
    _classCallCheck(this, ReactInputValidation);

    _get(Object.getPrototypeOf(ReactInputValidation.prototype), 'constructor', this).call(this, props);
    this.state = {
      errorMessage: this.props.emptyMessage,
      empty: this.isEmpty(this.props.value),
      valid: null
    };
    this._bind('handleChange', 'handlekeyPress');
  }

  _createClass(ReactInputValidation, [{
    key: '_bind',
    value: function _bind() {
      var _this = this;

      for (var _len = arguments.length, methods = Array(_len), _key = 0; _key < _len; _key++) {
        methods[_key] = arguments[_key];
      }

      methods.forEach(function (method) {
        return _this[method] = _this[method].bind(_this);
      });
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty(value) {
      return value === '';
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({
        value: event.target.value,
        empty: this.isEmpty(event.target.value)
      });

      if (this.props.validateType) {
        this.validateInput(event.target.value);
      }

      if (typeof this.props.onChange === 'function') {
        this.props.onChange(event.target.value);
      }
    }
  }, {
    key: 'handlekeyPress',
    value: function handlekeyPress(event) {
      if (typeof this.props.onKeyPress === 'function') {
        this.props.onKeyPress(event);
      }
    }
  }, {
    key: 'isValid',
    value: function isValid() {
      if (this.props.validateType && this.callValidateRules(this.props.value, this.props.validateType)) {
        this.setState({
          valid: true,
          errorMessage: ''
        });
        return true;
      } else {
        this.setState({
          valid: false,
          errorMessage: this.isEmpty(this.props.value) ? this.props.emptyMessage : this.props.errorMessage
        });
        return false;
      }
    }
  }, {
    key: 'callValidateRules',
    value: function callValidateRules(value, type) {
      switch (type) {
        case 'email':
          return _libValidationRules2['default'].checkEmail(value);
        case 'required':
          return !this.isEmpty(value);
        case 'onlyPositiveNumbers':
          return _libValidationRules2['default'].checkNumberPositive(value);
        case 'url':
          return _libValidationRules2['default'].checkUrl(value);
        case 'password':
          return _libValidationRules2['default'].checkPassword(value, this.props.passwordMinLength ? this.props.passwordMinLength : 6);
        case 're_password':
          return _libValidationRules2['default'].checkRePassword(value, this.props.relValue);
        case 'positiveNumberWithLimit':
          return _libValidationRules2['default'].positiveNumberWithLimit(value, this.props.limitNumber || 1);

      }
    }
  }, {
    key: 'validateInput',
    value: function validateInput(value) {
      if (this.props.validateType && this.callValidateRules(value, this.props.validateType)) {
        this.setState({
          valid: true
        });
      } else {
        this.setState({
          valid: false,
          errorMessage: this.isEmpty(value) ? this.props.emptyMessage : this.props.errorMessage
        });
      }
    }
  }, {
    key: 'inputWithAddon',
    value: function inputWithAddon() {
      if (this.props.addonPos === 'left') {
        return _react2['default'].createElement(
          'div',
          { className: 'input-group' },
          _react2['default'].createElement(
            'div',
            { className: 'input-group-addon' },
            this.props.withAddon
          ),
          this.regularInput()
        );
      } else {
        return _react2['default'].createElement(
          'div',
          { className: 'input-group' },
          this.regularInput(),
          _react2['default'].createElement(
            'div',
            { className: 'input-group-addon' },
            this.props.withAddon
          )
        );
      }
    }
  }, {
    key: 'regularInput',
    value: function regularInput() {
      return _react2['default'].createElement('input', {
        placeholder: this.props.placeholder,
        className: this.props.className ? this.props.className + ' form-control' : 'form-control',
        id: this.props.text,
        type: this.props.type,
        value: this.props.value,
        onChange: this.handleChange,
        onKeyPress: this.handlekeyPress
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var validateClassName = this.state.valid !== null ? this.state.valid ? 'form-group has-success' : 'form-group has-error' : 'form-group';

      return _react2['default'].createElement(
        'div',
        { className: validateClassName },
        _react2['default'].createElement(
          'label',
          { className: 'control-label', htmlFor: this.props.text },
          this.props.text
        ),
        this.props.withAddon ? this.inputWithAddon() : this.regularInput(),
        _react2['default'].createElement(
          'div',
          { className: this.state.valid === null || this.state.valid ? 'help-block hidden' : 'help-block' },
          this.state.errorMessage
        )
      );
    }
  }]);

  return ReactInputValidation;
})(_react2['default'].Component);

exports['default'] = ReactInputValidation;

ReactInputValidation.propTypes = {
  onChange: _react2['default'].PropTypes.func, // function that will set state
  onKeyPress: _react2['default'].PropTypes.func, // optional, for handleing keypress on inputs
  text: _react2['default'].PropTypes.string,
  emptyMessage: _react2['default'].PropTypes.string,
  errorMessage: _react2['default'].PropTypes.string,
  className: _react2['default'].PropTypes.string,
  placeholder: _react2['default'].PropTypes.string,
  type: _react2['default'].PropTypes.string, // input type, by default this is 'text'
  value: _react2['default'].PropTypes.string.isRequired,
  validateType: _react2['default'].PropTypes.oneOf(['email', 'required', 'onlyPositiveNumbers', 'url', 'password', 're_password', 'positiveNumberWithLimit']),
  passwordMinLength: _react2['default'].PropTypes.number, // use if your validateType = 'password'
  limitNumber: _react2['default'].PropTypes.number, // use if your validateType = 'positiveNumberWithLimit'
  relValue: _react2['default'].PropTypes.string, // use if your validateType = 're_password'
  withAddon: _react2['default'].PropTypes.string, // optional, text of addon, use in case you want to have bootstrap inputs with addon icons
  addonPos: _react2['default'].PropTypes.string, // position of addon, default is 'right'
  ref: _react2['default'].PropTypes.string // always use this for validating (must be unique)
};
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./lib/utils":2,"./lib/validation-rules":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

function checkEmail(value) {
  return (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
  );
}

function checkNumberPositive(value) {
  return (/^\+?([1-9]\d*)$/.test(value)
  );
}

function checkUrl(value) {
  return (/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/.test(value)
  );
}

function checkPassword(value, param) {
  if (value.length >= param) {
    return true;
  }
  return false;
}

function checkRePassword(value, compareTo) {
  if (value === compareTo) {
    return true;
  }
  return false;
}

function positiveNumberWithLimit(value, limit) {
  if (parseInt(value, 10) <= parseInt(limit, 10) && this.checkNumberPositive(value)) {
    return true;
  }
  return false;
}

module.exports = {
  checkEmail: checkEmail,
  checkNumberPositive: checkNumberPositive,
  checkUrl: checkUrl,
  checkPassword: checkPassword,
  checkRePassword: checkRePassword,
  positiveNumberWithLimit: positiveNumberWithLimit
};

},{}]},{},[1])(1)
});