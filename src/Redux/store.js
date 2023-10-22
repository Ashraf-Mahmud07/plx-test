import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./features/api/baseApi";
import cartSlice from "./features/cartSlice/cartSlice";
import ProductSlice from "./features/productSlice/ProductSlice";

const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartSlice.reducer,
    product: ProductSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
