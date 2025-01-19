import { Product } from "@/types/product.types";
import { BestSellers } from "./bestsellers.types";
import BestSellersProductCard from "./components/productCard";
import BestSellersSectionHeader from "./components/sectionHeader";

const BestSellersWidget = ({ data }: { data: BestSellers }) => {
  return (
    <section className={"container lg:px-4"}>
      <div
        className={
          "w-full flex flex-col justify-center align-items py-4 rounded-large border border-neutral-200"
        }
      >
        <BestSellersSectionHeader />
        <div className={`px-2 mt-5 lg:mt-7 grid grid-cols-4 gap-4`}>
          {data?.products
            .slice(0, 12)
            .map((product: Product, index: number) => (
              <BestSellersProductCard
                key={product.id}
                product={product}
                counter={index + 1}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellersWidget;
