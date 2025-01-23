import ProductMainThumbnail from "../productMainThumbnail";
import { getProductDataWithParams } from "../../apiLayer";
import ProductSliders from "../productSliders";

const ProductMedia = async () => {
  const { images, title_fa } = await getProductDataWithParams();
  const { list, main } = images;

  return (
    <>
      <ProductMainThumbnail imageUrl={main.url?.[0]} title={title_fa} />
      <ProductSliders items={list} />
    </>
  );
};
export default ProductMedia;
