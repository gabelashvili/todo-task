import CONSTANTS from './constants';

const actions = {
  addProduct: (data) => ({
    type: CONSTANTS.ADD_PRODUCTS,
    payload: data,
  }),
};

export default actions;
