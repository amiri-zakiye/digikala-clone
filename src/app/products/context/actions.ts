import { Action } from "./types";

const actions = (dispatch: React.ActionDispatch<[action: Action]>) => {
  return {
    setProductsCount: (count:number) => {
      dispatch({ type: "UPDATE_PRODUCT_COUNT", payload: { count } });
    }
  };
};
export default actions;
