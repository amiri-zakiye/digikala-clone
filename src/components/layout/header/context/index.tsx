"use client";

import { createContext, useContext, useReducer, useRef } from "react";
import reducer from "./reducer";
import { MegaMenuState,MegaMenuContextType } from "./types";
import { megaMenuContextActions } from "./actions";
import { useMegaMenuLayout } from "../hooks/useMegaMenuLayout";
import { useToggleMegaMenu } from "../hooks/useToggleMegaMenu";

const initialState: MegaMenuState = {
  isMegaMenuVisible: false,
  activeMenuItemIndex: 1,
  megaMenuHeight: "auto",
  subCategoriesContainerHeight: "auto"
};

export const MegaMenuContext = createContext<MegaMenuContextType | null>(null);

export const MegaMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const menuWithDropDownRef = useRef<HTMLSpanElement | null>(null);
  const mainCategoriesRef = useRef<HTMLUListElement | null>(null)


  useMegaMenuLayout({menuWithDropDownRef,mainCategoriesRef,dispatch})
  const {displayMegaMenu,hideMegaMenu} =  useToggleMegaMenu(dispatch)

  return (
    <MegaMenuContext.Provider value={{ state, dispatch,menuWithDropDownRef,mainCategoriesRef,megaMenuRef,displayMegaMenu,hideMegaMenu} as MegaMenuContextType}>
      {children}
    </MegaMenuContext.Provider>
  );
};


export const useMegaMenuContext = ()=> {
  const context = useContext(MegaMenuContext);
  if (!context) {
    throw new Error("useMegaMenuContext must be used within a MegaMenuProvider");
  }

  const { state, dispatch,displayMegaMenu,hideMegaMenu,megaMenuRef,menuWithDropDownRef,mainCategoriesRef} = context;
  const megaMenuContextAction = megaMenuContextActions(dispatch);

  return { ...state, ...megaMenuContextAction,displayMegaMenu,hideMegaMenu, megaMenuRef,menuWithDropDownRef,mainCategoriesRef };
};
