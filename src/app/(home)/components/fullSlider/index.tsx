import Slider from "@/components/ui/slider/slider";
import LinkedImage from "@/components/ui/linkedImage";
import { FullSlider } from "./types";

const FullSliderWidget = ({data}: { data: FullSlider[] }) => {
    return (
        <Slider
            slidesPerView={1}
            navigation={true}
            pagination={true}
            loop={true}
            autoplay={{delay: 3000,disableOnInteraction: false}}
        >
            {data.map((banner) => (
                <LinkedImage 
                    key={banner.title}
                    containerClassName="block w-full h-full min-h-[400px] relative" 
                    imageClassName="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full"
                    src={banner.image} 
                    href={banner.url.uri}
                    alt={banner.title} 
                    width={1700}
                    height={400}
                    loading={"eager"}
                />
            ))}
        </Slider>
    );
}

export default FullSliderWidget;