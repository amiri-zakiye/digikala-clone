import { Product } from "@/types/product.types";

export type CartState = {
    count: number;
    cartItems: { product: Product; quantity: number }[];
}

export type CartSlice = {
    cart: CartState
}