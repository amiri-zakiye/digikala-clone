import { Product } from "@/features/product/types";
import { Filter } from "../_components/filtersSidebar/types";
import { Option } from "../_components/filtersSidebar/types";
import { Dispatch } from "react";

export type Pager = {
    current_page: number,
    total_pages: number,
    total_items: number,
}

export type DefaultSort =  {
    default: number
}

export type Sort = {
    default: DefaultSort,
    options: Option[],
}

export type Action =
    | { type: "APPEND_PRODUCTS"; payload: { products: Product[]; pager: Pager } }
    | { type: "REPLACE_DATA"; payload: { products: Product[]; filters: Filter; sort: Sort; pager: Pager } }
    | { type: "SET_LOADING"; payload: boolean }
    | { type: "RESET_PRODUCTS" }
    | {type: "SET_INITIAL_STATE", payload: {filters: Filter,pager:Pager}}
    | {type: "SET_LOADING",payload:boolean};


export type State = {
    products: Product[];
    filters: Filter;
    sort: Sort ;
    pager: Pager ;
    isLoading: boolean;
    defaultSort: number
};
export type ShopState = {
    isLoading: true;
    products: null;
    filters: null;
    sort: null ;
    pager: null;
} | {
    isLoading: false;
    products: Product[];
    filters: Filter;
    sort: Sort ;
    pager: Pager;
};

export type ShopContextType = {  
    state: State;  
    dispatch: Dispatch<Action>;  
} | null;  
