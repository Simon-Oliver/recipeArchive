import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.3/node_modules/redux';

const initialState = {
  test: 'something'
};

const rootReducers = (state = initialState, action) => {
  if (action.type === 'ADD_SOMETHING') {
    return { ...state, test: action.payload };
  }
  return state;
};

export default rootReducers;
