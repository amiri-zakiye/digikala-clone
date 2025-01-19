
"use server"

import { ShopResponse } from "@/app/products/_components/filtersSidebar/types"
import { apiClient } from "@/lib/apiClient"
import { ReadonlyURLSearchParams } from "next/navigation"

export const getProducts = async(page: number,searchParams :ReadonlyURLSearchParams | undefined = undefined) => {
    return apiClient.get<ShopResponse>(`products/v1/?page=${page}&${searchParams}`)
}