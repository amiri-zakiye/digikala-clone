const SpecialSellBadge = ({
  isBannerVisible,
}: {
  isBannerVisible: boolean;
}) => {
  return (
    <div className="flex items-center justify-start mb-1">
      <div className={`ml-1 w-[64px] h-[14px]`}>
        {isBannerVisible ? (
          <img
            className="w-full inline-block object-contain"
            src="/SpecialSell.svg"
            width="64"
            height="14"
            alt=""
          />
        ) : null}
      </div>
      <div className="text-body2-extra grow">
        <br />
      </div>
    </div>
  );
};
export default SpecialSellBadge;
