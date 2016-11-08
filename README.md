# react-input-validation

A small validation component for inputs which you can use everywhere and set any kind of validation you want to!


## Demo & Examples

Live demo: [ggayane.github.io/react-input-validation](http://ggayane.github.io/react-input-validation/)

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.


## Installation

The easiest way to use react-input-validation is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-input-validation.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-input-validation --save
```


## Usage

```
var FormInput = require('react-input-validation');

<FormInput
	text='Label text here'
	emptyMessage='this field is required'
	errorMessage='Not valid'
	type='number' // default is 'text'
	value={this.state.example || ''}
	onChange={prop => this._onChangeValue({prop})}
	validateType='email'
	onKeyPress={this.handleKeyPress}
	ref='email' />
```

### Notes

You can pass the following props to the component:

- **onChange**: function that will give you the value of input
- **onKeyPress**: optional, for handling keypress on inputs
- **text**: text of label
- **emptyMessage**: this will be appeared when input is empty
- **errorMessage**: this will be appeared when input is not valid
- **className**: optional, give custom class name to input
- **placeholder**: optional
- **type**: type of input
- **value**: value of input
- **validateType**: there are built-in types for validating - ['email', 'required', 'onlyPositiveNumbers', 'url', 'password', 're_password', 'positiveNumberWithLimit', 'custom']
- **passwordMinLength**: use if your validateType = 'password'
- **limitNumber**: use if your validateType = 'positiveNumberWithLimit'
- **validatePattern**: use if your validateType = 'custom', this should be valid regular expression
- **relValue**: use if your validateType = 're_password'
- **withAddon**: optional, text of addon, use in case you want to have bootstrap inputs with addon icons
- **addonPos**: position of addon, default is 'right'
- **ref**: always use this for validating (must be unique)

To check the validation there is a `isValid()` function which you can call with component ref. For more details take a look at  `_isAllValuesTrue()` function which is in `react-input-validation/example/src/example.js`.


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

[MIT](https://github.com/Ggayane/react-input-validation/blob/master/license.md)
