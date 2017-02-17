/**
 * Repos list page reducer
 */

// import { fromJS } from 'immutable';
import reposListReducer from '../reducer';


// const initialState = fromJS({
//   loading: false,
//   error: false,
//   currentUser: false,
//   userData: {
//     repositories: false,
//   },
//   selectedRepo: false,
// });

describe('reposListReducer', () => {
  it('returns the initial state', () => {
    // expect(reposListReducer(undefined, {})).toEqual(initialState);
    expect(reposListReducer(undefined, {})).toMatchSnapshot();
  });

  it('handles the toggleNav action', () => {

  });
});
