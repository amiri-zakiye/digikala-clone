"use client";
import { groupCategoriesByColumn } from "@/components/layout/header/utils/groupCategories";
import { Category } from "../megamenu/types";
import MegaMenuBodyWrapper from "../wrapper";
import RecursiveCategoryItem from "../recursiveCategoryItem";

const MegaMenuBody = ({ data }: { data: Category[] }) => {
  return (
    <>
      {data.map((item) => {
        const groupedData = groupCategoriesByColumn(item.children);
        return (
          <MegaMenuBodyWrapper item={item} key={item.id}>
            <div className="flex">
              {Object.keys(groupedData).map((column) => (
                <div
                  key={column}
                  className="min-w-[220px] w-max h-fit whitespace-nowrap"
                >
                  {groupedData[parseInt(column)].map((category: Category) => (
                    <RecursiveCategoryItem
                      key={category.id}
                      category={category}
                      isTopLevel={true}
                    />
                  ))}
                </div>
              ))}
            </div>
          </MegaMenuBodyWrapper>
        );
      })}
    </>
  );
};

export default MegaMenuBody;
