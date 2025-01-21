import { pageContext } from "@/utils/serverContext";
import { getProductData } from "../../apiLayer";

const ProductMainThumbnail = async () => {
  const context = await pageContext.getOrThrow();
  const { id } = context.params;

  const product = await getProductData(id);
  console.log(product);

  return <></>;
};
export default ProductMainThumbnail;
