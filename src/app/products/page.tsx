import ProductGridWrapper from "@/features/product/_components/productGrid";
import SortOptionsWrapper from "./_components/sortTopbar";
import FiltersSidebar from "./_components/filtersSidebar";
import { ShopProvider } from "./context";
import ProductGrid from "@/features/product/_components/productGrid";
import productApiClient from "@/features/product/apiLayer/product"

const ProductsPage = async() => {

  const {data} = await productApiClient.getProducts(1)
  const {products,filters,pager} = data

    return(
      <main className="container pt-6">
          <div className={`relative w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-x-5`}>
            <ShopProvider>
              <FiltersSidebar />
              <section className="w-full grow relative">
                  <SortOptionsWrapper />
                  <ProductGrid initialProducts={products} initialFilters={filters} initialPager={pager}  />
                  </section>
              </ShopProvider>
          </div>
      </main>
    )
}

export default ProductsPage;