import Slider from "@/components/ui/slider/slider";
import { IncredibleOffer } from "./types";
import styles from "./incredibleOffer.module.css";
import { getMaxTimer } from "@/utils/formatters";
import IncredibleOfferBannerSlide from "./incredibleOfferBannerSlide";
import ProductCard from "./ProductCard";

const IncredibleOfferWidget = ({data}: {data: IncredibleOffer}) => {
    return (
        <section className="container lg:px-4">
        <div className={`lg:block flex flex-col justify-center items-center lg:rounded-lg overflow-hidden ${styles.amazing_offers}`}>
            <div className="w-full flex flex-nowrap pb-5 lg:py-5 lg:pr-0 justify-stretch overflow-hidden relative lg:rounded-large pr-5">
                <Slider 
                    slidesPerView={8.2} 
                    pagination={false} 
                    spaceBetween={2} 
                    navigation={false}
                >
                    {[
                        <IncredibleOfferBannerSlide key="incredible-offer" timer={getMaxTimer(data.products)} />,
                        ...data.products.map((item, index) => (
                            <ProductCard key={item.id} product={item} counter={index} />
                        )),
                    ]}
                </Slider>
            </div>
        </div>
    </section>
    )
}

export default IncredibleOfferWidget;