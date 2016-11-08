import React from 'react'
import ReactDOM from 'react-dom'
import FormInput from 'react-input-validation'
export default class App extends React.Component {
	constructor () {
		super()
		this.state = {
			email: '',
			name: '',
			age: '',
			password: '',
			re_password: '',
			error: false,
			btn_text: 'Check'
		}
		this._onChangeValue = this._onChangeValue.bind(this)
		this.checkValidation = this.checkValidation.bind(this)
	}

	_onChangeValue (prop, param) {
		var state = {}
    state[param] = prop.prop
    this.setState(state)
  }

	checkValidation () {
		var error = false
		if (this._isAllValuesTrue(this.refs)) {
      var btn_text = 'Done!'
    } else {
			var btn_text = 'Not Valid!'
			error = true
		}
    this.setState({
			error,
			btn_text
		})
	}

	_isAllValuesTrue (obj) {
    return Object.keys(obj).every(elem => (typeof obj[elem].isValid === 'function' && obj[elem].isValid() === true))
  }

	render () {
		return (
			<div className='row'>
				<div className='col-md-6 col-md-offset-3'>
					<FormInput
						text='Email'
						emptyMessage='email is required'
						errorMessage='Not valid email'
						type='email'
						value={this.state.email || ''}
						onChange={prop => this._onChangeValue({prop}, 'email')}
						validateType='email'
						onKeyPress={this.handleKeyPress}
						ref='email'/>
					<FormInput
						text='Name'
						emptyMessage='Name is required'
						type='text'
						value={this.state.name || ''}
						onChange={prop => this._onChangeValue({prop}, 'name')}
						validateType='required'
						onKeyPress={this.handleKeyPress}
						ref='name'/>
					<FormInput
	          text='Age'
	          emptyMessage='Age is required'
	          errorMessage='Please enter a positive number'
	          type='number'
	          value={this.state.age || ''}
	          onChange={prop => this._onChangeValue({prop}, 'age')}
	          validateType='onlyPositiveNumbers'
	          ref='age' />
					<FormInput
	          text='Password'
	          emptyMessage='Password is required'
	          errorMessage='Password should contain at least 6 digits.'
	          type='password'
	          value={this.state.password || ''}
	          onChange={prop => this._onChangeValue({prop}, 'password')}
	          passwordMinLength={6}
	          validateType='password'
	          onKeyPress={this.handleKeyPress}
	          ref='password' />
					<FormInput
	          text='Repeat Password'
	          emptyMessage='Repeat Password is required'
	          errorMessage='Not matching'
	          type='password'
	          value={this.state.re_password || ''}
	          onChange={prop => this._onChangeValue({prop}, 're_password')}
	          validateType='re_password'
	          relValue={this.state.password || ''}
	          onKeyPress={this.handleKeyPress}
	          ref='re_password' />
						<button type='button' className={'btn btn-md btn-block ' + (this.state.error ? 'btn-danger' : 'btn-success')} onClick={this.checkValidation}>{this.state.btn_text}</button>
					</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'))
