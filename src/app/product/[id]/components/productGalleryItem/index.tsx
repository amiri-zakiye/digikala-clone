"use client";
import { ProductGalleryItem as TProductGalleryItem } from "@/types/product.types";
import styles from "./styles.module.css";

const ProductGalleryItem = ({
  item,
  isLast,
  title,
  openGalleryPopOver,
}: {
  item: TProductGalleryItem;
  isLast: boolean;
  title: string;
  openGalleryPopOver: () => void;
}) => {
  return (
    <div
      key={item.url?.[0]}
      onClick={openGalleryPopOver}
      className={
        "relative rounded-sm border-neutral-200 border p-1 ml-2 flex items-center justify-center"
      }
    >
      <div
        className={`${
          isLast ? styles.blur : ""
        } cursor-pointer w-[72px] h-[72px] `}
      >
        <img
          width={72}
          height={72}
          className={"object-contain"}
          src={item.url?.[0]}
          alt={title}
        />
      </div>
      {isLast && (
        <div className="flex absolute z-1">
          <svg width={24} height={24} className={"fill-icon-high-emphasis"}>
            <use xlinkHref="#moreHoriz"></use>
          </svg>
        </div>
      )}
    </div>
  );
};
export default ProductGalleryItem;
