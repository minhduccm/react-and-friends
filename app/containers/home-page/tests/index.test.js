/**
 * Test the HomePage
 */

import React from 'react';
// import { shallow, mount } from 'enzyme';
import { shallowWithMuiContext, mountWithMuiContext } from 'utils/enzyme-test-with-mui';
import { HomePage } from '../index';

describe('<HomePage />', () => {
  it('should render the repos list', () => {
    const id = 'testId';
    const renderedComponent = shallowWithMuiContext(
      <HomePage id={id} />
    );
    // expect(renderedComponent.find('img')).toEqual(id);
    expect(renderedComponent.find('img').length).toEqual(1);
  });

  it('should render its text', () => {
    const myProp = 'Text';
    const renderedComponent = mountWithMuiContext(
      <HomePage duc={myProp} />
    );
    expect(renderedComponent.find('HomePage').props().duc).toEqual(myProp);
  });
});
