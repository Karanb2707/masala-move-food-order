import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import addressReducer from './slices/addressSlice';
import orderReducer from './slices/orderSlice';
import cartMiddleware from './middleware/cartMiddleware';
import orderMiddleware from './middleware/orderMiddleware';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        address: addressReducer,
        order: orderReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(cartMiddleware, orderMiddleware)
})