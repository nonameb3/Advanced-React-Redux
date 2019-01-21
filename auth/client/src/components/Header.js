import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <div>
        Link
        <Link to="/reduxauth">Redux Auth</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sing Up</Link>
        <Link to="/signout">Sign Out</Link>
        <Link to ="/feature">Feature</Link>
      </div>
    )
  }
}

export default Header
