import Slider from "@/components/ui/slider/slider";
import { IncredibleOffer } from "./types";
import styles from "./styles.module.css";
import { getMaxTimer } from "@/utils/formatters";
import IncredibleOfferBannerSlide from "./_components/incredibleOfferBannerSlide";
import ProductCard from "./_components/productCard";

const IncredibleOfferWidget = ({data}: {data: IncredibleOffer}) => {
    return (
        <section className="container lg:px-4">
        <div className={`lg:block flex flex-col justify-center items-center lg:rounded-lg overflow-hidden ${styles.amazing_offers}`}>
            <div className="w-full flex flex-nowrap pb-5 lg:py-5 lg:pr-0 justify-stretch overflow-hidden relative lg:rounded-large pr-5">
                <Slider 
                    slidesPerView={"auto"} 
                    pagination={false} 
                    spaceBetween={2} 
                    navigation={false}
                >
                    {[
                        <CardWrapper key="incredible-offer" >
                            <IncredibleOfferBannerSlide timer={getMaxTimer(data.products)} />
                        </CardWrapper>,
                        ...data.products.map((item, index) => (
                            <CardWrapper key={item.id}>
                                <ProductCard product={item} counter={index} />
                            </CardWrapper>
                        )),
                    ]}
                </Slider>
            </div>
        </div>
    </section>
    )
}

const CardWrapper = ({ children }: { children: React.ReactNode}) => (
    <div className="w-[160px] min-w-[160px] max-w-[160px]" >
      {children}
    </div>
);
export default IncredibleOfferWidget;