export const addRecipe = recipe => ({ type: 'ADD_RECIPE', payload: recipe });
export const editRecipe = (id, update) => ({
  type: 'EDIT_RECIPE',
  id,
  update
});

export const setTextFilter = text => ({ type: 'SET_TEXT_FILTER', text });
