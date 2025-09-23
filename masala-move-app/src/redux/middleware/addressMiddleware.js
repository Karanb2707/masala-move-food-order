const addressMiddleware = store => next => action => {
  const result = next(action);

  if (["address/addAddress", "address/clearAddress"].includes(action.type)) {
    const state = store.getState();
    localStorage.setItem("userAddress", JSON.stringify(state.address));
  }

  return result;
};

export default addressMiddleware;
