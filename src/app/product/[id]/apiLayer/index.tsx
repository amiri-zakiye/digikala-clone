"use server";

import { apiClient } from "@/lib/apiClient";
import { Product } from "@/types/product.types";

export const getProductData = async (id: string | number ) => {
  const {data} = (await apiClient.get(`product/v2/${id}`, {
    cache: "force-cache",
    next: { revalidate: 300 },
  })) as { data: { product: Product } };

  const { product } = data;
  return product;
};
