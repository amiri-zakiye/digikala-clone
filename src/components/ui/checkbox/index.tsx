"use client"
import styles from "./styles.module.css";

const CheckBox = ({id,checked,onChange}: {id: string,checked:boolean,onChange: () => void}) => {
   
    
   
    return(
        <label className={`flex items-center cursor-pointer ${styles.checkbox_label} py-1 ml-4`}>
            <input
                className="invisible absolute" id={id} type="checkbox" checked={checked}
                onChange={onChange}
            />
            <span
                className={`inline-flex justify-center items-center cursor-pointer rounded-xs shrink-0  ${styles.checkbox_input}`}>
                        <svg width={10} height={10} className={"fill-white"}>
                            <use xlinkHref="#check"></use>
                        </svg>
                </span>
        </label>
    )
}
export default CheckBox