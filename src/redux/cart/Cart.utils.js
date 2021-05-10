export const addItemToCartUtils = (existingCartItems, cartItemToAdd) => {
  const existingItem = existingCartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

  if (existingItem) {
    return existingCartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 } 
        : cartItem
    )
  }
  return [...existingCartItems, {...cartItemToAdd, quantity: 1}];
}