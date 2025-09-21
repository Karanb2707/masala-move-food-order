const orderMiddleware = store => next => action => {
    const result = next(action);

    if (["order/addOrders"].includes(action.type)) {
        const state = store.getState();
        localStorage.setItem("orderData", JSON.stringify(state.order.orderData));
    }

    return result;
};

export default orderMiddleware;
