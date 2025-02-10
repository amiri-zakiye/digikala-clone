import IncredibleOfferImage from "../bannerImage";
import IncredibleOfferViewMore from "../viewMore";
import IncredibleOfferCountDown from "../countdown";

const IncredibleOfferBannerSlide = ({timer} : {timer:number})  => {
    return (
        <div className="flex flex-row justify-center items-center lg:flex-col gap-2 lg:gap-3">
            <IncredibleOfferImage imageUrl={"/Amazings.svg"}/>
            <IncredibleOfferCountDown timer={timer} />
            <IncredibleOfferImage imageUrl={"/Amazing.svg"}/>
            <IncredibleOfferViewMore />
        </div>
    )
}

export default IncredibleOfferBannerSlide;