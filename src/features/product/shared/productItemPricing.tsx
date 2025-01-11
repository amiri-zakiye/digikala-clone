import { toFarsiNumber } from "@/utils/formatters";
import { ProductPricing } from "../types";
import DiscountBadge from "./discountBadge";

const ProductItemPricing = ({pricing}: {pricing: ProductPricing}) => {
    return (
        <div className="pt-1 flex flex-col items-stretch justify-between">
        <div className="flex items-center justify-between">
            <DiscountBadge discountPercent={pricing.discount_percent} />
            <div
                className="flex items-center justify-end gap-1 text-neutral-700 text-h5 grow text-h5 lg:text-[14px] !leading-[18px] lg:!leading-[24px]">
                <span>{toFarsiNumber(pricing.selling_price.toLocaleString())}</span>
                <svg
                    width={16} height={16} className={"fill-icon-high-emphasis"}>
                    <use xlinkHref="#toman"></use>
                </svg>
            </div>
        </div>
        <div
            className="flex items-center justify-between pl-5 text-neutral-300 line-through self-end mr-auto text-body-2 !leading-[15px] lg:!leading-[21px]">
                {toFarsiNumber(pricing.rrp_price.toLocaleString())}
            </div>
        </div>
    )
}

export default ProductItemPricing;