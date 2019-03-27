import { ADD_RECIPE, FOUND_BAD_WORD } from '../constants/action-types';

const initialState = {
  recipes: [
    { title: 'Ratatouille', id: 1 },
    { title: 'Passionfruit Mousse', id: 2 },
    { title: 'Chocoloate Mousse', id: 3 },
    { title: 'Popcorn Ice Cream', id: 4 },
    { title: 'Sous vide Spatchcock', id: 5 }
  ],
  data: {},
  isFetching: false,
  isError: false,
  filter: { search: '', sort: false }
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

  if (action.type === 'TEXT_FITLER') {
    return { ...state, filter: { ...state.filter, search: action.payload } };
  }

  if (action.type === 'SORT_RECIPE') {
    return { ...state, filter: { ...state.filter, sort: action.payload } };
  }

  return state;
};

export default rootReducer;
