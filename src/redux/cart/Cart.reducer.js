import { CartActionType } from './Cart.actiontype';
import { addItemToCartUtils, substractItemFromCartUtils } from './Cart.utils';

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
    case CartActionType.SUBSTRACT_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: substractItemFromCartUtils(state.cartItems, action.payload)
      };
    case CartActionType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
      }
    default:
      return state;
  }
}

export default cartReducer;
