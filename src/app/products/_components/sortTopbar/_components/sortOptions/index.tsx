"use client"

import { memo, useState } from "react";
import { Option } from "../../../filtersSidebar/types";
import SortOption from "../sortOption";
import useQueryParameter from "@/features/product/_components/productGrid/hooks/queryParameter";
import { useShop } from "@/app/products/context";

const SortOptions = memo(({options}: {options: Option[]}) => {
    const {defaultSort} = useShop()
    const {setQueryParam,getQueryParam} =  useQueryParameter()
    const defaultSortState = getQueryParam("sort") || defaultSort
    const [activeSortId,setActiveSortId] = useState(Number(defaultSortState))

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
})

export default SortOptions;