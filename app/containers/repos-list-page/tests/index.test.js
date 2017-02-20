/**
 * Test the ReposListPage
 */

import React from 'react';
import { shallowWithMuiContext, mountWithMuiContext } from 'utils/enzyme-test-with-mui';
import sinon from 'sinon';

import { loadReposList, selectRepo } from 'containers/repos-list-page/actions';
import { ReposListPage, mapDispatchToProps } from '../index';

describe('<ReposListPage />', () => {
  it('should renders without exploding', () => {
    const props = {
      router: {
        push: () => {},
      },
    };
    const renderedComponent = shallowWithMuiContext(
      <ReposListPage {...props} />
    );
    expect(renderedComponent).toBeDefined();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('componentDidMount function should be called', () => {
    const props = {
      router: {
        push: () => {},
      },
      onLoadReposList: () => {},
    };
    sinon.spy(ReposListPage.prototype, 'componentDidMount');
    sinon.spy(props, 'onLoadReposList');
    mountWithMuiContext(<ReposListPage {...props} />);
    expect(ReposListPage.prototype.componentDidMount.callCount).toEqual(1);
    expect(props.onLoadReposList.callCount).toEqual(1);
    ReposListPage.prototype.componentDidMount.restore();
  });

  it('should render 2 TableRow components inside TableBody component', () => {
    const props = {
      onLoadReposList: () => {},
      router: {
        push: () => {},
      },
      repos: [{
        id: '999xxx',
        name: 'react-and-friends',
      }, {
        id: '888yyy',
        name: 'react-is-awesome',
      }],
    };

    const renderedComponent = shallowWithMuiContext(
      <ReposListPage {...props} />
    );
    expect(renderedComponent.find('TableBody').find('TableRow').length).toEqual(2);
  });

  it('mapDispatchToProps - onLoadReposList, onSelectRepo should be injected', () => {
    const dispatchSpy = sinon.spy();
    const dispatchProps = mapDispatchToProps(dispatchSpy);
    expect(dispatchProps.onLoadReposList).toBeDefined();
    expect(dispatchProps.onSelectRepo).toBeDefined();
  });

  it('mapDispatchToProps - dispatch loadReposList should be called', () => {
    const dispatchSpy = jest.fn();
    const dispatchProps = mapDispatchToProps(dispatchSpy);
    dispatchProps.onLoadReposList();
    expect(dispatchSpy).toHaveBeenCalledWith(loadReposList());
  });

  it('mapDispatchToProps - dispatch onSelectRepo should be called', () => {
    const dispatchSpy = jest.fn();
    const dispatchProps = mapDispatchToProps(dispatchSpy);
    const selectedRepo = {};
    dispatchProps.onSelectRepo(selectedRepo);
    expect(dispatchSpy).toHaveBeenCalledWith(selectRepo(selectedRepo));
  });

  // it('simulate click event on Table cell', () => {
  //   const onCellClickSpy = sinon.spy();
  //   const routerPushSpy = sinon.spy();
  //   const props = {
  //     onLoadReposList: () => {},
  //     router: {
  //       push: routerPushSpy,
  //     },
  //     repos: [{
  //       id: '999xxx',
  //       name: 'react-and-friends',
  //     }, {
  //       id: '888yyy',
  //       name: 'react-is-awesome',
  //     }],
  //     onSelectRepo: onCellClickSpy,
  //     onTouchTap: onCellClickSpy,
  //   };

  //   const renderedComponent = shallowWithMuiContext(
  //     <ReposListPage {...props} />
  //   );
  //   // console.log('------------- ', renderedComponent.debug());
  //   console.log('------------: ', renderedComponent.find('TableRow').at(2).find('tr'));
  //   // renderedComponent.find('TableRow').at(2).simulate('click');
  //   renderedComponent.find('TableRow').at(2).simulate('touchTap');
  //   expect(onCellClickSpy.callCount).toEqual(1);

  //   // renderedComponent.find('button').simulate('click');
  //   // expect(onButtonClick).to.have.property('callCount', 1);
  // });
});
