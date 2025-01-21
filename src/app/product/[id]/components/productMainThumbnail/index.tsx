import { getProductDataWithParams } from "../../apiLayer";

const ProductMainThumbnail = async () => {
  const { images, title_fa } = await getProductDataWithParams();
  const { main } = images;

  return (
    <>
      <img src={main.url?.[0]} alt={title_fa} />
    </>
  );
};
export default ProductMainThumbnail;
