import { Fragment } from "react";
import ProductItemShimmer from "../productShimmer";
import styles from "@/app/products/styles.module.css"
const Ids = ["xbqucqa", "l8nd94", "ghm34l", "opstvm", "lkzare"];

const ProductsShimmer = () => {
  return (
    <Fragment>
      {Ids.map((id) => {
        return (
          <span
            key={id}
            className={`block cursor-pointer relative bg-white overflow-hidden grow py-3 px-4 lg:px-2 h-full ${styles.productItem}`}
          >
            <ProductItemShimmer Id={id} />
          </span>
        );
      })}
    </Fragment>
  );
};
export default ProductsShimmer;
