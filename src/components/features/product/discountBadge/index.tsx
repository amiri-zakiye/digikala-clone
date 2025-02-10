import { toFarsiNumber } from "@/utils/formatters";

const DiscountBadge = ({ discountPercent }: { discountPercent: number }) => {
  if (discountPercent < 1) return null;

  return (
    <span className="px-1 text-white rounded-large w-[34px] h-[20px] flex items-center justify-center bg-hint-object-error text-body2-strong">
      {toFarsiNumber(discountPercent)}٪
    </span>
  );
};
export default DiscountBadge;
