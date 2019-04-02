const initialState = {
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
  currentRecipe: {}
};

const rootReducers = (state = initialState, action) => {
  if (action.type === 'ADD_RECIPE') {
    return { ...state, recipes: [...state.recipes, action.payload] };
  }

  if (action.type === 'EDIT_RECIPE') {
    return {
      ...state,
      recipes: state.recipes.map(e => {
        if (e.id === action.id) {
          return {
            ...e,
            ...action.update
          };
        }
        return e;
      })
    };
  }

  return state;
};

export default rootReducers;
