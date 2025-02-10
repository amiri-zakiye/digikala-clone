"use client"

import React, { useReducer, useContext, createContext, useMemo, Suspense } from "react";
import { reducer } from "./reducer";
import { ShopContextType, State } from "./types";
import getShopActions from "./actions"

const initialState: State = {
    products: [],
    filters: null,
    sort: null,
    pager: null,
    isLoading: true,
    defaultSort: 22
};


const shopContext = createContext<ShopContextType>(null);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const memoizedState = useMemo(() => ({ state, dispatch }), [state, dispatch]);  
    return (
        <>
            <shopContext.Provider value={{...memoizedState}}>
                <Suspense fallback={<></>}>
                {children}
                </Suspense>
            </shopContext.Provider>
        </>
    )

};

export const useShop = () => {
    const context = useContext(shopContext);
    if (!context) {
        throw new Error("useProducts must be used within a ProductsProvider");
    }
    const {state,dispatch} = context
    const actions = getShopActions(dispatch)
    return {...actions,...state};
};
