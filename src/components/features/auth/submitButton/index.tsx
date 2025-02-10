"use client";
import { Button, ButtonProps } from "@heroui/react";

type SubmitButtonProps = ButtonProps & {
  label: string | React.ReactNode
};
const SubmitButton = (props: SubmitButtonProps) => {
  const { label, ...buttonProps } = props;

  return (
    <Button
      {...buttonProps}
      color="danger"
      radius="sm"
      className="w-full h-16 text-lg"
    >
      {label}
    </Button>
  );
};
export default SubmitButton;
