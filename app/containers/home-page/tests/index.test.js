/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import muiTheme from 'themes/base';
import { HomePage } from '../index';


describe('<HomePage />', () => {
  it('should render the repos list', () => {
    const id = 'testId';
    const renderedComponent = shallow(
      <HomePage id={id} />
    );
    // expect(renderedComponent.find('img')).toEqual(id);
    expect(renderedComponent.find('img').length).toEqual(1);
  });

  it('should render its text', () => {
    const myProp = 'Text';
    const renderedComponent = mount(
      <MuiThemeProvider>
        <HomePage duc={myProp} />
      </MuiThemeProvider>
    );
    expect(renderedComponent.find('HomePage').props().duc).toEqual(myProp);
  });
});
