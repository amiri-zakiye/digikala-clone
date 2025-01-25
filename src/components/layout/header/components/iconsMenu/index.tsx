"use client";
import Link from "next/link";
import { toFarsiNumber } from "@/utils/formatters";
import styles from "./styles.module.css";
import CartDropDown from "../cartDropDown";
import { useCart } from "@/lib/store/hooks";
import useCartDropDownToggle from "@/hooks/useCartDropDownToggle";

const IconsMenu = () => {
  const { count } = useCart();
  const { isDropdownVisible, displayCartDropdown, hideCartDropdown } =
    useCartDropDownToggle();

  return (
    <nav className="flex items-center">
      <Link href="#" className="p-2 ml-3 block">
        <BellIcon />
      </Link>
      <Link href="#" className="flex items-center p-2">
        <UserIcon />
      </Link>
      <div className="bg-neutral-200 mx-3 w-px h-[24px]" />
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
    </nav>
  );
};

const BellIcon = () => {
  return (
    <span
      className="cube-font-icon text-[24px] w-[24px] h-[24px] text-icon-high-emphasis"
      data-icon-name="cube-alert-notification-outline"
      data-icon=""
    />
  );
};
const UserIcon = () => {
  return (
    <>
      <svg width={24} height={24} className={"fill-icon-high-emphasis"}>
        <path
          fillRule="evenodd"
          d="M12 2a5 5 0 015 5v1A5 5 0 017 8V7a5 5 0 015-5zm9.996 18.908C21.572 16.318 18.096 14 12 14c-6.095 0-9.572 2.318-9.996 6.908A1 1 0 003 22h18a1 1 0 00.996-1.092zM4.188 20c.728-2.677 3.231-4 7.812-4 4.58 0 7.084 1.323 7.812 4H4.188zM9 7a3 3 0 116 0v1a3 3 0 01-6 0V7z"
          clipRule="evenodd"
        ></path>
      </svg>
      <svg width={20} height={20} className="fill-icon-high-emphasis">
        <path d="M7 10l5 5 5-5H7z"></path>
      </svg>
    </>
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
export default IconsMenu;
