import { BestSellingProductsOrdered, Product } from "../../types";
import BestSellingProduct from "./bestSellingProduct";
import BestSellingProductsTitle from "./bestSellingProductsTitle";

const BestSellingProductsOrderedWidget = ({data} : {data: BestSellingProductsOrdered}) => {
    return (
        <section className={"container lg:px-4"}>
            <div className={"w-full flex flex-col justify-center align-items py-4 rounded-large border border-neutral-200"}>
                <BestSellingProductsTitle />
                <div className={`px-2 mt-5 lg:mt-7 grid grid-cols-4 gap-4`}>
                    {
                        data?.products.slice(0,12).map((product: Product, index: number) => (
                            <BestSellingProduct key={product.id} product={product} counter={index + 1} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BestSellingProductsOrderedWidget;