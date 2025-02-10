"use client"

import styles from "./styles.module.css"

const Switcher = ({onClick,isOn} : {onClick: () => void,isOn:boolean}) => {
    return (
        <label className={`inline-block relative cursor-pointer ${styles.switcher_wrapper} mr-4`}>
            <input className="hidden absolute" type="checkbox" checked={isOn} onChange={onClick}/>
            <span className={`block bg-neutral-400 absolute rounded-full ${styles.switcher}`}></span>
            <span className={`block w-full relative h-full  ${styles.switch_input}`}></span>
        </label>
    )
}

export default Switcher;