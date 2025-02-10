"use client";
import CheckBox from "@/components/ui/checkbox";
import { Option } from "../../../../types";

const CheckBoxFilterOption = ({
  option,
  isChecked,
  onClick,
}: {
  option: Option;
  isChecked: boolean;
  onClick: () => void;
}) => {
  const title =
    typeof option.title === "string" ? option.title : option.title_fa;
  const id = option.id.toString();

  return (
    <div className="w-full flex items-center justify-start">
      <CheckBox checked={isChecked} onChange={onClick} id={id} />
      <label
        htmlFor={id}
        className="w-full grow text-neutral-700 flex items-center justify-between py-3 lg:pl-3 border-b border-neutral-200"
      >
        <div className="text-subtitle-strong">{title}</div>
      </label>
    </div>
  );
};

export default CheckBoxFilterOption;
