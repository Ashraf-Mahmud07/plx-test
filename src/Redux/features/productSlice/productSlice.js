import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    selectedProduct: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    selectProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export const { setProducts, selectProduct } = productSlice.actions;

export default productSlice.reducer;
