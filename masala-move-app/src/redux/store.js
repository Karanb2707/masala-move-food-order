import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import addressReducer from './slices/addressSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        address: addressReducer
    }
})