import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./features/api/baseApi";
import cartSlice from "./features/cartSlice/cartSlice";
import productSlice from "./features/productSlice/productSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartSlice.reducer,
    product: productSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
