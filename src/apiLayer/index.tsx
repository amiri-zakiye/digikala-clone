"use server"

import { apiClient } from "@/lib/apiClient"
import { Category } from "@/components/layout/header/components/megamenu/types"

export const getMegaMenu = async() : Promise<Category[]> => {
    return apiClient.get("v1/dictionaries/?types%5B3%5D=mega_menu&types%5B5%5D=category_tree&hashes%5B3%5D=&hashes%5B5%5D=") 
}