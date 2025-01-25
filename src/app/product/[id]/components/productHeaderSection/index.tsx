import { getProductDataWithParams } from "../../apiLayer";
import { default as getNavLinks } from "../../utils/navLinks";

const ProductHeaderSection = async () => {
  const product = await getProductDataWithParams();
  const { title_fa, data_layer } = product;
  const navLinks = getNavLinks(product);
  return (
    <>
      <nav className={"flex items-center"}>
        <a className={"text-secondary-500 text-body1-strong"} href="#">
          {data_layer.brand}
        </a>
        <span className={"text-neutral-300 mx-2 "}>/</span>
        <a className={"text-secondary-500 text-body1-strong"}>
          {navLinks[navLinks.length - 1]?.title}
        </a>
      </nav>
      <h1 className={"text-h4 text-neutral-900 pb-medium pointer-events-none"}>
        {title_fa}
      </h1>
    </>
  );
};
export default ProductHeaderSection;
