/**
 * The repos list state selectors
 */

import { createSelector } from 'reselect';

const selectReposList = (state) => state.get('reposList');

const makeSelectCurrentUserInReposList = () => createSelector(
  selectReposList,
  (reposListState) => reposListState.get('currentUser')
);

const makeSelectLoadingInReposList = () => createSelector(
  selectReposList,
  (reposListState) => reposListState.get('loading')
);

const makeSelectErrorInReposList = () => createSelector(
  selectReposList,
  (reposListState) => reposListState.get('error')
);

const makeSelectReposInReposList = () => createSelector(
  selectReposList,
  (reposListState) => reposListState.getIn(['userData', 'repositories'])
);

const makeSelectSelectedRepoInReposList = () => createSelector(
  selectReposList,
  (reposListState) => reposListState.get('selectedRepo')
);


export {
  selectReposList,
  makeSelectCurrentUserInReposList,
  makeSelectLoadingInReposList,
  makeSelectErrorInReposList,
  makeSelectReposInReposList,
  makeSelectSelectedRepoInReposList,
};
