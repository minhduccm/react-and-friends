import React from 'react';
import { shallow, mount } from 'enzyme';

import H1 from '../index';

describe('<H1 />', () => {
  it('should render a prop', () => {
    // const id = 'testId';
    const renderedComponent = shallow(
      <H1 />
    );
    // expect(renderedComponent.prop('id')).toEqual(id);
    expect(renderedComponent.find('h1').length).toEqual(1);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should render its text', () => {
    const xxx = 'xxx!!!';
    const renderedComponent = mount(
      <H1 dech={xxx} />
    );
    expect(renderedComponent.text()).toEqual('Keep it simple!!!');
    expect(renderedComponent.prop('dech')).toEqual(xxx);
    renderedComponent.setProps({ dech: 'yyy' });
    expect(renderedComponent.prop('dech')).toEqual('yyy');
    console.log('------- state: ', renderedComponent.state());
    console.log('------- key: ', renderedComponent.key());
    console.log('------- props: ', renderedComponent.props());
  });
});
