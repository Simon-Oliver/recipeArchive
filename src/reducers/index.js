import { ADD_RECIPE, FOUND_BAD_WORD } from '../constants/action-types';

const initialState = {
  recipes: [],
  error: ''
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_RECIPE) {
    return { ...state, recipes: [...state.recipes, action.payload], error: '' };
  }
  if (action.type === FOUND_BAD_WORD) {
    return { ...state, error: action.payload };
  }

  return state;
};

export default rootReducer;
