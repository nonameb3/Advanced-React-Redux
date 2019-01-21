import React, { Component } from 'react'
import RequireAuth from './requireAuth'

export class Feature extends Component {
  render() {
    return (
      <div>
        this is feature page
      </div>
    )
  }
}

export default RequireAuth(Feature) 