import { Product } from "@/features/product/types"
import { Action, Pager, Sort } from "./types"
import { Filter } from "../_components/filtersSidebar/types"

export default (dispatch: React.ActionDispatch<[action: Action]>) => {
    return {
        appendProducts: (products: Product[],pager: Pager) => {
            dispatch({type:"APPEND_PRODUCTS", payload:{products,pager}})
        },
        setUpInitialProducts: (products:Product[],pager: Pager,filters:Filter) => {
            dispatch({type:"SET_INITIAL_STATE",payload:{products,pager,filters}})
        },
        setloading: (loading:boolean) => {
            dispatch({type:"SET_LOADING",payload:loading})
        }
    }
}