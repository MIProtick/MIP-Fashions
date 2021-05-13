export const addItemToCartUtils = (existingCartItems, cartItemToAdd) => {
  const existingItem = existingCartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

  if (existingItem) {
    return existingCartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...existingCartItems, { ...cartItemToAdd, quantity: 1 }];
}


export const substractItemFromCartUtils = (existingCartItems, cartItemToSubstract) => {
  const existingItem = existingCartItems.find(cartItem => cartItem.id === cartItemToSubstract.id)

  if (existingItem.quantity === 1) {
    return existingCartItems.filter(cartItem => cartItem.id !== cartItemToSubstract.id);
  }
  
  
  return existingCartItems.map(cartItem =>
    cartItem.id === cartItemToSubstract.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
}