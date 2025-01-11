import { Dispatch } from "react";
import { MegaMenuAction } from "./types";

export const megaMenuContextActions = (dispatch: Dispatch<MegaMenuAction>) => {
  let timeoutRef: ReturnType<typeof setTimeout> | null = null;


  return {
    setActiveMenuItemIndex: (index: number) =>
      dispatch({ type: "SET_ACTIVE_MENU_ITEM_INDEX", payload: index }),


    displayMegaMenu: () => {
      if (timeoutRef) {
        clearTimeout(timeoutRef);
        timeoutRef = null;
      }
      dispatch({ type: "SET_IS_MEGA_MENU_VISIBLE", payload: true });
    },

    hideMegaMenu: () => {
      timeoutRef = setTimeout(() => {
        dispatch({ type: "SET_IS_MEGA_MENU_VISIBLE", payload: false });
      }, 300);
    },
  };
};