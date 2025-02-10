import { toFarsiNumber } from "@/utils/formatters";

const ProductRating = ({
  ratingCount,
  rate,
}: {
  ratingCount: number;
  rate: number;
}) => {
  return (
    <div className="flex items-center flex-wrap mt-2  ml-0 lg:mx-0">
      <div className="flex items-center">
        <svg width={16} height={16} className={"fill-icon-rating-0-2"}>
          <use xlinkHref="#starFill"></use>
        </svg>
        <p className="mr-1 text-body-2">{toFarsiNumber(rate)}</p>
        <p className="mr-1 text-caption text-neutral-300 whitespace-nowrap">
          (امتیاز {toFarsiNumber(ratingCount)} خریدار)
        </p>
      </div>

      <div className="flex mr-1.5 items-center bg-gradient-silver ">
        <span className="flex item-center text-caption-strong pr-1 pl-1 text-icon-high-emphasis rounded-lg whitespace-nowrap">
          ۱۱ دیدگاه
        </span>
        <div
          className="cube-font-icon text-[16px] w-[16px] h-[16px] text-icon-high-emphasis"
          data-icon-name="cube-nav-chevron-left"
          data-icon=""
        ></div>
      </div>
    </div>
  );
};
export default ProductRating;
