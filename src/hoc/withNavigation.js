import React, { Component } from 'react';

import { Link } from '../routing/Routing';

const withNavigation = (WrappedComponent, path) => class extends Component {
  render() {
    return (
      <Link to={path}>
        <WrappedComponent {...this.props} />
      </Link>
    )
  }
}

export default withNavigation;