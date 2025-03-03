import QueryClientProviderWrapper from "@/lib/queryClient";
import { ShopProvider } from "./context";

const ProductsLayout = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    return(
    <main className="container pt-6">
      <div
        className={`relative w-full flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-x-5`}
      >
        <QueryClientProviderWrapper>
            <ShopProvider>
                {children}
            </ShopProvider>
        </QueryClientProviderWrapper>
      </div>
    </main>
    )
}
export default ProductsLayout

