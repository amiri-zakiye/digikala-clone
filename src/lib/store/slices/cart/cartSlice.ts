"use client";
import { Product } from "@/types/product.types";
import {createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "./cart.types";

const initialState = {
  count: 0,
  cartItems: [],
} satisfies CartState as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const { payload: newProduct } = action;
      const cartItemIndex = state.cartItems.findIndex(
        (item) => item.product.id === newProduct.id
      );

      if (cartItemIndex > -1) {
        state.cartItems[cartItemIndex].quantity += 1;
      } else {
        state.cartItems.push({ product: newProduct, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      state.cartItems.filter((item) => item.product.id !== id);
    },
  },
  selectors: {
    cartItems: (sliceState: CartState) => sliceState.cartItems,
    cartItemsCount: (sliceState: CartState) => sliceState.count,
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const { cartItems, cartItemsCount } = cartSlice.selectors;

export default cartSlice.reducer;
