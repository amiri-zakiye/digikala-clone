import Link from "next/link";
import navItems, { type NavItem } from "../../../../../data/dashboardNavItems";

const DasboardNavigation = () => {
  return (
    <nav className="w-full border border-neutral-200 rounded-medium">
      {navItems.map(({ url, icon, title }: NavItem) => (
        <Link className=" block  hover:bg-[#f2f2f2]  px-5" href={url}>
          <div className="flex items-center border-t border-neutral-100 py-3">
            {icon}
            <span className="grow text-neutral-700 text-body1-strong mr-1">
              {title}
            </span>
          </div>
        </Link>
      ))}
      <Link href="/orders"></Link>
    </nav>
  );
};
export default DasboardNavigation;
