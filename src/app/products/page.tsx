import ProductGrid from "./components/productsGrid";
import { getProducts } from "./apiLayer";
import { ShopProvider } from "./context";
import FiltersSidebar from "./components/filtersSidebar";
import SortTopbar from "./components/sortTopBar";

export const dynamic = 'auto'
const ProductsPage = async () => {
  const { data } = await getProducts(1);
  const { products, filters, pager } = data;

  return (
    <main className="container pt-6">
      <div
        className={`relative w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-x-5`}
      >
        <ShopProvider>
          <FiltersSidebar />
          <section className="w-full grow relative">
            <SortTopbar />
            <ProductGrid
              initialProducts={products}
              initialFilters={filters}
              initialPager={pager}
            />
          </section>
        </ShopProvider>
      </div>
    </main>
  );
};

export default ProductsPage;
