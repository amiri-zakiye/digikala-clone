import Input from "@/components/ui/input";
import { Button } from "@heroui/react";
import { signup } from "./actions";

const Register = () => {
  return (
    <>
      <h1 className="text-body-1 border-b border-neutral-100 pb-3 mb-3">
        ثبت نام در دیجی‌کالا
      </h1>
      <Input label="ایمیل" type="email" name="email" />
      <Input label="رمزعبور" type="password" name="password"/>
      <Button
        formAction={signup}
        color="danger"
        radius="sm"
        type="submit"
        className="w-full h-16 text-lg"
      >
        ثبت نام
      </Button>
    </>
  );
};
export default Register;
