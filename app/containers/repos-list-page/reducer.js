/*
 * ReposListReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_REPOS_LIST_SUCCESS,
  LOAD_REPOS_LIST,
  LOAD_REPOS_LIST_ERROR,
  SELECT_REPO,
} from './constants';

// The initial state of the Repos list
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  selectedRepo: false,
});

function reposListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS_LIST:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false);

    case LOAD_REPOS_LIST_SUCCESS:
      console.log('LOAD_REPOS_LIST_SUCCESS func; ', action);
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false)
        .set('currentUser', action.username);

    case LOAD_REPOS_LIST_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);

    case SELECT_REPO:
      const userData = state.get('userData').toJS();
      console.log('SELECT_REPO: ', userData);
      return state
        .set('selectedRepo', action.selectedRepo);

    default:
      return state;
  }
}

export default reposListReducer;
