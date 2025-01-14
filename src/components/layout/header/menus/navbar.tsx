import { MegaMenuProvider } from "../context";
import CategoryMenuItem from "../megamenu/categoryMenuItem";
import MegaMenu from "../megamenu/megaMenu";
import MainMenu from "./mainMenu";

const Navbar = () => {
    return(
        <ul className="flex items-center relative w-max" >
            <MegaMenuProvider>
                <CategoryMenuItem />
                <MegaMenu />
            </MegaMenuProvider>
            <MainMenu />
        </ul>
    )
}

export default Navbar;