import {Action, State} from "./types";

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "APPEND_PRODUCTS":
            return {
                ...state,
                products: [...(state.products || []), ...action.payload.products],
                pager: action.payload.pager,
            };

        case "REPLACE_DATA":
            return {
                ...state,
                products: action.payload.products,
                filters: action.payload.filters,
                sort: action.payload.sort,
                pager: action.payload.pager,
            };

        case "RESET_PRODUCTS":
            return {
                ...state,
                products: [],
                isLoading: true,
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
                pager: action.payload.pager
            }
        default:
            return state;
    }
};

