"use client";
const CloseProductAddedToCart = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="flex cursor-pointer" onClick={onClose}>
      <svg width={24} height={24} className={"fill-icon-high-emphasis"}>
        <use xlinkHref="#close"></use>
      </svg>
    </div>
  );
};
export default CloseProductAddedToCart;
