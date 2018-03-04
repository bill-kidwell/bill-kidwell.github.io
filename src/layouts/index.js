import React from 'react'
import PropTypes from 'prop-types'
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
  children: PropTypes.func,
  location: PropTypes.object,
  route: PropTypes.object,
}

export default Template
