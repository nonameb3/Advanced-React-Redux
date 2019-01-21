import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { SignUp as SignUpAction } from '../../actions'

export class SignUp extends Component {
  onSubmit = (formPops) => {
    console.log(formPops)
    this.props.SignUpAction(formPops)
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
            name="password"
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

export default compose(
  connect(null, { SignUpAction }),
  reduxForm({form:'signup'})
)(SignUp)