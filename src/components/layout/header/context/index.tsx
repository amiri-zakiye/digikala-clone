"use client";

import { createContext, useContext, useReducer, useRef, Dispatch, useLayoutEffect, useState } from "react";
import reducer from "./reducer";
import { MegaMenuState,MegaMenuContextType } from "./types";
import { megaMenuContextActions } from "./actions";

const initialState: MegaMenuState = {
  isMegaMenuVisible: false,
  activeMenuItemIndex: 1,
  megaMenuRef: null,
};

export const MegaMenuContext = createContext<MegaMenuContextType | null>(null);

export const MegaMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [megaMenuHeight, setMegaMenuHeight] = useState("auto");
  const [subCategoriesContainerHeight, setSubCategoriesContainerHeight] = useState("auto");

  const menuWithDropDownRef = useRef<HTMLAnchorElement | null>(null);
  const mainCategoriesRef = useRef<HTMLUListElement | null>(null)

  useLayoutEffect(() => {
      const updateHeight = () => {
          if (menuWithDropDownRef.current) {
              const elementTop = menuWithDropDownRef.current.getBoundingClientRect().top;
              const viewportHeight = window.innerHeight;
              const newHeight = viewportHeight - elementTop - 100;
              setMegaMenuHeight(`${newHeight}px`);
          }
          if(mainCategoriesRef.current){
              const elementHeight = mainCategoriesRef.current.scrollHeight;
              console.log("elementHeight",elementHeight)
              setSubCategoriesContainerHeight(`${elementHeight}px`);
          }
      };

      updateHeight();
      window.addEventListener("resize", updateHeight);

      return () => {
          window.removeEventListener("resize", updateHeight);
      };

  }, []);


  const displayMegaMenu = () => {
      clearTimeout(timeoutRef.current ?? undefined);
      dispatch({ type: "SET_IS_MEGA_MENU_VISIBLE",payload: true }) ;
  };

  const hideMegaMenu = () => {
      timeoutRef.current = setTimeout(() => {
        dispatch({ type: "SET_IS_MEGA_MENU_VISIBLE",payload: false }) ;
      }, 300);
  };

  return (
    <MegaMenuContext.Provider value={{ state, dispatch,menuWithDropDownRef,mainCategoriesRef,megaMenuHeight,subCategoriesContainerHeight,displayMegaMenu,hideMegaMenu, megaMenuRef: megaMenuRef as React.RefObject<HTMLDivElement> }}>
      {children}
    </MegaMenuContext.Provider>
  );
};

type MegaMenuActions = ReturnType<typeof megaMenuContextActions>;

export const useMegaMenuContext = (): MegaMenuState &
  MegaMenuActions & {
    megaMenuRef: React.RefObject<HTMLDivElement>;
  } => {
  const context = useContext(MegaMenuContext);
  if (!context) {
    throw new Error("useMegaMenuContext must be used within a MegaMenuProvider");
  }

  const { state, dispatch, megaMenuRef,menuWithDropDownRef,mainCategoriesRef,megaMenuHeight,subCategoriesContainerHeight,displayMegaMenu,hideMegaMenu } = context;
  const megaMenuContextAction = megaMenuContextActions(dispatch);

  return { ...state, ...megaMenuContextAction,displayMegaMenu,hideMegaMenu, megaMenuRef,menuWithDropDownRef,mainCategoriesRef,megaMenuHeight,subCategoriesContainerHeight };
};
