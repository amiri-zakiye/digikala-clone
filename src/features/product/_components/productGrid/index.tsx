import styles from "./styles.module.css"
import ProductGrid from "./_components/productGrid"
import productApiClient from "../../apiLayer/product"
import { Product } from "../../types"
import ProductItem from "./_components/productItem"

const ProductGridWrapper = async() => {

    const {data} = await productApiClient.getProducts(1)
    const {products,filters,pager} = data

    return(
        <>
            <div className={styles.productGrid}>
                {
                    products.map((item: Product) => <ProductItem key={item.id} product={item} /> )
                }
            </div>
            <ProductGrid initialFilters={filters} initialPager={pager}  />
        </>
    )
}

export default ProductGridWrapper;