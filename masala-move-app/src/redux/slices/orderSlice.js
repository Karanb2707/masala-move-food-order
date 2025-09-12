import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderData: []
}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrders: (state, action) => {
            state.orderData.push({ ...action.payload });
        }
    }
});

export const { addOrders } = orderSlice.actions;
export default orderSlice.reducer;