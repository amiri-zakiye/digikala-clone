import Link from "next/link";

const BestSellersSectionHeader = () => {
  return (
    <div className="flex justify-between lg:justify-center items-center px-2 lg:px-5 relative">
      <div className="flex justify-center items-center">
        <div className="flex ml-2">
          <svg width={24} height={24} className={"fill-caution-text"}>
            <use xlinkHref="#searchTrend"></use>
          </svg>
        </div>
        <p className="text-h3 text-neutral-900">پرفروش&zwnj;ترین کالاها</p>
      </div>
      <Link
        href={"/products"}
        className="relative flex items-center user-select-none text-secondary-700 font-bold text-button-2 rounded-sm lg:absolute left-0 top-0 pl-4 shrink-0"
      >
        <div className="flex items-center justify-center relative grow">
          مشاهده همه
        </div>
      </Link>
    </div>
  );
};

export default BestSellersSectionHeader;
