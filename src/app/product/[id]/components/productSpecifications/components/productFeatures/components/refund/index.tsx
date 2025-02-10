const Refund = ({ returnAlert }: { returnAlert: string }) => {
    return (
      <div className="flex  my-3 mx-5 ">
        <div className="flex mt-1">
          <svg width={18} height={18} className={"fill-icon-neutral-hint"}>
            <use xlinkHref="#infoFill"></use>
          </svg>
        </div>
        <span className="mr-2 text-body-2 text-neutral-500">{returnAlert}</span>
      </div>
    );
  };

export default Refund