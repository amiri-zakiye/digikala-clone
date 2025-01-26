"use client";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import useQueryParameter from "../../hooks/queryParameter";
import CheckBoxFilterOption from "../checkboxFilterOption";
import { CheckBoxFilter as CheckBoxFilterType } from "./checkboxFilter.type";

const CheckboxFilter = ({
  filter,
  filterId,
}: {
  filter: CheckBoxFilterType;
  filterId: string;
}) => {
  const { setQueryParam, getQueryParam } = useQueryParameter();
  const defaultCheckboxId = getQueryParam(`${filterId}[0]`) ?? false;
  const [activeCheckboxId, setActiveCheckboxId] = useState(defaultCheckboxId);

  const onClickHandler = (id: string) => {
    setActiveCheckboxId(id);
  };

  useEffect(() => {
    setQueryParam(`${filterId}[0]`, activeCheckboxId);
  }, [activeCheckboxId]);

  return (
    <div
      className={`lg:overflow-y-auto pt-1 ${styles.checkbox_filter_list} lg:px-5`}
    >
      {filter.options.slice(0, 100).map((option) => (
        <CheckBoxFilterOption
          key={option.id}
          option={option}
          isChecked={activeCheckboxId === option.id.toString()}
          onClick={() => onClickHandler(option.id.toString())}
        />
      ))}
    </div>
  );
};

export default CheckboxFilter;
