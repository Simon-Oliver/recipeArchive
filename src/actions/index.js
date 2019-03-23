import { ADD_RECIPE } from '../constants/action-types';

export const addRecipe = recipe => ({ type: ADD_RECIPE, payload: recipe });
