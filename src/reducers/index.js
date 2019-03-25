import { ADD_RECIPE, FOUND_BAD_WORD } from '../constants/action-types';

const initialState = {
  recipes: [],
  data: {},
  isFetching: false,
  isError: false
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_RECIPE) {
    return { ...state, recipes: [...state.recipes, action.payload], isError: '' };
  }
  if (action.type === FOUND_BAD_WORD) {
    return { ...state, isError: action.payload };
  }

  if (action.type === 'DATA_LOADED') {
    return { ...state, data: action.payload };
  }

  return state;
};

export default rootReducer;
