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
		key: 'render',
		value: function render() {
			var _this = this;

			return _react2['default'].createElement(
				'div',
				{ className: 'row' },
				_react2['default'].createElement(
					'div',
					{ className: 'col-md-6 col-md-offset-3' },
					_react2['default'].createElement(_reactInputValidation2['default'], {
						text: 'Check Email',
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
						errorMessage: 'Password should contain at least 6 digits.',
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

},{"react":undefined,"react-dom":undefined,"react-input-validation":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZ2F5YW5lL0RvY3VtZW50cy9wdWJsaXNoLW5wbS9yZWFjdC1pbnB1dC12YWxpZGF0aW9uL2V4YW1wbGUvc3JjL2V4YW1wbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0FrQixPQUFPOzs7O3dCQUNKLFdBQVc7Ozs7b0NBQ1Ysd0JBQXdCOzs7O0lBQ3pCLEdBQUc7V0FBSCxHQUFHOztBQUNYLFVBRFEsR0FBRyxHQUNSO3dCQURLLEdBQUc7O0FBRXRCLDZCQUZtQixHQUFHLDZDQUVmO0FBQ1AsTUFBSSxDQUFDLEtBQUssR0FBRztBQUNaLFFBQUssRUFBRSxFQUFFO0FBQ1QsT0FBSSxFQUFFLEVBQUU7QUFDUixNQUFHLEVBQUUsRUFBRTtBQUNQLFdBQVEsRUFBRSxFQUFFO0FBQ1osY0FBVyxFQUFFLEVBQUU7QUFDZixRQUFLLEVBQUUsS0FBSztBQUNaLFdBQVEsRUFBRSxPQUFPO0dBQ2pCLENBQUE7QUFDRCxNQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3BELE1BQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7RUFDdEQ7O2NBZG1CLEdBQUc7O1NBZ0JSLHdCQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDNUIsT0FBSSxLQUFLLEdBQUcsRUFBRSxDQUFBO0FBQ1osUUFBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUE7QUFDeEIsT0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtHQUNyQjs7O1NBRWMsMkJBQUc7QUFDbEIsT0FBSSxLQUFLLEdBQUcsS0FBSyxDQUFBO0FBQ2pCLE9BQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJ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QWlCO0FBQ3RCLGtCQUFZLEVBQUMsNkJBQTZCO0FBQzFDLGtCQUFZLEVBQUMsY0FBYztBQUMzQixVQUFJLEVBQUMsVUFBVTtBQUNmLFdBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsSUFBSSxFQUFFLEFBQUM7QUFDcEMsY0FBUSxFQUFFLFVBQUEsSUFBSTtjQUFJLE1BQUssY0FBYyxDQUFDLEVBQUMsSUFBSSxFQUFKLElBQUksRUFBQyxFQUFFLGFBQWEsQ0FBQztPQUFBLEFBQUM7QUFDN0Qsa0JBQVksRUFBQyxhQUFhO0FBQzFCLGNBQVEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxFQUFFLEFBQUM7QUFDcEMsZ0JBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxBQUFDO0FBQ2hDLFNBQUcsRUFBQyxhQUFhLEdBQUc7S0FDekI7O1FBQVEsSUFBSSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUUsdUJBQXVCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsWUFBWSxHQUFHLGFBQWEsQ0FBQSxBQUFDLEFBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGVBQWUsQUFBQztNQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUTtNQUFVO0tBQ3RLO0lBQ0YsQ0FDTjtHQUNEOzs7UUFsR21CLEdBQUc7R0FBUyxtQkFBTSxTQUFTOztxQkFBM0IsR0FBRzs7QUFxR3hCLHNCQUFTLE1BQU0sQ0FBQyxpQ0FBQyxHQUFHLE9BQUcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBGb3JtSW5wdXQgZnJvbSAncmVhY3QtaW5wdXQtdmFsaWRhdGlvbidcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRzdXBlcigpXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGVtYWlsOiAnJyxcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0YWdlOiAnJyxcblx0XHRcdHBhc3N3b3JkOiAnJyxcblx0XHRcdHJlX3Bhc3N3b3JkOiAnJyxcblx0XHRcdGVycm9yOiBmYWxzZSxcblx0XHRcdGJ0bl90ZXh0OiAnQ2hlY2snXG5cdFx0fVxuXHRcdHRoaXMuX29uQ2hhbmdlVmFsdWUgPSB0aGlzLl9vbkNoYW5nZVZhbHVlLmJpbmQodGhpcylcblx0XHR0aGlzLmNoZWNrVmFsaWRhdGlvbiA9IHRoaXMuY2hlY2tWYWxpZGF0aW9uLmJpbmQodGhpcylcblx0fVxuXG5cdF9vbkNoYW5nZVZhbHVlIChwcm9wLCBwYXJhbSkge1xuXHRcdHZhciBzdGF0ZSA9IHt9XG4gICAgc3RhdGVbcGFyYW1dID0gcHJvcC5wcm9wXG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSlcbiAgfVxuXG5cdGNoZWNrVmFsaWRhdGlvbiAoKSB7XG5cdFx0dmFyIGVycm9yID0gZmFsc2Vcblx0XHRpZiAodGhpcy5faXNBbGxWYWx1ZXNUcnVlKHRoaXMucmVmcykpIHtcbiAgICAgIHZhciBidG5fdGV4dCA9ICdEb25lISdcbiAgICB9IGVsc2Uge1xuXHRcdFx0dmFyIGJ0bl90ZXh0ID0gJ05vdCBWYWxpZCEnXG5cdFx0XHRlcnJvciA9IHRydWVcblx0XHR9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRlcnJvcixcblx0XHRcdGJ0bl90ZXh0XG5cdFx0fSlcblx0fVxuXG5cdF9pc0FsbFZhbHVlc1RydWUgKG9iaikge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmV2ZXJ5KGVsZW0gPT4gKHR5cGVvZiBvYmpbZWxlbV0uaXNWYWxpZCA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmpbZWxlbV0uaXNWYWxpZCgpID09PSB0cnVlKSlcbiAgfVxuXG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdyb3cnPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nY29sLW1kLTYgY29sLW1kLW9mZnNldC0zJz5cblx0XHRcdFx0XHQ8Rm9ybUlucHV0XG5cdFx0XHRcdFx0XHR0ZXh0PSdDaGVjayBFbWFpbCdcblx0XHRcdFx0XHRcdGVtcHR5TWVzc2FnZT0nZW1haWwgaXMgcmVxdWlyZWQnXG5cdFx0XHRcdFx0XHRlcnJvck1lc3NhZ2U9J05vdCB2YWxpZCBlbWFpbCdcblx0XHRcdFx0XHRcdHR5cGU9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0dmFsdWU9e3RoaXMuc3RhdGUuZW1haWwgfHwgJyd9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17cHJvcCA9PiB0aGlzLl9vbkNoYW5nZVZhbHVlKHtwcm9wfSwgJ2VtYWlsJyl9XG5cdFx0XHRcdFx0XHR2YWxpZGF0ZVR5cGU9J2VtYWlsJ1xuXHRcdFx0XHRcdFx0b25LZXlQcmVzcz17dGhpcy5oYW5kbGVLZXlQcmVzc31cblx0XHRcdFx0XHRcdHJlZj0nZW1haWwnLz5cblx0XHRcdFx0XHQ8Rm9ybUlucHV0XG5cdFx0XHRcdFx0XHR0ZXh0PSdOYW1lJ1xuXHRcdFx0XHRcdFx0ZW1wdHlNZXNzYWdlPSdOYW1lIGlzIHJlcXVpcmVkJ1xuXHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcblx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLm5hbWUgfHwgJyd9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17cHJvcCA9PiB0aGlzLl9vbkNoYW5nZVZhbHVlKHtwcm9wfSwgJ25hbWUnKX1cblx0XHRcdFx0XHRcdHZhbGlkYXRlVHlwZT0ncmVxdWlyZWQnXG5cdFx0XHRcdFx0XHRvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzfVxuXHRcdFx0XHRcdFx0cmVmPSduYW1lJy8+XG5cdFx0XHRcdFx0PEZvcm1JbnB1dFxuXHQgICAgICAgICAgdGV4dD0nQWdlJ1xuXHQgICAgICAgICAgZW1wdHlNZXNzYWdlPSdBZ2UgaXMgcmVxdWlyZWQnXG5cdCAgICAgICAgICBlcnJvck1lc3NhZ2U9J1BsZWFzZSBlbnRlciBhIHBvc2l0aXZlIG51bWJlcidcblx0ICAgICAgICAgIHR5cGU9J251bWJlcidcblx0ICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFnZSB8fCAnJ31cblx0ICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wID0+IHRoaXMuX29uQ2hhbmdlVmFsdWUoe3Byb3B9LCAnYWdlJyl9XG5cdCAgICAgICAgICB2YWxpZGF0ZVR5cGU9J29ubHlQb3NpdGl2ZU51bWJlcnMnXG5cdCAgICAgICAgICByZWY9J2FnZScgLz5cblx0XHRcdFx0XHQ8Rm9ybUlucHV0XG5cdCAgICAgICAgICB0ZXh0PSdQYXNzd29yZCdcblx0ICAgICAgICAgIGVtcHR5TWVzc2FnZT0nUGFzc3dvcmQgaXMgcmVxdWlyZWQnXG5cdCAgICAgICAgICBlcnJvck1lc3NhZ2U9J1Bhc3N3b3JkIHNob3VsZCBjb250YWluIGF0IGxlYXN0IDYgZGlnaXRzLidcblx0ICAgICAgICAgIHR5cGU9J3Bhc3N3b3JkJ1xuXHQgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmQgfHwgJyd9XG5cdCAgICAgICAgICBvbkNoYW5nZT17cHJvcCA9PiB0aGlzLl9vbkNoYW5nZVZhbHVlKHtwcm9wfSwgJ3Bhc3N3b3JkJyl9XG5cdCAgICAgICAgICBwYXNzd29yZE1pbkxlbmd0aD17Nn1cblx0ICAgICAgICAgIHZhbGlkYXRlVHlwZT0ncGFzc3dvcmQnXG5cdCAgICAgICAgICBvbktleVByZXNzPXt0aGlzLmhhbmRsZUtleVByZXNzfVxuXHQgICAgICAgICAgcmVmPSdwYXNzd29yZCcgLz5cblx0XHRcdFx0XHQ8Rm9ybUlucHV0XG5cdCAgICAgICAgICB0ZXh0PSdSZXBlYXQgUGFzc3dvcmQnXG5cdCAgICAgICAgICBlbXB0eU1lc3NhZ2U9J1JlcGVhdCBQYXNzd29yZCBpcyByZXF1aXJlZCdcblx0ICAgICAgICAgIGVycm9yTWVzc2FnZT0nTm90IG1hdGNoaW5nJ1xuXHQgICAgICAgICAgdHlwZT0ncGFzc3dvcmQnXG5cdCAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZV9wYXNzd29yZCB8fCAnJ31cblx0ICAgICAgICAgIG9uQ2hhbmdlPXtwcm9wID0+IHRoaXMuX29uQ2hhbmdlVmFsdWUoe3Byb3B9LCAncmVfcGFzc3dvcmQnKX1cblx0ICAgICAgICAgIHZhbGlkYXRlVHlwZT0ncmVfcGFzc3dvcmQnXG5cdCAgICAgICAgICByZWxWYWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZCB8fCAnJ31cblx0ICAgICAgICAgIG9uS2V5UHJlc3M9e3RoaXMuaGFuZGxlS2V5UHJlc3N9XG5cdCAgICAgICAgICByZWY9J3JlX3Bhc3N3b3JkJyAvPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPSdidXR0b24nIGNsYXNzTmFtZT17J2J0biBidG4tbWQgYnRuLWJsb2NrICcgKyAodGhpcy5zdGF0ZS5lcnJvciA/ICdidG4tZGFuZ2VyJyA6ICdidG4tc3VjY2VzcycpfSBvbkNsaWNrPXt0aGlzLmNoZWNrVmFsaWRhdGlvbn0+e3RoaXMuc3RhdGUuYnRuX3RleHR9PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcbiJdfQ==
