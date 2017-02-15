/*
 * Repo detail Page
 */

import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectSelectedRepoInReposList } from 'containers/repos-list-page/selectors';
// import { loadReposList, selectRepo } from 'containers/repos-list-page/actions';

export class RepoDetailPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    if (this.props.selectedRepo) {
      console.log('--------------------: selectedRepo: ', this.props.selectedRepo);
    }
  }

  render() {
    const { repoId } = this.props.params;
    return (
      <div>Repo detail for { repoId } :))</div>
    );
  }
}

RepoDetailPage.propTypes = {
  selectedRepo: React.PropTypes.object,
};

export function mapDispatchToProps(dispatch) {
  return {
    // onLoadReposList: () => {
    //   dispatch(loadReposList());
    // },
    // onSelectRepo: (selectedRepo) => {
    //   dispatch(selectRepo(selectedRepo));
    // },
  };
}

const mapStateToProps = createStructuredSelector({
  selectedRepo: makeSelectSelectedRepoInReposList(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(RepoDetailPage);
