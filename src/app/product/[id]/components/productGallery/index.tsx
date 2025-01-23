import { ProductGallery as TProductGallery } from "@/types/product.types";
import ProductGalleryItem from "../productGalleryItem";

const ProductGallery = ({
  items,
  openGalleryPopOver,
}: {
  items?: TProductGallery;
  openGalleryPopOver: () => void;
}) => {
  return (
    <div className={"flex items-center mt-5 mb-3"}>
      {items?.map((item, index) => {
        return (
          <ProductGalleryItem
            key={item.url?.[0]}
            item={item}
            isLast={index === items.length - 1}
            title=""
            openGalleryPopOver={openGalleryPopOver}
          />
        );
      })}
    </div>
  );
};
export default ProductGallery;
