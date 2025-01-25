import DiscountBadge from "@/components/features/product/discountBadge";
import { toFarsiNumber } from "@/utils/formatters";
import styles from "./styles.module.css";
import ProductSeller from "../ProductSeller";
import { getProductDataWithParams } from "../../apiLayer";
import ProductCartManager from "../productCartManager";

const ProductStock = async () => {
  const product = await getProductDataWithParams();
  const { default_variant } = product;

  return (
    <div
      className={`flex border ${styles.product_add_cart_box} flex-col lg:mr-3 lg:mb-3 lg:gap-y-2  lg:rounded-sm lg:border-neutral-200`}
    >
      <ProductSeller
        variants={default_variant}
      />
      <div className={" px-4 "}>
        <div className={"border-neutral-200 border-t pt-4"}>
          <div className={"flex items-center justify-between"}>
            <svg width={18} height={18} className={"fill-icon-low-emphasis"}>
              <use xlinkHref="#infoOutline"></use>
            </svg>
            <div>
              {product && default_variant.price.discount_percent > 1 ? (
                <div className={"flex items-center"}>
                  <div className="flex items-center justify-between pl-5 text-neutral-300 line-through self-end mr-auto text-body-2 !leading-[15px] lg:!leading-[21px]">
                    {toFarsiNumber(
                      default_variant.price.rrp_price.toLocaleString()
                    )}
                  </div>
                  <DiscountBadge
                    discountPercent={default_variant.price.discount_percent}
                  />
                </div>
              ) : null}
              <div className={"flex items-center justify-end"}>
                <span className={"text-h4 ml-1 text-neutral-800"}>
                  {toFarsiNumber(
                    default_variant.price.selling_price.toLocaleString() ?? ""
                  )}
                </span>
                <svg
                  width={14}
                  height={14}
                  className={"fill-icon-high-emphasis"}
                >
                  <use xlinkHref="#toman"></use>
                </svg>
              </div>
            </div>
          </div>
          <ProductCartManager />
        </div>
      </div>
    </div>
  );
};
export default ProductStock;
