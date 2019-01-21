import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

export class SignUp extends Component {
  onSubmit = (formPops) => {
    console.log(formPops)
  }

  render() {
    // handleSubmit auto create by redux-form
    const {handleSubmit} = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="passwprd"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <button>Submit</button>
      </form>
    )
  }
}

export default reduxForm({form:'signup'})(SignUp)