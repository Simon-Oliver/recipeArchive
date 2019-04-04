export const selectRecipe = (recipes = [], term = '') =>
  recipes.filter(e => e.name.toLowerCase().includes(term.toLocaleLowerCase()));
