/**
 * Subfooter reducer.
 * @module reducers/subFooterReducer
 */

import { GET_SUBFOOTER } from '../actions';

const initialState = {
  error: null,
  hasErrror: false,
  result: [],
  loadingResults: false,
};

export const subFooterReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_SUBFOOTER}_PENDING`:
      return {
        ...state,
        loadingResults: true,
      };
    case `${GET_SUBFOOTER}_SUCCESS`:
      return {
        ...state,
        result: action.result,
        loadingResults: false,
      };
    case `${GET_SUBFOOTER}_FAIL`:
      return {
        ...state,
        error: action.error,
        hasError: true,
        loadingResults: false,
      };
    default:
      return state;
  }
};
