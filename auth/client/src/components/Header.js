import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './HeaderStyle.css'

export class Header extends Component {
  renderHeader(){
    if(this.props.authentication){
      return(
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to ="/feature">Feature</Link>
        </div>
      )
    }else{
      return(
        <div>
          <Link to="/signin">Sign In</Link>
          <Link to="/signup">Sing Up</Link>
        </div>
      )
    }
  }
  render() {
    return (
      <div className="header">
        <Link to="/">Redux Auth</Link>
        {this.renderHeader()}
      </div>
    )
  }
}

function MapStateToPros(state){
  return {authentication: state.auth.authentication}
}

export default connect(MapStateToPros)(Header)
