import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import addressReducer from './slices/addressSlice';
import orderReducer from './slices/orderSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        address: addressReducer,
        order: orderReducer
    }
})