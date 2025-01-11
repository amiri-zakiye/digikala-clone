import IncredibleOfferCountDown from "./incredibleOfferCountdown"

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

const IncredibleOfferImage = ({imageUrl} : {imageUrl : string}) => {
    return (
        <div className="w-[88px] h-[88px] leading-none">
            <img
                className="w-full inline-block object-contain" src={imageUrl} width="80"
                height="80" alt="شگفت انگیز"/>
        </div>
    )
}

const IncredibleOfferViewMore = () => {
    return (
        <div className="flex justify-center items-center text-button-2 text-white">
            مشاهده همه
            <svg width={18} height={18} className="fill-white">
                <use xlinkHref="#chevronLeft"></use>
            </svg>
        </div>
    )
}

export default IncredibleOfferBannerSlide;