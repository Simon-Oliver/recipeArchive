import { ADD_RECIPE } from '../constants/action-types';
import { badWord } from '../actions';

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_RECIPE) {
        if (action.payload.title.length < 1) {
          return dispatch(badWord('You have to enter something!'));
        }
      }
      return next(action);
    };
  };
}
