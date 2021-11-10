import constants from './constants';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_PRODUCTS:
      return state;
    case constants.ADD_PRODUCTS:
      return [{ ...action.payload, id: state.length + 1 }, ...state];
    default:
      return initialState;
  }
};

export default reducer;
