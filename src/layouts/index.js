import React from 'react'
import Header from '../components/header';

import "../styles/main.scss"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div>
        <Header location={location} />
        {children()}
      </div>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
