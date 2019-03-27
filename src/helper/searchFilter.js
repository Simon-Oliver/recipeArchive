const searchFilter = (recipes, { search }) =>
  recipes.filter(e => e.title.toLowerCase().includes(search.toLowerCase()));

export default searchFilter;
