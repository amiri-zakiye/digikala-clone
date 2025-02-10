"use client";
import { useShop } from "@/app/products/context";
import { toFarsiNumber } from "@/utils/formatters";

const TotalProductCount = () => {
  const { pager } = useShop();
  return (
    <span className="text-neutral-500 mr-auto block whitespace-nowrap text-body-2 ellispis-1 xl:flex items-center gap-2">
      {toFarsiNumber(pager?.total_items.toLocaleString())} کالا
    </span>
  );
};
export default TotalProductCount;
