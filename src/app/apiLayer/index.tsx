"use server"

import { Category } from "@/components/layout/header/_components/navbar/_components/megamenu/types"
import { apiClient } from "@/lib/apiClient"

export const dynamic = "force-dynamic"
export const getMegaMenu = async() : Promise<Category[]> => {
    return apiClient.get("api/megaMenu/") 
}