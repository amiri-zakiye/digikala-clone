"use client"
import Switcher from "@/components/ui/switcher/switcher";

const SwitcherFilter = ({filterId}: {filterId: string}) => {
    return (
        <Switcher key={filterId} onClick={() => {}} isOn={false}/>
    )
}   

export default SwitcherFilter;