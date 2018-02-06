import React from 'react'
import Header from '../components/header';
import Sidebar from '../components/sidebar';

import "../styles/main.scss"

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div id="wrapper">
        <Header location={location} />
        {children()}
        <Sidebar />
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
