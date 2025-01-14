import ProductGrid from "@/features/product/_components/productGrid/productGrid";
import FiltersSidebar from "./_components/filters/filtersSidebar";
import SortOptionsWrapper from "./_components/sort/sortOptionsWrapper";

const ProductsPage = async () => {

    return(
      <main className="container pt-6">
          <div className={`relative w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-x-5`}>
              <FiltersSidebar />
              <section className="w-full grow relative">
                  <SortOptionsWrapper />
                  <ProductGrid />
              </section>
          </div>
      </main>
    )
}

export default ProductsPage;