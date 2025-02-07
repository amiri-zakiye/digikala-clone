import { login } from "./actions";
import Input from "@/components/ui/input";
import { Button, Link } from "@heroui/react";

const Login = () => {
  return (
    <>
      <h1 className="text-body-1 border-b border-neutral-100 pb-3 mb-3">
        ورود به دیجی کالا
      </h1>
      <Input label="ایمیل" type="email" />
      <Input label="رمزعبور" type="password" />
      <Button
        formAction={login}
        color="danger"
        radius="sm"
        type="submit"
        className="w-full h-16 text-lg"
      >
        ورود
      </Button>
      <p>
        حساب کاربری ندارید؟
        <Link className="text-primary-700 mr-1 font-bold text-lg" href="/register">ایجاد کنید</Link>
      </p>
    </>
  );
};
export default Login;
