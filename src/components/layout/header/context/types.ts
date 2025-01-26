import { Dispatch } from "react";

export type MegaMenuState = {
  isMegaMenuVisible: boolean;
  activeMenuItemIndex: number;
  megaMenuHeight: string;
  subCategoriesContainerHeight: string;
};

export type MegaMenuContextType = {
  state: MegaMenuState;
  dispatch: Dispatch<MegaMenuAction>;
  megaMenuRef: React.RefObject<HTMLDivElement> | null;
  menuWithDropDownRef: React.RefObject<HTMLSpanElement> | null;
  mainCategoriesRef: React.RefObject<HTMLUListElement> | null;
  displayMegaMenu: () => void;
  hideMegaMenu: () => void;
};

export type MegaMenuContextRefsType = Pick<
  MegaMenuContextType,
  "megaMenuRef" | "menuWithDropDownRef" | "mainCategoriesRef" | "dispatch"
>;

export type MegaMenuAction = {
  type: string;
  payload: number | boolean;
};
