import styles from "./styles.module.css"
import ProductItem from "./_components/productItem"
import { apiClient } from "@/lib/apiClient"
import { ShopResponse } from "@/app/products/_components/filtersSidebar/types"

const ProductGrid = async() => {
    const { products } = await apiClient.get<ShopResponse>("products/v1")
    return(
        <div className={styles.productGrid}>
        {
                products?.map((product) => {
                return (
                    <ProductItem key={`${product.id}`} product={product} />
                )
            })
        }
        </div>
    )
}

export default ProductGrid;