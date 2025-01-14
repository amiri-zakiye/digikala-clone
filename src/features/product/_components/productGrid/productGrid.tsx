import styles from "@/app/products/products.module.css"
import ProductItem from "./productItem"
const products = []

const ProductGrid = () => {
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