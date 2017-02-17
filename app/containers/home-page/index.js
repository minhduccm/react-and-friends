/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Card, CardHeader, CardMedia, CardTitle } from 'material-ui/Card';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Card>
        <CardHeader
          title="Duc Dinh"
          subtitle="Software Engineer"
          avatar="https://avatars2.githubusercontent.com/u/6848620?v=3&u=69c28a54e624ce2cae9d88396ba2ab3e3a6c450c&s=400"
        />
        <CardMedia
          overlay={<CardTitle title="Keep it simple & make it happen" subtitle="Ok, let's do it!" />}
        >
          <img src="http://www.material-ui.com/images/nature-600-337.jpg" role="presentation" />
        </CardMedia>
      </Card>
    );
  }
}

HomePage.propTypes = {};

export function mapDispatchToProps() {
  return {};
}

const mapStateToProps = createStructuredSelector({});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
