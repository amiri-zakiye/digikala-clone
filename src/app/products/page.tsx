import ProductGridWrapper from "@/features/product/_components/productGrid";
import SortOptionsWrapper from "./_components/sortTopbar";
import FiltersSidebar from "./_components/filtersSidebar";
import { ShopProvider } from "./context";

const ProductsPage = () => {

    return(
      <main className="container pt-6">
          <div className={`relative w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-x-5`}>
            <ShopProvider>
              <FiltersSidebar />
              <section className="w-full grow relative">
                  <SortOptionsWrapper />
                  <ProductGridWrapper />
              </section>
              </ShopProvider>
          </div>
      </main>
    )
}

export default ProductsPage;