import CategoryMenuItem from "../megamenu/categoryMenuItem";
import MegaMenuWrapper from "../megamenu/megaMenuWrapper";
import MainMenu from "./mainMenu";

const Navbar = () => {
    return(
        <ul className="flex items-center relative w-max" >
            <CategoryMenuItem />
            <MegaMenuWrapper />
            <MainMenu />
        </ul>
    )
}

export default Navbar;