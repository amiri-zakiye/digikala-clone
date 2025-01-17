import { ShopResponse } from "@/app/products/_components/filtersSidebar/types"
import { apiClient } from "@/lib/apiClient"

export default {
    getProducts: async() => {
        return apiClient.get<ShopResponse>("products/v1")
    }
}