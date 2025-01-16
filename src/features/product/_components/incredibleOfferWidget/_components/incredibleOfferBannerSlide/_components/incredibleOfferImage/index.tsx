const IncredibleOfferImage = ({imageUrl} : {imageUrl : string}) => {
    return (
        <div className="w-[88px] h-[88px] leading-none">
            <img
                className="w-full inline-block object-contain" src={imageUrl} width="80"
                height="80" alt="شگفت انگیز"/>
        </div>
    )
}

export default IncredibleOfferImage