import { Product } from "@/types/product.types"

const getNavLinks = (data: Product) => {

    if(!data) return []

    const navItems = [
        {id:1, title: "دیجی کالا"},
        {id:2, title: data?.data_layer.item_category2},
        {id:3, title: data?.data_layer.item_category3},
        {id:4, title: data?.data_layer.item_category4},
        {id:5, title: data?.data_layer.item_category5}
    ]
    return navItems.filter(item => item.title?.trim())
}
export default getNavLinks