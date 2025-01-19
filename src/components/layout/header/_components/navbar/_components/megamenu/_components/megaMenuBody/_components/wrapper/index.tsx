import { useMegaMenuContext } from "@/components/layout/header/context";
import { Category } from "@/components/layout/header/_components/navbar/_components/megamenu/types";
import Link from "next/link";

const MegaMenuBodyWrapper = ({item,children}: {item: Category,children: React.ReactNode}) => {
    const {activeMenuItemIndex,subCategoriesContainerHeight} = useMegaMenuContext()

    return(
        <div
        className={`${activeMenuItemIndex === item.id ? "block" : "hidden"} px-5 pt-5 w-full h-full rtl`}
        key={item.id}
    >
            <Link href="#" className="flex items-center font-bold text-button-2 text-secondary-700 mb-5">
                    همه محصولات {item.title}
                    <svg className={"fill-secondary-700"} width={"16px"} height={"16px"} >
                        <use xlinkHref="#chevronLeft"></use>
                    </svg>
            </Link>

            <div className="flex flex-col" style={{height: subCategoriesContainerHeight}}>
                {children}
            </div>
        </div>
    )
}
export default MegaMenuBodyWrapper;