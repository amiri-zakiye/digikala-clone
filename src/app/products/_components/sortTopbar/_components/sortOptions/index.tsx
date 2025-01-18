"use client"

import { useState } from "react";
import { Option } from "../../../filtersSidebar/types";
import SortOption from "../sortOption";
import { useShop } from "@/app/products/context";

const SortOptions = ({options}: {options: Option[]}) => {
  
    const {defaultSort} = useShop()
    const [activeSortId,setActiveSortId] = useState(defaultSort)

    return(
        <>
            {
                options.map((item: Option) => (
                    <SortOption
                        isActive={item.id === activeSortId} 
                        onClick={() => setActiveSortId(Number(item.id))} 
                        key={item.id} 
                        item={item} 
                    />
                ))
            }
        </>
    )
}

export default SortOptions;