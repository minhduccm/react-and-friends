/*
 * Repos list Page
 */

import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectReposInReposList } from 'containers/repos-list-page/selectors';
import { loadReposList, selectRepo } from 'containers/repos-list-page/actions';

import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

export class ReposListPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    // load repos when navigating to this page
    this.props.onLoadReposList();
  }

  selectRepo(rowNumber) {
    const selectedRepo = this.props.repos[rowNumber];
    this.props.onSelectRepo(selectedRepo);
    this.props.router.push(`/repos/${selectedRepo.id}`);
  }

  render() {
    const { repos } = this.props;
    return (
      <Table onCellClick={(rowNumber) => this.selectRepo(rowNumber)}>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Repo Name</TableHeaderColumn>
            <TableHeaderColumn>Language</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          { repos && repos.map((repo) =>
            <TableRow key={repo.id} >
              <TableRowColumn>{repo.id}</TableRowColumn>
              <TableRowColumn>{repo.name}</TableRowColumn>
              <TableRowColumn>{repo.language}</TableRowColumn>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  }
}

ReposListPage.propTypes = {
  onLoadReposList: React.PropTypes.func,
  onSelectRepo: React.PropTypes.func,
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  router: React.PropTypes.shape({
    push: React.PropTypes.func.isRequired,
  }).isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadReposList: () => {
      dispatch(loadReposList());
    },
    onSelectRepo: (selectedRepo) => {
      dispatch(selectRepo(selectedRepo));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectReposInReposList(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ReposListPage);
