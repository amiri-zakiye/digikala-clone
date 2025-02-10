"use server"
import { apiClient } from "@/lib/apiClient";
import { ShopResponse } from "../types";

export const getProducts = async (
  page: number,
  searchParams: string | undefined = undefined
) => {
  return apiClient.get<ShopResponse>(
    `v1/search/?page=${page}&${searchParams}`
  );
}