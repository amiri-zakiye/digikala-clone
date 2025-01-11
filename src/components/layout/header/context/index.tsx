"use client";

import { createContext, useContext, useReducer, useRef, Dispatch } from "react";
import reducer from "./reducer";
import { MegaMenuState,MegaMenuContextType } from "./types";
import { megaMenuContextActions } from "./actions";

const initialState: MegaMenuState = {
  isMegaMenuVisible: true,
  activeMenuItemIndex: 1,
  megaMenuRef: null,
};

export const MegaMenuContext = createContext<MegaMenuContextType | null>(null);

export const MegaMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  return (
    <MegaMenuContext.Provider value={{ state, dispatch, megaMenuRef: megaMenuRef as React.RefObject<HTMLDivElement> }}>
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

  const { state, dispatch, megaMenuRef } = context;
  const megaMenuContextAction = megaMenuContextActions(dispatch);

  return { ...state, ...megaMenuContextAction, megaMenuRef };
};
