import { Category } from "../components/megamenu/types";

export const groupCategoriesByColumn = (categories: Category[]) => {
  return categories.reduce((acc, category) => {
    const column = category.column_number || 0;
    if (!acc[column]) {
      acc[column] = [];
    }
    acc[column].push(category);
    return acc;
  }, {} as Record<number, Category[]>);
};
