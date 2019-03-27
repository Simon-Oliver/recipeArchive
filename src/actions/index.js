import { ADD_RECIPE, FOUND_BAD_WORD } from '../constants/action-types';

export const addRecipe = recipe => ({ type: ADD_RECIPE, payload: recipe });
export const badWord = error => ({ type: FOUND_BAD_WORD, payload: error });
export const getData = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => dispatch({ type: 'DATA_LOADED', payload: json }));
};

export const searchRecipe = search => ({ type: 'TEXT_FITLER', payload: search });
