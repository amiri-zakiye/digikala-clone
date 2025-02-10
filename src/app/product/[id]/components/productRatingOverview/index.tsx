import { toFarsiNumber } from "@/utils/formatters";
import ProductStars from "../productStars";

const ProductRatingOverview = ({
  ratingCount,
  rate,
}: {
  ratingCount: number;
  rate: number;
}) => {
  return (
    <>
      <div className="flex items-center">
        <p className="text-h2 ml-1 leading-none">{toFarsiNumber(rate)}</p>
        <p> از ۵ </p>
      </div>
      <div className="flex items-center">
        <ProductStars rate={rate}/>
        <span className="text-neutral-400 mr-2">
          از مجموع {toFarsiNumber(ratingCount)} امتیاز
        </span>
      </div>
    </>
  );
};
export default ProductRatingOverview;
