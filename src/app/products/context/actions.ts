import { Product } from "@/types/product.types";
import { Action, Pager } from "./types";
import { Filter } from "../types";

const actions = (dispatch: React.ActionDispatch<[action: Action]>) => {
  return {
    appendProducts: (products: Product[], pager: Pager) => {
      dispatch({ type: "APPEND_PRODUCTS", payload: { products, pager } });
    },
    replaceProducts: (products: Product[], pager: Pager, filters: Filter) => {
      dispatch({ type: "REPLACE_DATA", payload: { products, pager, filters } });
    },
    setUpInitialProducts: (
      products: Product[],
      pager: Pager,
      filters: Filter
    ) => {
      dispatch({
        type: "SET_INITIAL_STATE",
        payload: { products, pager, filters },
      });
    },
    setloading: (loading: boolean) => {
      dispatch({ type: "SET_LOADING", payload: loading });
    },
    resetProducts: () => {
      dispatch({ type: "RESET_PRODUCTS" });
    },
  };
};
export default actions;
