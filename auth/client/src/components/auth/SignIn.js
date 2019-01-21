import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { SignIn as SignInAction } from '../../actions'

export class SignIn extends Component {
  onSubmit = (formPops) => {
    this.props.SignInAction(formPops, ()=>{
      this.props.history.push('/feature')
    })
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
        <h3>
          {this.props.errorMessage}
        </h3>
        <button>SignIn</button>
      </form>
    )
  }
}

function MapStateToProps(state){
  return {errorMessage:state.auth.error}
}

const SignInComponent = compose(
  connect(MapStateToProps, { SignInAction }),
  reduxForm({form:'signup'})
)(SignIn)

export default withRouter(SignInComponent)