"use server";

import { apiClient } from "@/lib/apiClient";

export const getProductData = async (id: number) => {
  return apiClient.get(`product/v2/${id}`);
};
