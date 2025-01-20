import  Link from "next/link"
import menuList from "../../../../../../data/menuList"
const MainMenu  = () => {
    return(
        <>
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
        </>
    )
}
export default MainMenu