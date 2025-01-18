'use client'
import { useEffect, useState } from "react";
import CheckBoxFilterOption from "./checkboxFilterOption"; 
import styles from "./styles.module.css";
import { CheckBoxFilter as CheckBoxFilterType } from "./types";
import useQueryParameter from "@/features/product/_components/productGrid/hooks/queryParameter";

const CheckboxFilter = ({filter,filterId}: { filter: CheckBoxFilterType,filterId:string }) => {
    const [activeCheckboxId,setActiveCheckboxId] = useState("")

    const setQueryParam =  useQueryParameter()

    const onClickHandler = (id: string) => {
        setActiveCheckboxId(id)
    }

    useEffect(() => {
        setQueryParam(`${filterId}[0]`,activeCheckboxId)
    },[activeCheckboxId])
    
    return (
        <div className={`lg:overflow-y-auto pt-1 ${styles.checkbox_filter_list} lg:px-5`}>
            {
                filter.options.slice(0,100).map((option ) => (
                    <CheckBoxFilterOption 
                        key={option.id} 
                        option={option} 
                        filterId={filterId}
                        isChecked={activeCheckboxId === option.id.toString()}
                        onClick={() => onClickHandler(option.id.toString())}
                    />
                ))
            }
        </div>
    )
}

export default CheckboxFilter;