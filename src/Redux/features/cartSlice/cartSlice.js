import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0;

const totalQuantity =
  localStorage.getItem("totalQuantity") !== null
    ? JSON.parse(localStorage.getItem("totalQuantity"))
    : 0;

const setItemFunc = (item, totalAmount, totalQuantity) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(totalQuantity));
};

const initialState = {
  cartItems: items,
  totalQuantity: totalQuantity,
  totalAmount: totalAmount,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,


  reducers: {
    // =========== add item ============
    addItem(state, action) {
      const newItem = action.payload;
      const id = action.payload.id;
      const extraIngredients = action.payload.extraIngredients;
      const existingItem = state.cartItems.find((item) => item.id === id);
      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          extraIngredients: newItem.extraIngredients
        });
        state.totalQuantity++;
        toast.success("Added to Cart List! ❤️", { autoClose: 800 });
      } else if (existingItem && (JSON.stringify(existingItem.extraIngredients) === JSON.stringify(extraIngredients))) {
        if(existingItem.quantity < 3){
          state.totalQuantity++;
          existingItem.quantity++;
          toast.success("Added to Cart List! ❤️", { autoClose: 400 });
        }else{
          toast.warn("Max Purchase limit 3", { autoClose: 400 });
        }
        
      } else {
        const value = JSON.parse(localStorage.getItem("cartItems"));
        let index = value.findIndex(s => s.id === existingItem.id);
        const newValue = {
          id: existingItem.id,
          title: existingItem.title,
          image: existingItem.image,
          price: existingItem.price,
          quantity: 1,
          totalPrice: existingItem.price,
          extraIngredients: extraIngredients
        }
        state.cartItems.splice(index, 1, newValue);
        state.totalQuantity = state.cartItems.reduce(
          (total, item) => total + Number(item.quantity),
          0
        );
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );


      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },


    // ========= remove item from cart quantity ========

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) - Number(existingItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },

    //============ delete item ===========

    deleteItem(state, action) {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantity;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantity),
        0
      );
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalQuantity
      );
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
