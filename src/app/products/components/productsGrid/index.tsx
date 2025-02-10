"use client";
import { useEffect, useRef } from "react";
import { useShop } from "@/app/products/context";
import { Pager } from "@/app/products/context/types";
import { useSearchParams } from "next/navigation";
import { Product } from "@/types/product.types";
import { getProducts } from "../../apiLayer";
import useInfiniteScroll from "../../hooks/infiniteScroll";
import ProductItem from "./components/productItem";
import ProductsShimmer from "./components/productsShimmer";
import { Filter } from "../../types";
import styles from "@/app/products/styles.module.css";

const ProductGrid = ({
  initialProducts,
  initialPager,
  initialFilters,
}: {
  initialProducts: Product[];
  initialPager: Pager;
  initialFilters: Filter;
}) => {
  const searchParams = useSearchParams();
  const ref = useRef(null);
  const {
    products,
    appendProducts,
    setUpInitialProducts,
    replaceProducts,
    resetProducts,
    pager,
    isLoading,
    setloading,
  } = useShop();

  useEffect(() => {
    setUpInitialProducts(initialProducts, initialPager, initialFilters);
  }, []);

  useEffect(() => {
    (async () => {
      resetProducts();
      const { data } = await getProducts(1, searchParams.toString());
      const {
        products: newProducts,
        pager: newPager,
        filters: newFilters,
      } = data;
      replaceProducts(newProducts, newPager, newFilters);
    })();
  }, [searchParams]);

  useInfiniteScroll({
    onIntersect: async () => {
      if (
        pager?.current_page &&
        pager.current_page < pager.total_pages &&
        !isLoading
      ) {
        setloading(true);
        const { current_page } = pager;
        const { data } = await getProducts(current_page + 1, searchParams.toString());
        const { products: newProducts, pager: newPager } = data;
        appendProducts(newProducts, newPager);
      }
    },
    root: ref,
    rootMargin: "60px",
    threshold: 0.1,
  });

  return (
    <>
      <div className={styles.productGrid}>
        {products.map((product) => {
          return <ProductItem key={`${product.id}`} product={product} />;
        })}
        {isLoading ? <ProductsShimmer /> : null}
      </div>
      <div
        ref={ref}
        style={{ width: "100%", height: "1px", visibility: "hidden" }}
      />
    </>
  );
};
export default ProductGrid;
