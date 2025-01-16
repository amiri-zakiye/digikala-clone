"use client";
import { groupCategoriesByColumn } from '@/components/layout/header/utils/groupCategories';
import { useMemo } from 'react';
import RecursiveCategoryItem from './_components/recursiveCategoryItem';
import MegaMenuBodyWrapper from './_components/wrapper';
import { Category } from '../../types';

const MegaMenuBody = ({data}: {data: Category[]}) => {
    
    return(
        <>
        {
            data.map(item => {
                const groupedData = useMemo(() => groupCategoriesByColumn(item.children), [item.children]);
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

export default MegaMenuBody;