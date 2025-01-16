import { Option } from "../../../../types"

export type CategoriesFilter = {
    type: "category_list";
    title: string;
    options: Option[]
}