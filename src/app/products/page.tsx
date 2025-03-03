import ProductGrid from "./components/productsGrid";
import { getProducts } from "./apiLayer";
import FiltersSidebar from "./components/filtersSidebar";
import SortTopbar from "./components/sortTopBar";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

const ProductsPage = async ({ searchParams }:{searchParams:string | string[][] | Record<string, string> | undefined}) => {

  const params = await searchParams
  const urlParams = new URLSearchParams(params);  

  const queryClient = new QueryClient()

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(1,urlParams.toString()),
    initialPageParam: 1,
  })

  return (    
     <>
        <FiltersSidebar />
        <section className="w-full grow relative">
          <SortTopbar />
          <HydrationBoundary state={dehydrate(queryClient)}>
              <ProductGrid />
          </HydrationBoundary>
        </section>
    </>
  );
};

export default ProductsPage;
