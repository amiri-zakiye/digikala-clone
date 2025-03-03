"use client";
import { useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { getProducts } from "../../apiLayer";
import useInfiniteScroll from "../../hooks/infiniteScroll";
import ProductItem from "./components/productItem";
import ProductsShimmer from "./components/productsShimmer";
import styles from "@/app/products/styles.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useShop } from "../../context";
const ProductGrid = () => {

  const ref = useRef(null);
  const searchParams = useSearchParams();
  const { setProductsCount } = useShop()

  const {
    fetchNextPage,
    hasNextPage,
    isLoading,
    data,
    isFetchingNextPage,
    refetch
  } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam = 2 }) => getProducts(pageParam, searchParams.toString()), 
    initialPageParam: 2,
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.data.pager.current_page;
      const totalPages = lastPage.data.pager.total_pages;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    getPreviousPageParam: (firstPage) => {
      const currentPage = firstPage.data.pager.current_page;
      return currentPage > 1 ? currentPage - 1 : undefined; 
    }
  });


  const products = data?.pages.flatMap((page) => page.data.products) || [];

  useInfiniteScroll({
    onIntersect: async () => {
      if (hasNextPage && !isFetchingNextPage) {
        await fetchNextPage();
      }
    },
    root: ref,
    rootMargin: "60px",
    threshold: 0.1,
  });


  //TODO: find a better solution
  useEffect(() => {
    refetch(); 
    setProductsCount(data.pages[0].data.pager.total_items || 0)
  }, [searchParams,refetch]);


  return (
    <>
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductItem key={`${product.id}`} product={product} />
        ))}
        {(isLoading || isFetchingNextPage) && <ProductsShimmer />}
      </div>
      <div
        ref={ref}
        style={{ width: "100%", height: "1px", visibility: "hidden" }}
      />
    </>
  );
};

export default ProductGrid;