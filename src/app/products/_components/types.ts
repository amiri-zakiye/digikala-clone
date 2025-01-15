import { Product } from "@/features/product/types";

export type Option = {
    id: number | string,
    title_fa ?: string,
    title ?: string,
}

export type CategoriesFilter = {
    type: "category_list";
    title: string;
    options: Option[]
}
export type CheckBoxFilter = {
    type: "checkbox";
    title: string;
    options: Option[]
}
export type SwitchFilter = {
    type: "switch";
    title: string;
    icon ?: string;
    options ?: {
        id: number,
        title: string,
    }[]
}

export type SliderFilter = {
    type: "slider";
    title: string;
    options: {
        min: number,
        max: number,
    }
}

export type Filter = {
    categories: CategoriesFilter
    brands: CheckBoxFilter,
    has_jet_delivery: SwitchFilter,
    only_fresh : SwitchFilter,
    has_ship_by_seller : SwitchFilter,
    price : SliderFilter,
    has_selling_stock: SwitchFilter,
    has_ready_to_shipment: SwitchFilter,
    seller_types: CheckBoxFilter,
}

export type FilterTypes = CategoriesFilter | CheckBoxFilter | SwitchFilter | SliderFilter

export type ShopResponse = {
    products: Partial<Product>[],
    filters: Filter,
    sort_options: Option[],
}
