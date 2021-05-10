import { CartActionType } from './Cart.actiontype';

export const toggleCarthidden = () => ({
    type: CartActionType.TOGGLE_CART_HIDDEN,
    
});

export const addItemToCart = item =>({
    type: CartActionType.ADD_ITEM_TO_CART,
    payload: item
})