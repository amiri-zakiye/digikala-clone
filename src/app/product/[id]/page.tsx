import ProductHeaderSection from "./components/productHeaderSection";
import ProductStock from "./components/productStock";
import ProductSpecifications from "./components/productSpecifications";
import styles from "./styles.module.css";
import { pageContext } from "@/utils/serverContext";
import ProductMedia from "./components/ProductMedia";
import ProductReviews from "./components/productReviews";

const ProductPage = pageContext.Wrapper(async () => {
  return (
    <main className={"container flex flex-col gap-5"}>
      <section className={"flex flex-col lg:flex-row mt-5"}>
        <div className="flex flex-col items-center ml-4 max-w-[36%]">
          <ProductMedia />
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
      <ProductReviews />
    </main>
  );
});
export default ProductPage;
