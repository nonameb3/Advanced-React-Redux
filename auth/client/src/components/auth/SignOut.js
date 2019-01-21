import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignOut as SignOutAction } from '../../actions'

export class SignOut extends Component {
  componentDidMount(){
    this.props.SignOutAction()
  }

  render() {
    return (
      <div>
        Sorry to see you go!
      </div>
    )
  }
}

export default connect(null, {SignOutAction})(SignOut)
