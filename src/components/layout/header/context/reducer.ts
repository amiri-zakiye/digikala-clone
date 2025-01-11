import { MegaMenuState,MegaMenuAction } from "./types";

const reducer = (state: MegaMenuState, action: MegaMenuAction) => {
    switch(action.type){
        case "SET_ACTIVE_MENU_ITEM_INDEX":
            return {...state,activeMenuItemIndex: action.payload}
        case "SET_IS_MEGA_MENU_VISIBLE":
            return {...state,isMegaMenuVisible: action.payload}
        default:
            return state;
    }
}
export default reducer