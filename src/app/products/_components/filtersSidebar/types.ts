import { SwitchFilter } from "./_components/filter/_components/switcherFilter/types"
import { CheckBoxFilter } from "./_components/filter/_components/checkboxFilter/types"
import { CategoriesFilter } from "./_components/filter/_components/categoriesFilter/types"
import { Product } from "@/features/product/types"


export type Filter = {
    categories: CategoriesFilter
    brands: CheckBoxFilter,
    has_jet_delivery: SwitchFilter,
    only_fresh : SwitchFilter,
    has_ship_by_seller : SwitchFilter,
    has_selling_stock: SwitchFilter,
    has_ready_to_shipment: SwitchFilter,
    seller_types: CheckBoxFilter,
}

export type FilterTypes = CategoriesFilter | CheckBoxFilter | SwitchFilter 

export type Option = {
    id: number | string,
    title_fa ?: string,
    title ?: string,
}
export type ShopResponse = {
    data: {
        products: Partial<Product>[],
        filters: Filter,
        sort_options: Option[]
    }
}