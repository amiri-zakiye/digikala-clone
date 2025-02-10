"use client";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { FilterTypes } from "../../../../types";

const FilterWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className={"relative px-5 cursor-pointer"}>
      <div className={"border-neutral-100 py-3 border-b"}>{children}</div>
    </div>
  );
};
const FilterLayout = <T extends FilterTypes>({
  filter,
  children,
}: {
  filter: T;
  children: ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleIsVisible = () => {
    setIsVisible((isVisible) => !isVisible);
  };

  let layout;
  if (filter.type === "switch") {
    layout = (
      <FilterWrapper>
        <div
          className={
            "w-full flex items-center justify-between text-neutral-700"
          }
        >
          <div className="text-subtitle-strong w-full flex items-center">
            {filter.title}
            {filter.icon && (
              <div
                className={
                  "w-[18px] h-[18px] mr-2 flex items-center justify-center"
                }
              >
                <Image
                  src={filter.icon}
                  width={18}
                  height={18}
                  alt={""}
                  className={"w-full inline-block object-contain"}
                />
              </div>
            )}
          </div>
          {children}
        </div>
      </FilterWrapper>
    );
  } else {
    layout = (
      <>
        <FilterWrapper>
          <div
            onClick={toggleIsVisible}
            className={
              "w-full flex items-center text-subtitle-strong text-neutral-700 justify-between"
            }
          >
            {filter.title}
            <div className="hidden lg:inline-block text-neutral-400">
              <svg width={24} height={24} className={"fill-icon-low-emphasis"}>
                <use xlinkHref="#expandMore"></use>
              </svg>
            </div>
          </div>
        </FilterWrapper>
        {isVisible && children}
      </>
    );
  }

  return layout;
};

export default FilterLayout;
