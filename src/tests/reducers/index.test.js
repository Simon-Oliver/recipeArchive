import rootReducers from '../../reducers';

const initialState = {
  recipes: [
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
  ],
  textFilter: ''
};

test('should setup default recipe values', () => {
  const state = rootReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    recipes: [
      {
        recipeIngredient: ['3 or 4 ripe bananas, smashed', '1 egg', '3/4 cup of sugar'],
        name: "Mom's World Famous Banana Bread",
        recipeInstructions:
          'Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.',
        recipeYield: '1 loaf',
        id: '1234'
      }
    ],
    textFilter: ''
  });
});

test('should edit existing recipe in state', () => {
  const state = rootReducers(initialState, {
    type: 'EDIT_RECIPE',
    id: '3',
    update: { name: 'Updated Recipe' }
  });
  expect(state).toEqual({
    recipes: [
      initialState.recipes[0],
      initialState.recipes[1],
      {
        recipeIngredient: ['1l Milk', '1 egg', '300g of salt'],
        name: 'Updated Recipe',
        recipeInstructions:
          'Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.',
        recipeYield: '10pax',
        id: '3'
      }
    ],
    textFilter: ''
  });
});

test('should add new recipe to state', () => {
  const state = rootReducers(initialState, {
    type: 'ADD_RECIPE',
    payload: {
      recipeIngredient: ['1l Milk', '1 egg', '300g of salt'],
      name: 'Fourth Recipe',
      recipeInstructions:
        'Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.',
      recipeYield: '10pax',
      id: '4'
    }
  });

  expect(state).toEqual({
    recipes: [
      ...initialState.recipes,
      {
        recipeIngredient: ['1l Milk', '1 egg', '300g of salt'],
        name: 'Fourth Recipe',
        recipeInstructions:
          'Preheat the oven to 350 degrees. Mix in the ingredients in a bowl. Add the flour last. Pour the mixture into a loaf pan and bake for one hour.',
        recipeYield: '10pax',
        id: '4'
      }
    ],
    textFilter: ''
  });
});
