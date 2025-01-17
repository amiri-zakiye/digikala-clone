import styles from "./styles.module.css"
import ProductGrid from "./_components/productGrid"
import productApiClient from "../../apiLayer/product"

const ProductGridWrapper = async() => {

    const {data} = await productApiClient.getProducts()
    const products = data.products

    return(
        <div className={styles.productGrid}>
            <ProductGrid initialProducts={products}  />
        </div>
    )
}

export default ProductGridWrapper;