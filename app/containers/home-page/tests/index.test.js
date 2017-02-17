/**
 * Test the HomePage
 */

import React from 'react';
// import { shallow, mount } from 'enzyme';
import { shallowWithMuiContext, mountWithMuiContext } from 'utils/enzyme-test-with-mui';
import { HomePage } from '../index';

describe('<HomePage />', () => {
  it('should contain `duc` property with right value', () => {
    const myProp = 'Text';
    const renderedComponent = mountWithMuiContext(
      <HomePage duc={myProp} />
    );
    expect(renderedComponent.find('HomePage').props().duc).toEqual(myProp);
  });

  it('should contain `img` tag', () => {
    const renderedComponent = shallowWithMuiContext(
      <HomePage />
    );
    expect(renderedComponent.find('Card').length).toEqual(1);

    const cardHeaderComponent = renderedComponent.find('CardHeader');
    expect(cardHeaderComponent.length).toEqual(1);
    expect(cardHeaderComponent.props().title).toEqual('Duc Dinh');

    expect(renderedComponent.find('CardMedia').length).toEqual(1);
    expect(renderedComponent.find('img').length).toEqual(1);
  });
});
