import { ADD_RECIPE, FOUND_BAD_WORD } from '../constants/action-types';

export const addRecipe = recipe => ({ type: ADD_RECIPE, payload: recipe });
export const badWord = error => ({ type: FOUND_BAD_WORD, payload: error });
