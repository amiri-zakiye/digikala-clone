"use client";
import { useMegaMenuContext } from '../context';
import useMegaMenuLayout from '../hooks/useMegaMenuLayout';
import { Category } from '../types';
import { groupCategoriesByColumn } from '../utils/groupCategories';
import RecursiveCategoryItem from './RecursiveCategoryItem';

const MegaMenuBody = ({data}: {data: Category[]}) => {
    
    return(
        <>
        {
            data.map(item => {
                    const groupedData = groupCategoriesByColumn(item.children);
                    return (
                        <MegaMenuBodyWrapper item={item} key={item.id}>
                            <div className="flex">
                                {Object.keys(groupedData).map((column) => (
                                    <div key={column} className="min-w-[220px] w-max h-fit whitespace-nowrap">
                                        {groupedData[parseInt(column)].map((category) => (
                                            <RecursiveCategoryItem key={category.id} category={category} isTopLevel={true} />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </MegaMenuBodyWrapper>
                    )
                })
            }
        </>
    )
}

const MegaMenuBodyWrapper = ({item,children}: {item: Category,children: React.ReactNode}) => {
    const {subCategoriesContainerHeight} = useMegaMenuLayout();
    const {activeMenuItemIndex} = useMegaMenuContext()

    return(
        <div
        className={`${activeMenuItemIndex === item.id ? "block" : "hidden"} px-5 pt-5 w-full h-full rtl`}
        key={item.id}
    >
            <a className="flex items-center font-bold text-button-2 text-secondary-700 mb-5">
                    همه محصولات {item.title}
                    <svg className={"fill-secondary-700"} width={"16px"} height={"16px"} >
                        <use xlinkHref="#chevronLeft"></use>
                    </svg>
            </a>

            <div className="flex flex-col" style={{height: subCategoriesContainerHeight}}>
                {children}
            </div>
        </div>
    )
}
export default MegaMenuBody;