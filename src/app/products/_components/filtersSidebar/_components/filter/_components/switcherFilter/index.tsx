"use client"
import Switcher from "@/components/ui/switcher/switcher";
import useQueryParameter from "@/features/product/_components/productGrid/hooks/queryParameter";
import { useEffect, useState } from "react";

const SwitcherFilter = ({filterId}: {filterId: string}) => {

    const {setQueryParam,getQueryParam} =  useQueryParameter()
    const defaultValue = getQueryParam(filterId) === "1" ? true : false
    const [isOn, setIsOn] = useState<boolean>(defaultValue);

    const onClickHandler = () => {
        setIsOn(isOnPrev => !isOnPrev);
    }

    useEffect(() => {
        setQueryParam(filterId,isOn)
    },[isOn])
    
    return (
        <Switcher key={filterId} onClick={onClickHandler} isOn={isOn}/>
    )
}   

export default SwitcherFilter;