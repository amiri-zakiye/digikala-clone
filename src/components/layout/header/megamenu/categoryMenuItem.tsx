"use client";

const CategoryMenuItem = () => {
    return(
        <span className="flex items-center text-neutral-700 font-bold text-[1.4rem] leading-[2.15] pl-5 cursor-pointer">
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