import { CartActionType } from './Cart.actiontype';

const InitiaState = {
  hidden: true,
}

const cartReducer = (state = InitiaState, action) => {
  switch (action.type) {
    case CartActionType.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
}

export default cartReducer;
