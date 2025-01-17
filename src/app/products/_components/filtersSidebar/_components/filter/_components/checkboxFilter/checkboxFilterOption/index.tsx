"use client"
import { Option } from "@/app/products/_components/filtersSidebar/types";
import CheckBox from "@/components/ui/checkbox";
import { useState } from "react";

const CheckBoxFilterOption = ({option,filterId} : {option: Option,filterId:string} ) => {

    const [isChecked,setIsChecked] = useState(false)
    const title = typeof(option.title) === "string" ? option.title : option.title_fa;
    const id = option.id.toString()

    const onClickHandler = () => {
        setIsChecked(isChecked => !isChecked)
    }
    return (
        <div className="w-full flex items-center justify-start">
            <CheckBox checked={isChecked} onChange={onClickHandler} id={id}/>
            <label htmlFor={id}
                   className="w-full grow text-neutral-700 flex items-center justify-between py-3 lg:pl-3 border-b border-neutral-200">
                <div className="text-subtitle-strong">
                    {title}
                </div>
            </label>
        </div>
    )
}

export default CheckBoxFilterOption;