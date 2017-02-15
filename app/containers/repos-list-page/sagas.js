/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_REPOS_LIST } from 'containers/repos-list-page/constants';
import { reposListLoaded, reposListLoadingError } from 'containers/repos-list-page/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getReposList() {
  // Select username from store
  const username = 'minhduccm';
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposListLoaded(repos, username));
  } catch (err) {
    yield put(reposListLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* getGithubData() {
  // Watches for LOAD_REPOS_LIST actions and calls getReposList when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_REPOS_LIST, getReposList);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  getGithubData,
];
