import { Link } from "@heroui/react";
import LoginForm from "../../../components/features/auth/loginForm";

const Login = () => {
  return (
    <>
      <h1 className="text-body-1 border-b border-neutral-100 py-3 mb-3 pr-5">
        ورود به دیجی کالا
      </h1>
      <LoginForm />
      <p className=" pb-3 pr-5">
        حساب کاربری ندارید؟
        <Link
          className="text-primary-700 mr-1 font-bold text-lg"
          href="/register"
        >
          ایجاد کنید
        </Link>
      </p>
    </>
  );
};
export default Login;
