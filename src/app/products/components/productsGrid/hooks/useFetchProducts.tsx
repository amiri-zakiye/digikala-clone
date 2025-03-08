import { ReadonlyURLSearchParams } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "@/app/products/apiLayer";

export const useFetchProducts = (searchParams: ReadonlyURLSearchParams) => {
    return useInfiniteQuery({
        queryKey: ['products',searchParams.toString()],
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
}