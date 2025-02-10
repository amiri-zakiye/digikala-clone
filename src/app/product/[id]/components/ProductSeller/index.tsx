import { toFarsiNumber } from "@/utils/formatters";
import { ProductVariants } from "@/types/product.types";
import styles from "./styles.module.css";

const ProductSeller = ({ variants }: { variants: ProductVariants }) => {
  const { seller, rate } = variants;
  return (
    <>
      <h3 className={"break-words pt-4 pb-2 px-5 text-h5 text-neutral-900"}>
        فروشنده
      </h3>

      <div className="w-full px-4">
        <div className="flex  grow  pb-large">
          <svg
            width={24}
            height={24}
            className={"fill-icon-high-emphasis ml-4"}
          >
            <use xlinkHref="#seller"></use>
          </svg>
          <div>
            <p className="text-neutral-700  mb-2 text-subtitle-strong">
              {seller?.title}
            </p>
            <div className="flex w-full">
              <div className="w-full flex items-center content-center text-body-2">
                <div
                  className={`pl-2 relative flex items-center ${styles.divider}`}
                >
                  <p className="ml-1 text-body2-strong text-icon-rating-0-2">
                    {toFarsiNumber(rate ?? "")}%
                  </p>
                  <p className="text-neutral-500 whitespace-nowrap">
                    رضایت از کالا
                  </p>
                </div>
                <div className="pr-2 flex items-center">
                  <p className="text-neutral-500 ml-1">عملکرد</p>
                  <p
                    className="whitespace-nowrap text-body2-strong"
                    style={{
                      color: seller?.grade.color,
                    }}
                  >
                    {seller?.grade.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductSeller;
