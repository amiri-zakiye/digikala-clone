import { MegaMenuProvider } from "../../context";
import CategoryMenuItem from "../categoryMenuItem";
import MainMenu from "../mainMenu";
import MegaMenu from "../megamenu";

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