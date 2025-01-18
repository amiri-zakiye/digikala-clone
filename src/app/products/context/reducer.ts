import {Action, State} from "./types";

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "APPEND_PRODUCTS":
            return {
                ...state,
                products: [...(state.products || []), ...action.payload.products],
                pager: action.payload.pager,
                isLoading:false
            };

        case "REPLACE_DATA":
            return {
                ...state,
                products: action.payload.products,
                filters: action.payload.filters,
                pager: action.payload.pager,
                isLoading:false
            };
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.payload,
            };
        case "SET_INITIAL_STATE":
            return {
                ...state,
                filters: action.payload.filters,
                pager: action.payload.pager,
                products: action.payload.products,
                isLoading:false
            }
        case "RESET_PRODUCTS":
            return {
                ...state,
                products: [],
                isLoading:true
            }
        default:
            return state;
    }
};

