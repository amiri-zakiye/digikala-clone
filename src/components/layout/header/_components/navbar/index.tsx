import { MegaMenuProvider } from "../../context";
import CategoryMenuItem from "./_components/categoryMenuItem";
import MainMenu from "./_components/mainMenu";
import MegaMenu from "./_components/megamenu";

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