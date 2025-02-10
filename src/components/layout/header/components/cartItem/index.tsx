import Image from "next/image";
import { ProductCartItem } from "@/lib/store/slices/cart/cart.types";
import styles from "./styles.module.css";
import { toFarsiNumber } from "@/utils/formatters";
import { Product } from "@/types/product.types";
import Link from "next/link";
import { removeFromCart } from "@/lib/store/slices/cart/cartSlice";
import { addToCart } from "@/lib/store/slices/cart/cartSlice";
import { useAppDispatch } from "@/lib/store/hooks";

const CartItem = ({ cartItem }: { cartItem: ProductCartItem }) => {
  const { product, quantity } = cartItem;

  return (
    <div className={"mx-3 py-4"}>
      <div className={`${styles.cart_dropdown_item}`}>
        <CartItemRight product={product} quantity={quantity} />
        <CartItemLeft product={product} />
        <CartQuantityManager quantity={quantity} product={product} />
        <CartItemPricing product={product} />
      </div>
    </div>
  );
};

const CartQuantityManager = ({
  quantity,
  product,
}: {
  quantity: number;
  product: Product;
}) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${styles.add_to_cart_quantity} flex items-center justify-between user-select-none px-2 rounded-sm border-neutral-200 border`}
    >
      <div
        className="flex cursor-pointer"
        onClick={() => dispatch(addToCart(product))}
      >
        <svg width={18} height={18} className={"fill-primary-500"}>
          <use xlinkHref="#addSimple"></use>
        </svg>
      </div>
      <span className="flex flex-col items-center justify-between text-primary-500">
        <span className="relative flex items-center justify-center text-h5">
          {toFarsiNumber(quantity)}
        </span>
      </span>
      <div
        className="flex cursor-pointer"
        onClick={() => dispatch(removeFromCart(product))}
      >
        <svg width={18} height={18} className={"fill-primary-500"}>
          <use xlinkHref="#delete"></use>
        </svg>
      </div>
    </div>
  );
};

const CartItemPricing = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="flex items-center text-primary-700">
        {product.default_variant.price.discount_percent > 0 && (
          <span className="text-caption-strong">
            {toFarsiNumber(
              (
                (product.default_variant.price.discount_percent *
                  product.default_variant.price.rrp_price) /
                100
              ).toLocaleString()
            )}
          </span>
        )}
        <div className="flex relative">
          <svg width={14} height={14} className={"fill-primary-500"}>
            <use xlinkHref="#toman"></use>
          </svg>
        </div>
        <span className="text-caption mr-1">تخفیف</span>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center justify-start ml-4">
            <div className="flex justify-start items-center gap-1">
              <span className="text-h4 text-neutral-800">
                {toFarsiNumber(
                  product.default_variant.price.selling_price.toLocaleString()
                )}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex">
                  <svg
                    width={18}
                    height={18}
                    className={"fill-icon-high-emphasis"}
                  >
                    <use xlinkHref="#toman"></use>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex a-center flex-row-reverse ml-4"></div>
      </div>
    </div>
  );
};

const CartItemLeft = ({ product }: { product: Product }) => {
  return (
    <div className="overflow-x-hidden">
      <h3 className="text-neutral-800 text-body-1 mb-2">{product.title_fa}</h3>
      <div className="flex flex-col w-full relative">
        <ul className="flex flex-col">
          {product.default_variant.shipment_methods.providers.map(
            (provider) => (
              <li key={provider.title} className="flex ml-3 items-center">
                <div className="flex">
                  <svg
                    width={14}
                    height={14}
                    className={`${
                      provider.type === "jet"
                        ? "fill-icon-delivery-jet-expansion"
                        : "fill-primary-500"
                    }`}
                  >
                    <use
                      xlinkHref={`#${
                        provider.type === "jet"
                          ? "deliveryToday"
                          : "deliveryExpress"
                      }`}
                    ></use>
                  </svg>
                </div>
                <p className="text-body-2 text-neutral-500 mr-2 ellipsis">
                  {provider.title}
                </p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

const CartItemRight = ({
  product,
  quantity,
}: {
  product: Product;
  quantity: number;
}) => {
  return (
    <div className="flex flex-col items-center">
      <Link className="relative" href={`/product/${product.id}`}>
        <div className={"w-[114px] h-[114px] object-contain"}>
          <Image
            className="w-full inline-block"
            src={product.images.main.url?.[0]}
            width="114"
            height="114"
            title=""
            alt={product.title_fa}
          />
        </div>
        <div className=" absolute bottom-0 left-0 rounded-small text-center text-neutral-900 text-caption-strong hidden">
          {toFarsiNumber(quantity)}
        </div>
      </Link>
      <div className="mr-2">
        <div className="flex items-center text-h5 py-2 mt-2 flex-col">
          <div className="ml-2 flex items-center justify-center w-[64px] h-[14px]">
            {product.default_variant.price.discount_percent > 0 && (
              <Image
                className="w-full inline-block object-contain"
                src="/SpecialSell.svg"
                width="64"
                height="14"
                alt=""
                title=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
