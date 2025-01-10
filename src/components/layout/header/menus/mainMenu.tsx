import  Link from "next/link"
import menuList from "../../../../../data/menuList";

const MainMenu  = () => {
    return(
        <nav className="flex items-center relative w-max">
            <a className="flex items-center text-neutral-700 font-bold text-[1.4rem] leading-[2.15] pl-5">
                <BurgerIcon/>
                دسته‌بندی کالا‌ها
            </a>
            <div className="flex">
            {menuList.map((menu, index) => (
                <ul className="flex relative before:content-[''] before:w-px before:bg-neutral-200 before:h-[16px] before:transform before:-translate-y-1/2 before:top-1/2 before:absolute before:right-0" key={index}>
                    {menu.map((item) => (
                        <li key={item.title} className="flex items-center px-3">
                            <Link
                                className="flex items-center text-neutral-600 text-body-2"
                                href="/search"
                            >
                                {item.icon}
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            ))}
        </div>
        </nav>
    )
}


const BurgerIcon = () => {
    return (
        <svg
            className="ml-1 fill-icon-high-emphasis"
            width={20}
            height={20}
        >
            <path fillRule="evenodd" d="M19 8V6H5v2h14zm0 3v2H5v-2h14zm0 5v2H5v-2h14z"
                  clipRule="evenodd"></path>
        </svg>
    );
};
export default MainMenu