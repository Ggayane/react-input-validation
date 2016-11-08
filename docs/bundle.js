require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{}],"react-input-validation":[function(require,module,exports){
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

},{"./lib/utils":1,"./lib/validation-rules":2,"react":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ2F5YW5lL0RvY3VtZW50cy9wdWJsaXNoLW5wbS9yZWFjdC1pbnB1dC12YWxpZGF0aW9uL3NyYy9saWIvdXRpbHMuanMiLCIvVXNlcnMvZ2F5YW5lL0RvY3VtZW50cy9wdWJsaXNoLW5wbS9yZWFjdC1pbnB1dC12YWxpZGF0aW9uL3NyYy9saWIvdmFsaWRhdGlvbi1ydWxlcy5qcyIsIi9Vc2Vycy9nYXlhbmUvRG9jdW1lbnRzL3B1Ymxpc2gtbnBtL3JlYWN0LWlucHV0LXZhbGlkYXRpb24vc3JjL1JlYWN0SW5wdXRWYWxpZGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxTQUFTLEtBQUssR0FBYzs7O29DQUFULE9BQU87QUFBUCxXQUFPOzs7QUFDeEIsU0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU07V0FBSyxNQUFLLE1BQU0sQ0FBQyxHQUFHLE1BQUssTUFBTSxDQUFDLENBQUMsSUFBSSxPQUFNO0dBQUEsQ0FBQyxDQUFBO0NBQ3BFOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUc7QUFDZixPQUFLLEVBQUwsS0FBSztDQUNOLENBQUE7Ozs7O0FDTkQsU0FBUyxVQUFVLENBQUUsS0FBSyxFQUFFO0FBQzFCLFNBQU8sNEpBQTJKLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUFBO0NBQy9LOztBQUVELFNBQVMsbUJBQW1CLENBQUUsS0FBSyxFQUFFO0FBQ25DLFNBQU8sa0JBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUFBO0NBQ3JDOztBQUVELFNBQVMsUUFBUSxDQUFFLEtBQUssRUFBRTtBQUN4QixTQUFPLDRFQUEyRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFBQTtDQUMvRjs7QUFFRCxTQUFTLGFBQWEsQ0FBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQ3BDLE1BQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFL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Q0FBQyxLQUFLLENBQUMsWUFBWTtTQUFPO09BRWpJLENBQ1A7S0FDRjs7O1NBN0lrQixvQkFBb0I7R0FBUyxtQkFBTSxTQUFTOztxQkFBNUMsb0JBQW9COztBQWdKekMsb0JBQW9CLENBQUMsU0FBUyxHQUFHO0FBQy9CLFVBQVEsRUFBRSxtQkFBTSxTQUFTLENBQUMsSUFBSTtBQUM5QixZQUFVLEVBQUUsbUJBQU0sU0FBUyxDQUFDLElBQUk7QUFDaEMsTUFBSSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQzVCLGNBQVksRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNwQyxjQUFZLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDcEMsV0FBUyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2pDLGFBQVcsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNuQyxNQUFJLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDNUIsT0FBSyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVTtBQUN4QyxjQUFZLEVBQUUsbUJBQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUscUJBQXFCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUseUJBQXlCLENBQUMsQ0FBQztBQUM5SSxtQkFBaUIsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUN6QyxhQUFXLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDbkMsVUFBUSxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0FBQ2hDLFdBQVMsRUFBRSxtQkFBTSxTQUFTLENBQUMsTUFBTTtBQUNqQyxVQUFRLEVBQUUsbUJBQU0sU0FBUyxDQUFDLE1BQU07QUFDaEMsS0FBRyxFQUFFLG1CQUFNLFNBQVMsQ0FBQyxNQUFNO0NBQzVCLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZnVuY3Rpb24gX2JpbmQgKC4uLm1ldGhvZHMpIHtcbiAgbWV0aG9kcy5mb3JFYWNoKChtZXRob2QpID0+IHRoaXNbbWV0aG9kXSA9IHRoaXNbbWV0aG9kXS5iaW5kKHRoaXMpKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgX2JpbmRcbn1cbiIsImZ1bmN0aW9uIGNoZWNrRW1haWwgKHZhbHVlKSB7XG4gIHJldHVybiAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLy50ZXN0KHZhbHVlKVxufVxuXG5mdW5jdGlvbiBjaGVja051bWJlclBvc2l0aXZlICh2YWx1ZSkge1xuICByZXR1cm4gL15cXCs/KFsxLTldXFxkKikkLy50ZXN0KHZhbHVlKVxufVxuXG5mdW5jdGlvbiBjaGVja1VybCAodmFsdWUpIHtcbiAgcmV0dXJuIC9eKGh0dHBbc10/OlxcL1xcLyl7MCwxfSh3d3dcXC4pezAsMX1bYS16QS1aMC05XFwuXFwtXStcXC5bYS16QS1aXXsyLDV9W1xcLl17MCwxfS8udGVzdCh2YWx1ZSlcbn1cblxuZnVuY3Rpb24gY2hlY2tQYXNzd29yZCAodmFsdWUsIHBhcmFtKSB7XG4gIGlmICh2YWx1ZS5sZW5ndGggPj0gcGFyYW0pIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBjaGVja1JlUGFzc3dvcmQgKHZhbHVlLCBjb21wYXJlVG8pIHtcbiAgaWYgKHZhbHVlID09PSBjb21wYXJlVG8pIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwb3NpdGl2ZU51bWJlcldpdGhMaW1pdCAodmFsdWUsIGxpbWl0KSB7XG4gIGlmIChwYXJzZUludCh2YWx1ZSwgMTApIDw9IHBhcnNlSW50KGxpbWl0LCAxMCkgJiYgdGhpcy5jaGVja051bWJlclBvc2l0aXZlKHZhbHVlKSkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjaGVja0VtYWlsLFxuICBjaGVja051bWJlclBvc2l0aXZlLFxuICBjaGVja1VybCxcbiAgY2hlY2tQYXNzd29yZCxcbiAgY2hlY2tSZVBhc3N3b3JkLFxuICBwb3NpdGl2ZU51bWJlcldpdGhMaW1pdFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFZhbGlkYXRpb25SdWxlcyBmcm9tICcuL2xpYi92YWxpZGF0aW9uLXJ1bGVzJ1xuaW1wb3J0IHV0aWxzIGZyb20gJy4vbGliL3V0aWxzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFjdElucHV0VmFsaWRhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5wcm9wcy5lbXB0eU1lc3NhZ2UsXG4gICAgICBlbXB0eTogdGhpcy5pc0VtcHR5KHRoaXMucHJvcHMudmFsdWUpLFxuICAgICAgdmFsaWQ6IG51bGxcbiAgICB9XG4gICAgdGhpcy5fYmluZCgnaGFuZGxlQ2hhbmdlJywgJ2hhbmRsZWtleVByZXNzJylcbiAgfVxuXG4gIF9iaW5kICguLi5tZXRob2RzKSB7XG4gICAgbWV0aG9kcy5mb3JFYWNoKChtZXRob2QpID0+IHRoaXNbbWV0aG9kXSA9IHRoaXNbbWV0aG9kXS5iaW5kKHRoaXMpKVxuICB9XG5cbiAgaXNFbXB0eSAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09ICcnXG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgZW1wdHk6IHRoaXMuaXNFbXB0eShldmVudC50YXJnZXQudmFsdWUpXG4gICAgfSlcblxuICAgIGlmICh0aGlzLnByb3BzLnZhbGlkYXRlVHlwZSkge1xuICAgICAgdGhpcy52YWxpZGF0ZUlucHV0KGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMub25DaGFuZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZWtleVByZXNzIChldmVudCkge1xuICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbktleVByZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnByb3BzLm9uS2V5UHJlc3MoZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgaXNWYWxpZCAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudmFsaWRhdGVUeXBlICYmIHRoaXMuY2FsbFZhbGlkYXRlUnVsZXModGhpcy5wcm9wcy52YWx1ZSwgdGhpcy5wcm9wcy52YWxpZGF0ZVR5cGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgIGVycm9yTWVzc2FnZTogJydcbiAgICAgIH0pXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuaXNFbXB0eSh0aGlzLnByb3BzLnZhbHVlKSA/IHRoaXMucHJvcHMuZW1wdHlNZXNzYWdlIDogdGhpcy5wcm9wcy5lcnJvck1lc3NhZ2VcbiAgICAgIH0pXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH1cblxuICBjYWxsVmFsaWRhdGVSdWxlcyAodmFsdWUsIHR5cGUpIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2VtYWlsJzpcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRpb25SdWxlcy5jaGVja0VtYWlsKHZhbHVlKVxuICAgICAgY2FzZSAncmVxdWlyZWQnOlxuICAgICAgICByZXR1cm4gIXRoaXMuaXNFbXB0eSh2YWx1ZSlcbiAgICAgIGNhc2UgJ29ubHlQb3NpdGl2ZU51bWJlcnMnOlxuICAgICAgICByZXR1cm4gVmFsaWRhdGlvblJ1bGVzLmNoZWNrTnVtYmVyUG9zaXRpdmUodmFsdWUpXG4gICAgICBjYXNlICd1cmwnOlxuICAgICAgICByZXR1cm4gVmFsaWRhdGlvblJ1bGVzLmNoZWNrVXJsKHZhbHVlKVxuICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgICByZXR1cm4gVmFsaWRhdGlvblJ1bGVzLmNoZWNrUGFzc3dvcmQodmFsdWUsIHRoaXMucHJvcHMucGFzc3dvcmRNaW5MZW5ndGggPyB0aGlzLnByb3BzLnBhc3N3b3JkTWluTGVuZ3RoIDogNilcbiAgICAgIGNhc2UgJ3JlX3Bhc3N3b3JkJzpcbiAgICAgICAgcmV0dXJuIFZhbGlkYXRpb25SdWxlcy5jaGVja1JlUGFzc3dvcmQodmFsdWUsIHRoaXMucHJvcHMucmVsVmFsdWUpXG4gICAgICBjYXNlICdwb3NpdGl2ZU51bWJlcldpdGhMaW1pdCc6XG4gICAgICAgIHJldHVybiBWYWxpZGF0aW9uUnVsZXMucG9zaXRpdmVOdW1iZXJXaXRoTGltaXQodmFsdWUsIHRoaXMucHJvcHMubGltaXROdW1iZXIgfHwgMSlcblxuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlSW5wdXQgKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMudmFsaWRhdGVUeXBlICYmIHRoaXMuY2FsbFZhbGlkYXRlUnVsZXModmFsdWUsIHRoaXMucHJvcHMudmFsaWRhdGVUeXBlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZhbGlkOiB0cnVlXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxuICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuaXNFbXB0eSh2YWx1ZSkgPyB0aGlzLnByb3BzLmVtcHR5TWVzc2FnZSA6IHRoaXMucHJvcHMuZXJyb3JNZXNzYWdlXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGlucHV0V2l0aEFkZG9uICgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hZGRvblBvcyA9PT0gJ2xlZnQnKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1hZGRvbic+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy53aXRoQWRkb259XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMucmVndWxhcklucHV0KCl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxuICAgICAgICAgIHt0aGlzLnJlZ3VsYXJJbnB1dCgpfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1hZGRvbic+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy53aXRoQWRkb259XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJlZ3VsYXJJbnB1dCAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxpbnB1dFxuICAgICAgICBwbGFjZWhvbGRlcj17dGhpcy5wcm9wcy5wbGFjZWhvbGRlcn1cbiAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZSA/IHRoaXMucHJvcHMuY2xhc3NOYW1lICsgJyBmb3JtLWNvbnRyb2wnIDogJ2Zvcm0tY29udHJvbCd9XG4gICAgICAgIGlkPXt0aGlzLnByb3BzLnRleHR9XG4gICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZX1cbiAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMudmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgb25LZXlQcmVzcz17dGhpcy5oYW5kbGVrZXlQcmVzc31cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICB2YXIgdmFsaWRhdGVDbGFzc05hbWUgPSB0aGlzLnN0YXRlLnZhbGlkICE9PSBudWxsID8gKHRoaXMuc3RhdGUudmFsaWQgPyAnZm9ybS1ncm91cCBoYXMtc3VjY2VzcycgOiAnZm9ybS1ncm91cCBoYXMtZXJyb3InKSA6ICdmb3JtLWdyb3VwJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt2YWxpZGF0ZUNsYXNzTmFtZX0+XG5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nY29udHJvbC1sYWJlbCcgaHRtbEZvcj17dGhpcy5wcm9wcy50ZXh0fT5cbiAgICAgICAgICB7dGhpcy5wcm9wcy50ZXh0fVxuICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgIHt0aGlzLnByb3BzLndpdGhBZGRvbiA/IHRoaXMuaW5wdXRXaXRoQWRkb24oKSA6IHRoaXMucmVndWxhcklucHV0KCl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXsodGhpcy5zdGF0ZS52YWxpZCA9PT0gbnVsbCB8fCB0aGlzLnN0YXRlLnZhbGlkKSA/ICdoZWxwLWJsb2NrIGhpZGRlbicgOiAnaGVscC1ibG9jayd9Pnt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX08L2Rpdj5cblxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0SW5wdXRWYWxpZGF0aW9uLnByb3BUeXBlcyA9IHtcbiAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLCAvLyBmdW5jdGlvbiB0aGF0IHdpbGwgc2V0IHN0YXRlXG4gIG9uS2V5UHJlc3M6IFJlYWN0LlByb3BUeXBlcy5mdW5jLCAvLyBvcHRpb25hbCwgZm9yIGhhbmRsZWluZyBrZXlwcmVzcyBvbiBpbnB1dHNcbiAgdGV4dDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgZW1wdHlNZXNzYWdlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBlcnJvck1lc3NhZ2U6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXI6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsIC8vIGlucHV0IHR5cGUsIGJ5IGRlZmF1bHQgdGhpcyBpcyAndGV4dCdcbiAgdmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmFsaWRhdGVUeXBlOiBSZWFjdC5Qcm9wVHlwZXMub25lT2YoWydlbWFpbCcsICdyZXF1aXJlZCcsICdvbmx5UG9zaXRpdmVOdW1iZXJzJywgJ3VybCcsICdwYXNzd29yZCcsICdyZV9wYXNzd29yZCcsICdwb3NpdGl2ZU51bWJlcldpdGhMaW1pdCddKSxcbiAgcGFzc3dvcmRNaW5MZW5ndGg6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsIC8vIHVzZSBpZiB5b3VyIHZhbGlkYXRlVHlwZSA9ICdwYXNzd29yZCdcbiAgbGltaXROdW1iZXI6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsIC8vIHVzZSBpZiB5b3VyIHZhbGlkYXRlVHlwZSA9ICdwb3NpdGl2ZU51bWJlcldpdGhMaW1pdCdcbiAgcmVsVmFsdWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsIC8vIHVzZSBpZiB5b3VyIHZhbGlkYXRlVHlwZSA9ICdyZV9wYXNzd29yZCdcbiAgd2l0aEFkZG9uOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLCAvLyBvcHRpb25hbCwgdGV4dCBvZiBhZGRvbiwgdXNlIGluIGNhc2UgeW91IHdhbnQgdG8gaGF2ZSBib290c3RyYXAgaW5wdXRzIHdpdGggYWRkb24gaWNvbnNcbiAgYWRkb25Qb3M6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsIC8vIHBvc2l0aW9uIG9mIGFkZG9uLCBkZWZhdWx0IGlzICdyaWdodCdcbiAgcmVmOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nIC8vIGFsd2F5cyB1c2UgdGhpcyBmb3IgdmFsaWRhdGluZyAobXVzdCBiZSB1bmlxdWUpXG59XG4iXX0=
