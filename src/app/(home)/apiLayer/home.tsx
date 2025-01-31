"use server";

import { apiClient } from "@/lib/apiClient";
import { ApiResponse } from "../home.types";

export const dynamic = "force-dynamic"
export const getWidgets = async (): Promise<ApiResponse> => {
  return apiClient.get("widgets/");
};
