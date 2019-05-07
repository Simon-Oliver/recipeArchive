import rootReducers from '../../reducers';
import { initialState } from '../../dumyData/initialDummyData';

test('should setup default recipe values', () => {
  const state = rootReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    recipes: [...initialState.recipes],
    textFilter: ''
  });
});

test('should edit existing recipe in state', () => {
  const state = rootReducers(initialState, {
    type: 'EDIT_RECIPE',
    id: '3',
    update: { name: 'Updated Recipe' },
    recipeLastEdited: '2015-09-08T08:02:17-05:00'
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
        recipeCreated: '2014-09-08T08:02:17-03:00',
        recipeLastEdited: ['2015-09-08T08:02:17-05:00'],
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

test('should delete recipe from state', () => {
  const state = rootReducers(initialState, { type: 'DELETE_RECIPE', id: '3' });
  expect(state).toEqual({
    recipes: [initialState.recipes[0], initialState.recipes[1]],
    textFilter: ''
  });
});

test('should set sortBy to az', () => {
  const state = rootReducers(initialState, { type: 'SORT_BY', sortBy: 'az' });
  expect(state).toEqual({
    recipes: [initialState.recipes[0], initialState.recipes[1], initialState.recipes[2]],
    sortBy: 'az',
    textFilter: ''
  });
});

test('should set sortBy to date', () => {
  const state = rootReducers(initialState, { type: 'SORT_BY', sortBy: 'date' });
  expect(state).toEqual({
    recipes: [initialState.recipes[0], initialState.recipes[1], initialState.recipes[2]],
    sortBy: 'date',
    textFilter: ''
  });
});
