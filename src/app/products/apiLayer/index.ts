import { apiClient } from "@/lib/apiClient";
import { ReadonlyURLSearchParams } from "next/navigation";
import { ShopResponse } from "../products.type";

export const getProducts = async (
  page: number,
  searchParams: ReadonlyURLSearchParams | undefined = undefined
) => {
  return apiClient.get<ShopResponse>(
    `products/v1/?page=${page}&${searchParams}`
  );
};