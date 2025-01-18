"use client"

import { useState } from "react";
import { Option } from "../../../filtersSidebar/types";
import SortOption from "../sortOption";
import { useShop } from "@/app/products/context";
import useQueryParameter from "@/features/product/_components/productGrid/hooks/queryParameter";

const SortOptions = ({options}: {options: Option[]}) => {
  
    const {defaultSort} = useShop()
    const [activeSortId,setActiveSortId] = useState(defaultSort)
    const setQueryParam =  useQueryParameter()

    const onClickHandler = (item: Option) => {
        setActiveSortId(Number(item.id))
        setQueryParam("sort",item.id.toString())
    }
    

    return(
        <>
            {
                options.map((item: Option) => (
                    <SortOption
                        isActive={item.id === activeSortId} 
                        onClick={() => onClickHandler(item)} 
                        key={item.id} 
                        item={item} 
                    />
                ))
            }
        </>
    )
}

export default SortOptions;