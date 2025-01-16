import { Product } from "@/features/product/types";
import Link from "next/link";
import ProductItemPricing from "@/features/product/_components/shared/productItemPricing";

const ProductCard= ({product,counter} : {product: Product,counter:number}) => {
    return (
        <Link className={`${counter === 0 ? "rounded-r-sm"  : ""} block cursor-pointer relative bg-white overflow-hidden grow py-2 px-2 lg:px-2 shrink-0 ml-[2px] !h-[auto] lg:!h-full`}
           target="_blank"
           href={`/product/${product.id}`}>
            <article className="overflow-hidden flex grow relative  gap-2 flex-col items-stretch justify-start h-full">
                <div className="flex items-stretch flex-col relative  mx-auto w-[132px] h-[132px] leading-none">
                        <img className="w-full rounded-medium inline-block object-contain"
                             src={product.images.main.url?.[0]}
                             width="132" height="132"
                             alt={product.title_fa}
                        />
                </div>
                <div className="grow flex flex-col items-stretch justify-start gap-2">
                        <h3
                            className="ellipsis-2 text-body-2 text-neutral-600 h-[40px] !leading-[20px]">
                            {product.title_fa}
                        </h3>
                        <ProductItemPricing pricing={product.default_variant.price} />
                </div>
            </article>
        </Link>
    )
}
export default ProductCard;