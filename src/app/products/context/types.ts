import { Product } from "@/types/product.types";
import { Dispatch } from "react";
import { Filter } from "../types";
import { Option } from "../types";

export type Pager = {
  current_page: number;
  total_pages: number;
  total_items: number;
};

export type DefaultSort = {
  default: number;
};

export type Sort = {
  default: DefaultSort;
  options: Option[];
};

export type Action = { type: "UPDATE_PRODUCT_COUNT"; payload: { count:number } };

export type State = {
  productsCount: number;
  defaultSort: number;
};

export type ShopContextType = {
  state: State;
  dispatch: Dispatch<Action>;
} | null;
