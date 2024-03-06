// store is like a mini temp in-the-middle databasee

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from './slices/RootSlice';

export const store = configureStore({
    reducer,
    devTools: true,
})