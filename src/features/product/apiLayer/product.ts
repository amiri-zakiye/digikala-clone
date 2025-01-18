// "use server"

import { ShopResponse } from "@/app/products/_components/filtersSidebar/types"
import { apiClient } from "@/lib/apiClient"

export default {
    getProducts: async(page: number) => {
        return apiClient.get<ShopResponse>(`products/v1/?page=${page}`)
    }
}