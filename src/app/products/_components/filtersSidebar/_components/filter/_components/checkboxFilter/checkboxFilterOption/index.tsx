"use client"

import styles from "./styles.module.css";
import { Option } from "@/app/products/_components/filtersSidebar/types";

const CheckBoxFilterOption = ({option,filterId} : {option: Option,filterId:string} ) => {
   
    return (
        <div className="w-full flex items-center justify-start">
            <label
                className={`flex items-center cursor-pointer ${styles.checkbox_label} py-1 ml-4`}>
                <input
                    className="invisible absolute" id={option.id.toString()} type="checkbox" checked={false}
                    
                />
                <span
                    className={`inline-flex justify-center items-center cursor-pointer rounded-xs shrink-0  ${styles.checkbox_input}`}>
                            <svg width={10} height={10} className={"fill-icon-white"}>
                                <use xlinkHref="#check"></use>
                            </svg>
                    </span>
            </label>
            <label htmlFor={option.id.toString()}
                   className="w-full grow text-neutral-700 flex items-center justify-between py-3 lg:pl-3 border-b border-neutral-200">
                <div className="text-subtitle-strong">
                    //TODO: add option title
                </div>
            </label>
        </div>
    )
}

export default CheckBoxFilterOption;