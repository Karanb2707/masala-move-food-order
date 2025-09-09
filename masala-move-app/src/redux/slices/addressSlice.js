import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        addAddress: (state, action) => {
            const address = action.payload;
            state = address;
        }
    }
});

export const { addAddress } = addressSlice.actions;
export default addressSlice.reducer;