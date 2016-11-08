import React from 'react'
import ValidationRules from './lib/validation-rules'
import utils from './lib/utils'

export default class ReactInputValidation extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      errorMessage: this.props.emptyMessage,
      empty: this.isEmpty(this.props.value),
      valid: null
    }
    utils._bind('handleChange', 'handlekeyPress')
  }

  isEmpty (value) {
    return value === ''
  }

  handleChange (event) {
    this.setState({
      value: event.target.value,
      empty: this.isEmpty(event.target.value)
    })

    if (this.props.validateType) {
      this.validateInput(event.target.value)
    }

    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event.target.value)
    }
  }

  handlekeyPress (event) {
    if (typeof this.props.onKeyPress === 'function') {
      this.props.onKeyPress(event)
    }
  }

  isValid () {
    if (this.props.validateType && this.callValidateRules(this.props.value, this.props.validateType)) {
      this.setState({
        valid: true,
        errorMessage: ''
      })
      return true
    } else {
      this.setState({
        valid: false,
        errorMessage: this.isEmpty(this.props.value) ? this.props.emptyMessage : this.props.errorMessage
      })
      return false
    }
  }

  callValidateRules (value, type) {
    switch (type) {
      case 'email':
        return ValidationRules.checkEmail(value)
      case 'required':
        return !this.isEmpty(value)
      case 'onlyPositiveNumbers':
        return ValidationRules.checkNumberPositive(value)
      case 'url':
        return ValidationRules.checkUrl(value)
      case 'password':
        return ValidationRules.checkPassword(value, this.props.passwordMinLength ? this.props.passwordMinLength : 6)
      case 're_password':
        return ValidationRules.checkRePassword(value, this.props.relValue)
      case 'positiveNumberWithLimit':
        return ValidationRules.positiveNumberWithLimit(value, this.props.limitNumber || 1)

    }
  }

  validateInput (value) {
    if (this.props.validateType && this.callValidateRules(value, this.props.validateType)) {
      this.setState({
        valid: true
      })
    } else {
      this.setState({
        valid: false,
        errorMessage: this.isEmpty(value) ? this.props.emptyMessage : this.props.errorMessage
      })
    }
  }

  inputWithAddon () {
    if (this.props.addonPos === 'left') {
      return (
        <div className='input-group'>
          <div className='input-group-addon'>
            {this.props.withAddon}
          </div>
          {this.regularInput()}
        </div>
      )
    } else {
      return (
        <div className='input-group'>
          {this.regularInput()}
          <div className='input-group-addon'>
            {this.props.withAddon}
          </div>
        </div>
      )
    }
  }

  regularInput () {
    return (
      <input
        placeholder={this.props.placeholder}
        className={this.props.className ? this.props.className + ' form-control' : 'form-control'}
        id={this.props.text}
        type={this.props.type}
        value={this.props.value}
        onChange={this.handleChange}
        onKeyPress={this.handlekeyPress}
      />
    )
  }

  render () {
    var validateClassName = this.state.valid !== null ? (this.state.valid ? 'form-group has-success' : 'form-group has-error') : 'form-group'

    return (
      <div className={validateClassName}>

        <label className='control-label' htmlFor={this.props.text}>
          {this.props.text}
        </label>

        {this.props.withAddon ? this.inputWithAddon() : this.regularInput()}
        <div className={(this.state.valid === null || this.state.valid) ? 'help-block hidden' : 'help-block'}>{this.state.errorMessage}</div>

      </div>
    )
  }
}

ReactInputValidation.propTypes = {
  onChange: React.PropTypes.func, // function that will set state
  onKeyPress: React.PropTypes.func, // optional, for handleing keypress on inputs
  text: React.PropTypes.string,
  emptyMessage: React.PropTypes.string,
  errorMessage: React.PropTypes.string,
  className: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  type: React.PropTypes.string, // input type, by default this is 'text'
  value: React.PropTypes.isRequired,
  validateType: React.PropTypes.oneOf(['checkEmail', 'checkNumberPositive', 'checkUrl', 'checkPassword', 'checkRePassword', 'positiveNumberWithLimit']),
  passwordMinLength: React.PropTypes.number, // use if your validateType = 'password'
  limitNumber: React.PropTypes.number, // use if your validateType = 'positiveNumberWithLimit'
  relValue: React.PropTypes.string, // use if your validateType = 're_password'
  withAddon: React.PropTypes.string, // optional, text of addon, use in case you want to have bootstrap inputs with addon icons
  addonPos: React.PropTypes.string, // position of addon, default is 'right'
  ref: React.PropTypes.isRequired // always use this for validating (must be unique)
}
