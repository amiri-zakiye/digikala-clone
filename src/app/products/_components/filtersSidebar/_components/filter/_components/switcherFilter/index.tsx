"use client"
import Switcher from "@/components/ui/switcher/switcher";
import { useState } from "react";

const SwitcherFilter = ({filterId}: {filterId: string}) => {

    const [isOn, setIsOn] = useState<boolean>(false);

    const onClickHandler = () => {
        setIsOn(isOnPrev => !isOnPrev);
    }
    
    return (
        <Switcher key={filterId} onClick={onClickHandler} isOn={isOn}/>
    )
}   

export default SwitcherFilter;