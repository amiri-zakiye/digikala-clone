import ProductMainThumbnail from "./components/productMainThumbnail";
import ProductHeaderSection from "./components/productHeaderSection";
import ProductStock from "./components/productStock";
import ProductSpecifications from "./components/productSpecifications";
import styles from "./styles.module.css";
import { getProductData } from "./apiLayer";

const ProductPage = async () => {
  const data = await getProductData(8366616);
  console.log(data);
  return (
    <main className={"container"}>
      <section className={"flex flex-col lg:flex-row overflow-hidden"}>
        <div className="flex flex-col items-center lg:max-w-92 xl:max-w-145 lg:block">
          <ProductMainThumbnail />
        </div>
        <div className={"grow"}>
          <ProductHeaderSection />
          <div className={styles.product_left_section}>
            <div className={" border-t border-neutral-200 pt-2"}>
              <ProductSpecifications />
            </div>
            <ProductStock />
          </div>
        </div>
      </section>
    </main>
  );
};
export default ProductPage;
