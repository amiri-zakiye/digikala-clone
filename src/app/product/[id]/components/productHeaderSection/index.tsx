const ProductHeaderSection = async() => {
  return (
    <>
      <nav className={"flex items-center"}>
        <a className={"text-secondary-500 text-subtitle-strong"} href="#">
          {/* {data?.data_layer.brand} */}
        </a>
        <span className={"text-neutral-300 mx-2  text-subtitle-strong"}>/</span>
        <a className={"text-secondary-500 text-subtitle-strong"}>
          {/* {nonEmpt
          yNavItems[nonEmptyNavItems.length - 1]?.title} */}
        </a>
      </nav>
      <h1 className={"text-h4 text-neutral-900 pb-medium pointer-events-none"}>
        {/* {data?.title_fa} */}
      </h1>
    </>
  );
};
export default ProductHeaderSection;
