import { apiClient } from "@/lib/apiClient"

export default {
    getWidgets: async() => {
        return apiClient.get("widgets/") 
    }
}