/*
 * H1
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';

class H1 extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <h1>
        <a>Keep it simple!!!</a>
      </h1>
    );
  }
}

H1.propTypes = {};
export default H1;
