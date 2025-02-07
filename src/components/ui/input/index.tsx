"use client";
import { Input as HeroUiInput, InputProps } from "@heroui/react";

const Input = (props: InputProps) => {
  return (
    <HeroUiInput
      {...props}
      size="lg"
      radius="sm"
      variant="flat"
      labelPlacement="inside"
    />
  );
};
export default Input;
