export const initialState = {
  recipes: [
    {
      recipeIngredient: ['3 or 4 ripe bananas, smashed', '1 egg', '3/4 cup of sugar'],
      name: "Mom's World Famous Banana Bread",
      recipeInstructions:
        'Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.',
      recipeYield: '1 loaf',
      id: '1',
      recipeLastEdited: ['2014-09-08T08:02:17-05:00'],
      recipeCreated: '2013-09-08T08:02:17-05:00'
    },
    {
      recipeIngredient: ['200g Chocolate', '1 egg', '300g of sugar'],
      name: 'New Recipe',
      recipeInstructions:
        'Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.',
      recipeYield: '10pax',
      id: '2',
      recipeLastEdited: ['2016-09-08T08:02:17-08:00', '2014-09-08T08:02:17-05:00'],
      recipeCreated: '2015-09-08T08:02:17-05:00'
    },
    {
      recipeIngredient: ['1l Milk', '1 egg', '300g of salt'],
      name: 'Another New Recipe',
      recipeInstructions:
        'Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.',
      recipeYield: '10pax',
      id: '3',
      recipeLastEdited: [],
      recipeCreated: '2014-09-08T08:02:17-03:00'
    }
  ],
  textFilter: ''
};
