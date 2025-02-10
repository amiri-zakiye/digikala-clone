import { getProductDataWithParams } from "../../apiLayer";
import ProductFeatures from "./components/productFeatures";
import ProductRating from "./components/productRating";

const ProductSpecifications = async() => {

  const {data_layer,review,category,rating} = await getProductDataWithParams();
  
  return (
    <>
      <ProductRating
        ratingCount={rating.count ?? 0}
        rate={data_layer.dimension9 ?? 0}
      />
      <ProductFeatures
        features={review.attributes}
        returnAlert={category.return_reason_alert}
      />
    </>
  );
};
export default ProductSpecifications;
