import { selectRecipe } from '../../../helper/selectRecipe';
import rootReducers from '../../../reducers';

const recipes = [
  {
    recipeIngredient: ['3 or 4 ripe bananas, smashed', '1 egg', '3/4 cup of sugar'],
    name: "Mom's World Famous Banana Bread",
    recipeInstructions:
      'Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.',
    recipeYield: '1 loaf',
    id: '1'
  },
  {
    recipeIngredient: ['200g Chocolate', '1 egg', '300g of sugar'],
    name: 'New Recipe',
    recipeInstructions:
      'Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.',
    recipeYield: '10pax',
    id: '2'
  },
  {
    recipeIngredient: ['1l Milk', '1 egg', '300g of salt'],
    name: 'Another New Recipe',
    recipeInstructions:
      'Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.',
    recipeYield: '10pax',
    id: '3'
  }
];

test('should filter by text value', () => {
  const result = selectRecipe(recipes, 'new');
  expect(result).toEqual([recipes[1], recipes[2]]);
});
