import { addRecipe, editRecipe, deleteRecipe, setTextFilter } from '../../actions';

test('should setup remove recipe action object', () => {
  const action = deleteRecipe('123abc');
  expect(action).toEqual({ type: 'DELETE_RECIPE', id: '123abc' });
});

test('should setup edit recipe action object', () => {
  const action = editRecipe('123abc', { title: 'New Recipe', yield: '10pax' });
  expect(action).toEqual({
    type: 'EDIT_RECIPE',
    id: '123abc',
    update: { title: 'New Recipe', yield: '10pax' }
  });
});

test('should setup new recipe action object', () => {
  const action = addRecipe({ title: 'New Recipe', yield: '10pax' });
  expect(action).toEqual({
    type: 'ADD_RECIPE',
    payload: { title: 'New Recipe', yield: '10pax' }
  });
});

test('should should setup filter for text action object', () => {
  const text = 'New Text';
  const action = setTextFilter(text);
  expect(action).toEqual({ type: 'SET_TEXT_FILTER', text });
});
