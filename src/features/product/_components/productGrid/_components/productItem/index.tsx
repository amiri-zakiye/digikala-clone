import Link from "next/link";
import { Product } from "../../../../types";
import ProductItemPricing from "../../../shared/productItemPricing";
import { toFarsiNumber } from "@/utils/formatters";
import styles from "../../styles.module.css"
import SpecialSellBadge from "./_components/specialSellBadge";

const ProductItem = ({product}: {product: Product}) => {
    return(
        <Link href={`/product/${product.id}`} className={`block cursor-pointer relative bg-white overflow-hidden grow py-3 px-4 lg:px-2 h-full ${styles.productItem}`}>
        <article className={"overflow-hidden flex flex-col items-stretch justify-start h-full"}>
            <SpecialSellBadge isBannerVisible={product.default_variant.price?.discount_percent > 0} />
            <div className="flex grow relative flex-col">
                <div className="flex items-start mx-auto mb-1">
                    <img className="w-full rounded-medium inline-block object-contain"
                     src={product.images.main.url?.[0]}
                     width="240" height="240"
                     alt={product.title_fa}
                     title=""
                    />
                </div>
                <div className="grow flex flex-col items-stretch justify-start">
                    <div className="flex items-center justify-start gap-1 flex-wrap mb-1"><br/><br/></div>
                    <h3
                        className="ellipsis-2 text-body2-strong text-neutral-700 h-[52px]">
                        {product.title_fa}
                    </h3>
                    <div className="mb-1 flex items-center justify-between">
                        <div className="flex items-center" >
                            {
                                product.default_variant.shipment_methods?.has_lead_time ? <>
                                    <svg width={18} height={18} className={"fill-icon-delivery-jet-expansion ml-1"}>
                                        <use xlinkHref="#deliveryToday"></use>
                                    </svg>
                                    <p className="text-caption text-neutral-600">ارسال فردا</p>
                                </> : null
                            }

                            <br/>
                        </div>
                        <div className="flex items-center"><p className="text-caption-strong text-neutral-700">{
                            toFarsiNumber(product.data_layer.dimension9)
                        }</p>
                            <div className="flex mr-2 shrink-0">
                                <svg width={16} height={16} className={"fill-icon-rating-0-2"}>
                                    <use xlinkHref="#starFill"></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <ProductItemPricing pricing={product.default_variant.price}/>
                </div>
            </div>

        </article>
    </Link>
    )
}
export default ProductItem;