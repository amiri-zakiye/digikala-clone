import styles from "./styles.module.css"
import { apiClient } from "@/lib/apiClient"
import { ShopResponse } from "@/app/products/_components/filtersSidebar/types"
import ProductGrid from "./_components/productGrid"

const ProductGridWrapper = async() => {

    const {data} = await apiClient.get<ShopResponse>("products/v1")
    const products = data.products
    

    return(
        <div className={styles.productGrid}>
            <ProductGrid initialProducts={products}  />
        </div>
    )
}

export default ProductGridWrapper;