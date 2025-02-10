
const ViewAllFeatures = () => {
    return (
      <div className="flex justify-center items-center gap-4 mt-4">
        <hr className="grow b-t border-neutral-200" />
        <button className="relative flex items-center user-select-none  text-button-2 rounded-sm border-neutral-200 border px-5 py-2">
          <div className="flex items-center justify-center relative grow">
            مشاهده همه ویژگی&zwnj;ها
            <div className="flex mr-2">
              <svg width={24} height={24} className={"fill-black"}>
                <use xlinkHref="#chevronLeft"></use>
              </svg>
            </div>
          </div>
        </button>
        <hr className="grow border-t border-neutral-200" />
      </div>
    );
  };

  export default ViewAllFeatures;