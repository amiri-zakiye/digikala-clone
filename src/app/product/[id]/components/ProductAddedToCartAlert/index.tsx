import { Product } from "@/types/product.types";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Link from "next/link";
import styles from "./styles.module.css";
import CloseProductAddedToCart from "../closeProductAddedToCartAlert";
import Image from "next/image";

const ProductAddedToCartAlert = ({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) => {
  return (
    <div
      className="bg-white absolute flex flex-col  rounded-sm z-30"
      role="dialog"
      aria-modal="true"
    >
      <div className="px-5">
        <div className="flex items-center justify-between border-b border-neutral-200 py-3">
          <div className="flex items-center gap-1">
            <div className="styles_successAnimation__XSW3E">
              <DotLottieReact
                width={25}
                height={25}
                autoplay={true}
                src="/success.lottie"
              />
            </div>
            <span className="text-icon-rating-4-5 text-subtitle-strong">
              این کالا به سبد خرید اضافه شد!
            </span>
          </div>
          <CloseProductAddedToCart onClose={onClose} />
        </div>
      </div>
      <div className="grow flex flex-col  pt-3 px-3">
        <div className="flex items-center gap-3 ">
          <div className="cursor-pointer shrink-0 grow-0 w-[80px]">
            <Image
              className="w-full rounded-sm  inline-block object-contain"
              src={product.images.main.url?.[0]}
              width="160"
              height="160"
              alt={product.title_fa}
            />
          </div>
          <div className="flex items-center w-full px-large lg:px-0">
            <h1
              className={`${styles.cart_text} text-neutral-900 mb-2 pointer-events-none ellipsis-2`}
            >
              {product.title_fa}
            </h1>
          </div>
        </div>
      </div>
      <Link
        href="/checkout/cart/"
        className="relative flex bg-primary-500 text-white mx-5 my-3 h-[40px] justify-center items-center user-select-none text-button-2 rounded-sm"
      >
        برو به سبد خرید
      </Link>
    </div>
  );
};
export default ProductAddedToCartAlert;
