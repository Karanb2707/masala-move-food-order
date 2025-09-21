const cartMiddleware = store => next => action => {
  const result = next(action);

  if (["cart/addItem", "cart/removeItem", "cart/clearCart"].includes(action.type)) {
    const state = store.getState();
    localStorage.setItem("cartItems", JSON.stringify(state.cart.items));
  }

  return result;
};

export default cartMiddleware;
