"use server";

import { apiClient } from "@/lib/apiClient";
import { Product } from "@/types/product.types";
import { pageContext } from "@/utils/serverContext";

export const getProductData = async (id: string | number ) => {
  const {data} = (await apiClient.get(`product/v2/${id}`, {
    cache: "force-cache",
    next: { revalidate: 300 },
  })) as { data: { product: Product } };

  const { product } = data;
  return product;
};

export const getProductDataWithParams = async () => {
  const { params } = await pageContext.get();
  if (!params || !params.id) {
    throw new Error('Product ID is missing from the context.');
  }

  const { id } = params;
  return await getProductData(id);
};
