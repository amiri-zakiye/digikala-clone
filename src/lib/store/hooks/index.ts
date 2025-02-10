import { useDispatch, useSelector, useStore } from "react-redux";
import type { RootState, AppDispatch, AppStore } from "../store";
import { CartState } from "../slices/cart/cart.types";
import { CartSlice } from "../slices/cart/cart.types";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
export const useCart = () => {
  return useAppSelector<CartSlice>((slice) => slice.cart) as CartState;
};
