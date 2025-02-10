"use client";
import { Option } from "../../products.type";

const SortOption = ({
  isActive,
  onClick,
  item,
}: {
  isActive: boolean;
  onClick: () => void;
  item: Option;
}) => {
  return (
    <span
      onClick={onClick}
      key={item.id}
      className={`cursor-pointer whitespace-nowrap text-body-2 
            ${
              isActive
                ? "text-primary-700 text-caption-strong"
                : "text-neutral-500"
            }`}
    >
      {item.title_fa}
    </span>
  );
};

export default SortOption;
