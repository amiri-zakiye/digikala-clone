"use client";
import { replace } from "@/utils/formatters";
import { Category } from "../types";
import Link from "next/link";
import { useMegaMenuContext } from "../context";
import MagaMenuSideNavItem from "./megaMenuSideNavItem";


const MegaMenuSideNav = ({data}: {data: Category[]}) => {
    const {mainCategoriesRef} = useMegaMenuContext();
    
    return(
        <ul ref={mainCategoriesRef} className="flex flex-col bg-neutral-100 rounded-bl-sm border-l border-neutral-100 w-[200px] overflow-auto h-full ltr scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {data.map((item) => (
           <MagaMenuSideNavItem item={item} key={item.id}/>
        ))}
    </ul>

    )
} 


export default MegaMenuSideNav;