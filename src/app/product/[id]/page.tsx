import ProductInfo from "../_components/ProductInfo"
import ProductNav from "../_components/productNav"
import ProductThumbnail from "../_components/productThumbnail"

const ProductPage = async() => {
    return(
        <main className={"container"}>
            <ProductNav />
            <section className={"flex flex-col lg:flex-row overflow-hidden"}>
                <ProductThumbnail  />
                <ProductInfo />
            </section>
        </main>
    )
}
export default ProductPage