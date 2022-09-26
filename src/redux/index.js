export const ADD_CART_DATA = 'addCartData';
export const CURRENT_INDEX = 'currentIndex';

const initialState = {
  cartData: [],
};

export default function indexReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CART_DATA:
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };
    case CURRENT_INDEX:
      return {
        ...state,
        selectedIndex: action.payload,
      };
    default:
      return state;
  }
}

export function setCardItems(payload) {
  return {
    type: ADD_CART_DATA,
    payload,
  };
}
export function setSelectedIndex(defaultIndex) {
  return {
    type: CURRENT_INDEX,
    payload: defaultIndex,
  };
}
