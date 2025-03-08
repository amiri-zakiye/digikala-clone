import ProductGrid from "./components/productsGrid";
import FiltersSidebar from "./components/filtersSidebar";
import SortTopbar from "./components/sortTopBar";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import {createPrefetchedQueryClient} from "./hooks/prefetchProducts"

const ProductsPage = async ({ searchParams }:{searchParams:string | string[][] | Record<string, string> | undefined}) => {

  const params = await searchParams
  const queryClient = await createPrefetchedQueryClient(params)

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
