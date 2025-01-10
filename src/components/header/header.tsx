import Search from "./search";
import LinkedImage from "../common/linkedImage";
import IconsMenu from "./menus/iconsMenu";
import MainMenu from "./menus/mainMenu";

const Header = () => {
    return (
        <header className="relative z-40 bg-white shadow-sm">
            <div className="container">
                <div className="flex py-3">
                    <div className="flex-1">
                        <div className="flex items-center">
                            <LinkedImage 
                                className="ml-5" 
                                src="/full-horizontal.svg" 
                                href="/"
                                width={195} 
                                height={30} 
                                alt="logo" 
                            />
                            <Search/>
                        </div>
                    </div>
                    <IconsMenu />
                </div>
                <div className="flex pb-1 items-center">
                    <div className="flex-1">
                        <MainMenu />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;