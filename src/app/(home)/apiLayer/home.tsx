"use server";

import { apiClient } from "@/lib/apiClient";
import { ApiResponse } from "../_components/widgets/types";

export const getWidgets = async (): Promise<ApiResponse> => {
  return apiClient.get("widgets/");
};
