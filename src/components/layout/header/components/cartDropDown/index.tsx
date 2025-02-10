"use client";

import { useCart } from "@/lib/store/hooks";
import { toFarsiNumber } from "@/utils/formatters";
import Link from "next/link";
import styles from "./styles.module.css";
import CartItem from "../cartItem";

const CartDropDown = () => {
  const { cartItems, count, totalAmount } = useCart();

  return (
    <div
      className={`rounded-sm absolute z-10 ${styles.cart_dropdown_container}`}
    >
      <span className="text-body-medium flex items-center  py-3 px-4 text-neutral-600">
        {toFarsiNumber(count)} کالا
      </span>
      <div className={`overflow-auto ${styles.cart_dropdown_list_items} `}>
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.product.id} cartItem={cartItem} />;
        })}
      </div>

      <div className="flex items-center py-2 px-3 border-t border-neutral-200">
        <div className="flex flex-col ml-auto">
          <p className="text-caption text-neutral-500">مبلغ قابل پرداخت</p>
          <div>
            <div className="flex items-center justify-start">
              <div className="flex justify-start items-center gap-1">
                <span className="text-h4 ml-1 text-neutral-800">
                  {toFarsiNumber(totalAmount.toLocaleString())}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex">
                    <svg
                      width={16}
                      height={16}
                      className={"fill-icon-high-emphasis"}
                    >
                      <use xlinkHref="#toman"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link
          className="relative flex items-center user-select-none bg-primary-500 text-white px-4 py-3 text-button-2 rounded-sm mr-auto"
          href="/checkout/cart/"
        >
          <div className="flex items-center justify-center relative grow">
            ثبت سفارش
          </div>
        </Link>
      </div>
    </div>
  );
};
export default CartDropDown;
