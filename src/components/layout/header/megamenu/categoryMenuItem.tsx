"use client";

import { useMegaMenuContext } from "../context";
import useMegaMenuLayout from "../hooks/useMegaMenuLayout";

const CategoryMenuItem = () => {
    const {displayMegaMenu,hideMegaMenu} = useMegaMenuContext()
    const {menuWithDropDownRef} = useMegaMenuLayout()
    
    return(
        <span 
            ref={menuWithDropDownRef}
            onMouseEnter={displayMegaMenu}
            onMouseLeave={hideMegaMenu}
            className="flex items-center text-neutral-700 font-bold text-[1.4rem] leading-[2.15] pl-5 cursor-pointer"
        >
            <BurgerIcon/>
            دسته‌بندی کالا‌ها
        </span>
    )
}

const BurgerIcon = () => {
    return (
        <svg
            className="ml-1 fill-icon-high-emphasis"
            width={20}
            height={20}
        >
           <use xlinkHref="#hamburgerMenu"></use>
        </svg>
    );
};

export default CategoryMenuItem;