require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactInputValidation = require('react-input-validation');

var _reactInputValidation2 = _interopRequireDefault(_reactInputValidation);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
    this.state = {
      email: '',
      name: '',
      age: '',
      password: '',
      re_password: '',
      error: false,
      btn_text: 'Check'
    };
    this._onChangeValue = this._onChangeValue.bind(this);
    this.checkValidation = this.checkValidation.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  _createClass(App, [{
    key: '_onChangeValue',
    value: function _onChangeValue(prop, param) {
      var state = {};
      state[param] = prop.prop;
      this.setState(state);
    }
  }, {
    key: 'checkValidation',
    value: function checkValidation() {
      var error = false;
      if (this._isAllValuesTrue(this.refs)) {
        var btn_text = 'Done!';
      } else {
        var btn_text = 'Not Valid!';
        error = true;
      }
      this.setState({
        error: error,
        btn_text: btn_text
      });
    }
  }, {
    key: '_isAllValuesTrue',
    value: function _isAllValuesTrue(obj) {
      return Object.keys(obj).every(function (elem) {
        return typeof obj[elem].isValid === 'function' && obj[elem].isValid() === true;
      });
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(event) {
      if (event.charCode === 13) {
        this.checkValidation();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      return _react2['default'].createElement(
        'div',
        { className: 'row' },
        _react2['default'].createElement(
          'div',
          { className: 'col-md-6 col-md-offset-3 col-sm-12' },
          _react2['default'].createElement(_reactInputValidation2['default'], {
            text: 'Email',
            emptyMessage: 'email is required',
            errorMessage: 'Not valid email',
            type: 'email',
            value: this.state.email || '',
            onChange: function (prop) {
              return _this._onChangeValue({ prop: prop }, 'email');
            },
            validateType: 'email',
            onKeyPress: this.handleKeyPress,
            ref: 'email' }),
          _react2['default'].createElement(_reactInputValidation2['default'], {
            text: 'Name',
            emptyMessage: 'Name is required',
            type: 'text',
            value: this.state.name || '',
            onChange: function (prop) {
              return _this._onChangeValue({ prop: prop }, 'name');
            },
            validateType: 'required',
            onKeyPress: this.handleKeyPress,
            ref: 'name' }),
          _react2['default'].createElement(_reactInputValidation2['default'], {
            text: 'Age',
            emptyMessage: 'Age is required',
            errorMessage: 'Please enter a positive number',
            type: 'number',
            value: this.state.age || '',
            onChange: function (prop) {
              return _this._onChangeValue({ prop: prop }, 'age');
            },
            validateType: 'onlyPositiveNumbers',
            ref: 'age' }),
          _react2['default'].createElement(_reactInputValidation2['default'], {
            text: 'Password',
            emptyMessage: 'Password is required',
            errorMessage: 'Password should contain at least 6 characters.',
            type: 'password',
            value: this.state.password || '',
            onChange: function (prop) {
              return _this._onChangeValue({ prop: prop }, 'password');
            },
            passwordMinLength: 6,
            validateType: 'password',
            onKeyPress: this.handleKeyPress,
            ref: 'password' }),
          _react2['default'].createElement(_reactInputValidation2['default'], {
            text: 'Repeat Password',
            emptyMessage: 'Repeat Password is required',
            errorMessage: 'Not matching',
            type: 'password',
            value: this.state.re_password || '',
            onChange: function (prop) {
              return _this._onChangeValue({ prop: prop }, 're_password');
            },
            validateType: 're_password',
            relValue: this.state.password || '',
            onKeyPress: this.handleKeyPress,
            ref: 're_password' }),
          _react2['default'].createElement(_reactInputValidation2['default'], {
            text: 'custom',
            emptyMessage: 'this field is required',
            errorMessage: 'Only uppercase',
            type: 'text',
            value: this.state.custom || '',
            onChange: function (prop) {
              return _this._onChangeValue({ prop: prop }, 'custom');
            },
            validateType: 'custom',
            validatePattern: '^[A-Z]*$',
            onKeyPress: this.handleKeyPress,
            ref: 'custom' }),
          _react2['default'].createElement(
            'button',
            { type: 'button', className: 'btn btn-md btn-block ' + (this.state.error ? 'btn-danger' : 'btn-success'), onClick: this.checkValidation },
            this.state.btn_text
          )
        )
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;

_reactDom2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));
module.exports = exports['default'];

},{"react":undefined,"react-dom":undefined,"react-input-validation":undefined}]},{},[1]);
