import { Option } from "../../products.type";

export type CheckBoxFilter = {
  type: "checkbox";
  title: string;
  options: Option[];
};
