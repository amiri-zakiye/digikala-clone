import {Action, State} from "./types";

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "UPDATE_PRODUCT_COUNT":
            return {
                ...state,
                productsCount: action.payload.count
            };
        default:
            return state;
    }
};

