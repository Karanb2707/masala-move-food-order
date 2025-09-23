import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("userAddress")) || {};

const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        addAddress: (state, action) => {
            return action.payload;
        },
        clearAddress: () => {
            return {};
        }
    }
});

export const { addAddress, clearAddress } = addressSlice.actions;
export default addressSlice.reducer;
