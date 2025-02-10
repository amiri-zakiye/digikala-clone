import Link from "next/link";
import GoToDasboard from "./components/goToDashboard";
import Cart from "./components/cart";

const IconsMenu = () => {
  return (
    <nav className="flex items-center">
      <Link href="#" className="p-2 ml-3 block">
        <BellIcon />
      </Link>
      <GoToDasboard />
      <div className="bg-neutral-200 mx-3 w-px h-[24px]" />
      <Cart />
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

export default IconsMenu;
