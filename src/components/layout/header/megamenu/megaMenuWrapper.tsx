"use client";

import { MegaMenuProvider } from "../context";
import MegaMenu from "./megaMenu";

const MegaMenuWrapper = () => {
    return(
        <MegaMenuProvider>
            <MegaMenu />
        </MegaMenuProvider>
    )
}

export default MegaMenuWrapper;