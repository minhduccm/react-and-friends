/**
 * Repos list page reducer
 */

import reposListReducer from '../reducer';
import { loadReposList, reposListLoaded, reposListLoadingError, selectRepo } from '../actions';

describe('reposListReducer', () => {
  const initialState = reposListReducer(undefined, {});

  it('returns the initial state', () => {
    expect(initialState).toMatchSnapshot();
  });

  it('handles loadReposList action', () => {
    expect(reposListReducer(initialState, loadReposList()))
      .toMatchSnapshot();
  });

  it('handles reposListLoaded action', () => {
    const repos = [{
      id: '999xxx',
      name: 'react-and-friends',
    }, {
      id: '888yyy',
      name: 'flashcard',
    }];
    const username = 'minhduccm';
    expect(reposListReducer(initialState, reposListLoaded(repos, username)))
      .toMatchSnapshot();
  });

  it('handles reposListLoadingError action', () => {
    const error = 'Something went wrong!!!';
    expect(reposListReducer(initialState, reposListLoadingError(error)))
      .toMatchSnapshot();
  });

  it('handles selectRepo action', () => {
    const selectedRepo = {
      id: '777xyz',
      name: 'awesome react app',
    };
    expect(reposListReducer(initialState, selectRepo(selectedRepo)))
      .toMatchSnapshot();
  });
});
