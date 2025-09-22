import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        addAddress: (state, action) => {
            return action.payload;
        },
        clearAddress: () => {
            return initialState;
        }
    }
});

export const { addAddress, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;