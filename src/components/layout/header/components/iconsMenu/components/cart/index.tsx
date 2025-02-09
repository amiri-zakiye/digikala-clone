"use client";

import useCartDropDownToggle from "@/hooks/useCartDropDownToggle";
import { useCart } from "@/lib/store/hooks";
import CartDropDown from "../../../cartDropDown";
import { toFarsiNumber } from "@/utils/formatters";
import styles from "../../styles.module.css";

const Cart = () => {
  const { count } = useCart();
  const { isDropdownVisible, displayCartDropdown, hideCartDropdown } =
    useCartDropDownToggle();

  return (
    <div
      className="p-2 block relative"
      onMouseEnter={() => displayCartDropdown()}
      onMouseLeave={() => hideCartDropdown()}
    >
      <CartIcon />
      {count > 0 && (
        <div
          className={`absolute text-caption-strong flex items-center justify-center bg-primary-500 text-white right-0 bottom-0 ${styles.cart_badge}`}
        >
          {toFarsiNumber(count)}
        </div>
      )}
      {count > 0 && isDropdownVisible && <CartDropDown />}
    </div>
  );
};

const CartIcon = () => {
  return (
    <svg className={"block fill-icon-high-emphasis"} width={24} height={24}>
      <path
        fillRule="evenodd"
        d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};
export default Cart;
