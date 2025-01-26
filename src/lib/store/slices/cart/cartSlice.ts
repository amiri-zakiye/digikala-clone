"use client";
import { Product } from "@/types/product.types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "./cart.types";

const initialState = (() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart
    ? (JSON.parse(savedCart) as CartState)
    : {
        count: 0,
        cartItems: [],
        totalAmount: 0,
      };
})() satisfies CartState as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    calculateTotalAmount: (state) => {
      state.totalAmount = state.cartItems.reduce(
        (total, item) =>
          total +
          item.product.default_variant.price.selling_price * item.quantity,
        0
      );
    },
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
      state.count += 1;
      cartSlice.caseReducers.calculateTotalAmount(state);
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const { id } = action.payload;
      const itemToRemove = state.cartItems.find(
        (item) => item.product.id === id
      );

      if (itemToRemove) {
        state.count -= itemToRemove.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item.product.id !== id
        );
        cartSlice.caseReducers.calculateTotalAmount(state);
      }
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
