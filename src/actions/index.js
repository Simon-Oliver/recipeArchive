export const addRecipe = recipe => ({ type: 'ADD_RECIPE', payload: recipe });
export const editRecipe = (id, update, recipeLastEdited) => ({
  type: 'EDIT_RECIPE',
  id,
  update,
  recipeLastEdited
});

export const deleteRecipe = id => ({ type: 'DELETE_RECIPE', id });

export const setTextFilter = text => ({ type: 'SET_TEXT_FILTER', text });

export const sortRecipeBy = sortBy => ({ type: 'SORT_BY', sortBy });
