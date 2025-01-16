import IncredibleOfferCountDown from "./_components/incredibleOfferCountdown";
import IncredibleOfferImage from "./_components/incredibleOfferImage";
import IncredibleOfferViewMore from "./_components/incredibleOfferViewMore";

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