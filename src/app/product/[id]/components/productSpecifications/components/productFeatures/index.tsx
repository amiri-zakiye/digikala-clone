import { ProductAttributes } from "@/types/product.types";
import ProductFeature from "./components/productFeature";
import Refund from "./components/refund";
import ViewAllFeatures from "./components/viewAllFeatures";

const ProductFeatures = ({
  features,
  returnAlert,
}: {
  features: ProductAttributes;
  returnAlert: string;
}) => {
  return (
    <>
      <h5 className={"py-medium text-h5"}>ویژگی ها</h5>
      <div className="overflow-auto hide-scrollbar">
        <ul className="!pb-0 flex gap-1 w-max lg:w-auto lg:gap-2 mt-2 lg:grid lg:grid-cols-3 lg:overflow-hidden">
          {features?.map((feature) => (
            <ProductFeature key={feature.title} feature={feature} />
          ))}
        </ul>
      </div>
      <ViewAllFeatures />
      <Refund returnAlert={returnAlert} />
    </>
  );
};


export default ProductFeatures;
