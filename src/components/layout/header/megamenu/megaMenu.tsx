"use client";

import MegaMenuSideNav from "./megaMenuSideNav";
import { useMegaMenuContext } from "../context";

const   MegaMenu = () => {
    const { isMegaMenuVisible} = useMegaMenuContext();

    return(
        <div className={`megamenu shadow_3 ${isMegaMenuVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
            <MegaMenuSideNav />
            <div className="overflow-y-auto flex-wrap flex-1 ltr h-full" >

            </div>
        </div>
    )
}

export default MegaMenu;