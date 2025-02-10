import { ProductAttributes } from "@/types/product.types";
import ProductFeature from "../productFeature";

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

const ViewAllFeatures = () => {
  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <hr className="grow b-t border-neutral-200" />
      <button className="relative flex items-center user-select-none  text-button-2 rounded-sm border-neutral-200 border px-5 py-2">
        <div className="flex items-center justify-center relative grow">
          مشاهده همه ویژگی&zwnj;ها
          <div className="flex mr-2">
            <svg width={24} height={24} className={"fill-black"}>
              <use xlinkHref="#chevronLeft"></use>
            </svg>
          </div>
        </div>
      </button>
      <hr className="grow border-t border-neutral-200" />
    </div>
  );
};

const Refund = ({ returnAlert }: { returnAlert: string }) => {
  return (
    <div className="flex  my-3 mx-5 ">
      <div className="flex mt-1">
        <svg width={18} height={18} className={"fill-icon-neutral-hint"}>
          <use xlinkHref="#infoFill"></use>
        </svg>
      </div>
      <span className="mr-2 text-body-2 text-neutral-500">{returnAlert}</span>
    </div>
  );
};
export default ProductFeatures;
