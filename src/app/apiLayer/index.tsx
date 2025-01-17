import { Category } from "@/components/layout/header/_components/navbar/_components/megamenu/types"
import { apiClient } from "@/lib/apiClient"

export default {
    getMegaMenu: async() => {
        return apiClient.get("api/megaMenu") as Promise<Category[]>
    }
}