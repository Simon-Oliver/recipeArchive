const searchFilter = (recipes, { search = '', sort }) => {
  const textfilter = recipes.filter(e => e.title.toLowerCase().includes(search.toLowerCase()));

  if (sort) {
    return textfilter.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1));
  }
  return textfilter;
};

export default searchFilter;
