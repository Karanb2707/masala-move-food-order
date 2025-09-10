import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrders: (state, action) => {
            return action.payload;
        }
    }
});

export const { addOrders } = orderSlice.actions;
export default orderSlice.reducer;