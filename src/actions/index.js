export const addRecipe = recipe => ({ type: 'ADD_RECIPE', payload: recipe });
export const editRecipe = (id, update) => ({
  type: 'EDIT_RECIPE',
  id,
  update
});

export const deleteRecipe = id => ({ type: 'DELETE_RECIPE', id });

export const setTextFilter = text => ({ type: 'SET_TEXT_FILTER', text });

export const sortBy = sortBy => ({ type: 'SORT_BY', sortBy });
