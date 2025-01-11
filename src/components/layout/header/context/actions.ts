import { Dispatch } from "react";
import { MegaMenuAction } from "./types";

export const megaMenuContextActions = (dispatch: Dispatch<MegaMenuAction>) => {

  return {
    setActiveMenuItemIndex: (index: number) =>
      dispatch({ type: "SET_ACTIVE_MENU_ITEM_INDEX", payload: index }),
  };
};