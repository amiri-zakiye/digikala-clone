import { Fragment, RefObject } from "react";
import styles from "@/features/product/_components/productGrid/styles.module.css";
import ProductItemShimmer from "./_components/productItemShimmer";

const Ids = ["xbqucqa","l8nd94","ghm34l","opstvm","lkzare"]

const ProductShimmer = () => {
    return(
        <Fragment>
        {
            Ids.map((id) => {
                return (
                    <a key={id} className={`block cursor-pointer relative bg-white overflow-hidden grow py-3 px-4 lg:px-2 h-full ${styles.productItem}`}>

                        <ProductItemShimmer Id={id}/>
                    </a>
                )
            })
        }
        </Fragment>
    )
}
export default ProductShimmer