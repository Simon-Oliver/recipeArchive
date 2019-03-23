import { ADD_RECIPE } from '../constants/action-types';

const initialState = {
  recipes: []
};

const rootReducer = (state = initialState, action) => {
  if (action.type === ADD_RECIPE) {
    return { ...state, recipes: [...state.recipes, action.payload] };
  }

  return state;
};

export default rootReducer;
