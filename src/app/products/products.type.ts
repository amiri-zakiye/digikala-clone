import { Product } from "@/types/product.types"
import { CheckBoxFilter } from "./components/checkboxFilter/checkboxFilter.type"
import { SwitchFilter } from "./components/switcherFilter/switcherFilter.types"
import { Pager } from "./context/types"

export type Filter = {
    brands: CheckBoxFilter,
    has_jet_delivery: SwitchFilter,
    only_fresh : SwitchFilter,
    has_ship_by_seller : SwitchFilter,
    has_selling_stock: SwitchFilter,
    has_ready_to_shipment: SwitchFilter,
    seller_types: CheckBoxFilter,
}

export type FilterTypes =  CheckBoxFilter | SwitchFilter 

export type Option = {
    id: number | string,
    title_fa ?: string,
    title ?: string,
}
export type ShopResponse = {
    data: {
        products: Product[],
        filters: Filter,
        sort_options: Option[],
        pager: Pager
    }
}