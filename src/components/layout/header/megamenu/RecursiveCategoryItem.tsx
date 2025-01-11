import { Category } from "../types";

const RecursiveCategoryItem = ({ category, isTopLevel }: { category: Category; isTopLevel: boolean; }) => {

    const hasChildren = category.children && category.children.length > 0;

    return (
        <div className="min-w-[220px] w-max h-fit whitespace-nowrap" key={category.id}>
            {isTopLevel || hasChildren ? (
                <a
                    style={{ fontSize: "1.4rem" }}
                    href="#"
                    className={`group relative flex items-center hover:text-primary-500 
                    ${isTopLevel ? "before:content-[''] pr-2 before:w-[2px] before:bg-primary-500 before:h-[14px] before:absolute before:right-0" : ""}
                    ${isTopLevel ? "py-3 font-bold" : "py-1"}`}
                >
                    {category.title}
                    <svg className="group-hover:fill-primary-500 fill-neutral-900" width={"16px"} height={"16px"} >
                        <use xlinkHref="#chevronLeft"></use>
                    </svg>
                </a>
            ) : (
                <a className="text-neutral-500 py-1 hover:text-primary-500 text-body-2" key={category.id}>
                    {category.title}
                </a>
            )}

            {hasChildren && category.children.length > 0 && (
                <div className="ml-4">{category.children.map(child => <RecursiveCategoryItem key={child.id} category={child} isTopLevel={false} />)}</div>
            )}
        </div>
    );
};

export default RecursiveCategoryItem;