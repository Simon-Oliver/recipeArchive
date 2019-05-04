import moment from 'moment';

export const selectRecipe = (recipes = [], term = '', sortBy = 'date') =>
  recipes
    .filter(e => e.name.toLowerCase().includes(term.toLocaleLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.recipeCreated < b.recipeCreated ? 1 : -1;
      }
      if (sortBy === 'az') {
        return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
      }
    });
