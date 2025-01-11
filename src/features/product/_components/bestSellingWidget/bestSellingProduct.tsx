import { Product } from "../../types"
import Link from "next/link"
import styles from "./bestSelling.module.css"
import { toFarsiNumber } from "@/utils/formatters"
const BestSellingProduct = ({product, counter} : {product: Product, counter: number}) => {
    return (
        <Link className={`flex  ${styles.products_container}`} href={`/product/${product.id}`}>
        <div className="rounded shrink-0 ml-3 w-[86px] h-[86px]" >
                <img className="w-full inline-block object-contain"
                     width="86" height="86" alt={product.title_fa}
                     src={product.images.main.url?.[0]}
                />
        </div>
        <span className="text-secondary-500 text-h2-extra ml-3 flex items-center">{toFarsiNumber(counter)}</span>
        <div className={`grow flex flex-col justify-center relative ${styles.product_item}`}>
            <p className="text-body-2 text-neutral-700 ellipsis-2 overflow-hidden">{product.title_fa}</p>
        </div>
</Link>
    )
}

export default BestSellingProduct