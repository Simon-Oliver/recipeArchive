export const addRecipe = recipe => ({ type: 'ADD_RECIPE', payload: recipe });
export const editRecipe = (id, update) => ({
  type: 'EDIT_RECIPE',
  id,
  update
});
