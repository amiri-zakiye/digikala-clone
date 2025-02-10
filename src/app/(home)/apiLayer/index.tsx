"use server";

import { apiClient } from "@/lib/apiClient";
import { ApiResponse } from "../types";

export const getWidgets = async (): Promise<ApiResponse> => {
  return apiClient.get("v2/");
};
