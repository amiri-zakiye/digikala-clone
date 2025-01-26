import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./slices/cart/cartSlice";
import saveCartToLocalStorage from "./slices/cart/middleware";

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: CartSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(saveCartToLocalStorage),
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
