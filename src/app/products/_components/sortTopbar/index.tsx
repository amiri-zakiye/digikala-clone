import SortOptions from "./_components/sortOptions";

const SortTopbar = () => {
    return(
        <div className="lg:static sticky lg:top-14 top-16 z-2">
        <div className="flex items-center border-b border-neutral-200 gap-4 sticky top-20 lg:static">
                <div className="flex flex-row items-center gap-x-4 grow">
                    <div className="flex items-center py-3">
                        <svg width={24} height={24} className={"fill-icon-high-emphasis flex shrink-0 ml-2"} >
                            <use xlinkHref="#sort"></use>
                        </svg>
                        <p className="grow cursor-pointer whitespace-nowrap text-neutral-700 relative text-caption-strong">
                            مرتب سازی:
                        </p>
                    </div>
                    <div className="contents">
                        <SortOptions />
                    </div>
                    <span className="text-neutral-500 mr-auto block whitespace-nowrap text-body-2 ellispis-1 xl:flex items-center gap-2">
                        کالا
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SortTopbar;