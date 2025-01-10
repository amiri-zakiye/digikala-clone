import Slider from "@/components/ui/slider/slider";
import { FullSliderData } from "../widget.const";
import LinkedImage from "@/components/ui/linkedImage";

const FullSlider = ({data}: { data: FullSliderData[] }) => {
    return (
        <Slider
            slidesPerView={1}
            navigation={true}
            pagination={true}
            // loop={true}
            autoplay={false}
        >
            {data.map((banner) => (
                <LinkedImage 
                    key={banner.title}
                    containerClassName="block w-full h-full min-h-[400px] relative" 
                    imageClassName="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full"
                    src={banner.image} 
                    href={banner.url.uri}
                    alt={banner.title} 
                />
            ))}
        </Slider>
    );
}

export default FullSlider;