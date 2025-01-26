import { Product } from "@/types/product.types";

export type CartState = {
  count: number;
  cartItems: { product: Product; quantity: number }[];
  totalAmount: number;
};
export type CartSlice = {
  cart: CartState;
};
export type ProductCartItem = {
  product: Product;
  quantity: number;
};
export type CartAction = {
  type: "cart/addToCart" | "cart/removeFromCart";
};
