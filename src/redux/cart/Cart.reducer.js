import { CartActionType } from './Cart.actiontype';
import { addItemToCartUtils } from './Cart.utils';

const InitiaState = {
  hidden: true,
  cartItems: [],
}

const cartReducer = (state = InitiaState, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionType.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCartUtils(state.cartItems, action.payload)
      };
    default:
      return state;
  }
}

export default cartReducer;
