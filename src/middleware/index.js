import { ADD_RECIPE } from '../constants/action-types';
import { badWord } from '../actions';

const forbiddenWords = ['vegan', 'gluten'];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      if (action.type === ADD_RECIPE) {
        const foundWord = forbiddenWords.filter(word => action.payload.title.includes(word));
        if (foundWord.length) {
          return dispatch(badWord('You have been using a forbidden word!'));
        }
      }
      return next(action);
    };
  };
}
