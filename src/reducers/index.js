import { initialState } from '../dumyData/initialDummyData';
import { selectRecipe } from '../helper/selectRecipe';

const rootReducers = (state = initialState, action) => {
  if (action.type === 'ADD_RECIPE') {
    return { ...state, recipes: [...state.recipes, action.payload] };
  }

  if (action.type === 'EDIT_RECIPE') {
    return {
      ...state,
      recipes: state.recipes.map(e => {
        if (e.id === action.id) {
          return {
            ...e,
            ...action.update,
            recipeLastEdited: [action.recipeLastEdited, ...e.recipeLastEdited]
          };
        }
        return e;
      })
    };
  }

  if (action.type === 'SET_TEXT_FILTER') {
    return { ...state, textFilter: action.text };
  }

  if (action.type === 'DELETE_RECIPE') {
    return { ...state, recipes: [...state.recipes.filter(e => e.id !== action.id)] };
  }

  if (action.type === 'SORT_BY') {
    return { ...state, sortBy: action.sortBy };
  }

  return state;
};

export default rootReducers;
