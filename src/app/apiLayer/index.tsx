"use server"

import { apiClient } from "@/lib/apiClient"
import { Category } from "@/components/layout/header/components/megamenu/types"

export const getMegaMenu = async() : Promise<Category[]> => {
    return apiClient.get("api/megaMenu/") 
}