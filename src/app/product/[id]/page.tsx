import ProductHeaderSection from "./components/productHeaderSection";
import ProductStock from "./components/productStock";
import ProductSpecifications from "./components/productSpecifications";
import styles from "./styles.module.css";
import { pageContext } from "@/utils/serverContext";
import ProductMedia from "./components/ProductMedia";

const ProductPage = pageContext.Wrapper(async () => {
  return (
    <main className={"container"}>
      <section className={"flex flex-col lg:flex-row overflow-hidden"}>
        <div className="flex flex-col items-center ml-4 max-w-[36%]">
          <ProductMedia />
        </div>
        <div className={"grow mt-5"}>
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
});
export default ProductPage;
