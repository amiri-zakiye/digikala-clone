import { Dispatch } from "react";

export type MegaMenuState = {
    isMegaMenuVisible: boolean;
    activeMenuItemIndex: number;
    megaMenuRef: React.RefObject<HTMLDivElement> | null;
};
  
export type MegaMenuContextType = {
    state: MegaMenuState;
    dispatch: Dispatch<any>;
    megaMenuRef: React.RefObject<HTMLDivElement>;
};

export type MegaMenuAction = {
    type: string,
    payload: any
}