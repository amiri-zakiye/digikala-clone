"use client";
import Switcher from "@/components/ui/switcher/switcher";
import { useState } from "react";
import useQueryParameter from "../../../../hooks/queryParameter";

const SwitcherFilter = ({ filterId }: { filterId: string }) => {
  const { setQueryParam, getQueryParam } = useQueryParameter();
  const defaultValue = getQueryParam(filterId) === "1" ? true : false;
  const [isOn, setIsOn] = useState<boolean>(defaultValue);

  const onClickHandler = () => {
    const newState = !isOn
    setIsOn(newState);
    setQueryParam(filterId, newState);
  };

  return <Switcher key={filterId} onClick={onClickHandler} isOn={isOn} />;
};

export default SwitcherFilter;
