import Link from "next/link";
import RegisterForm from "../components/registerForm";

const Register = () => {
  return (
    <>
      <h1 className="text-body-1 border-b border-neutral-100 px-5 pt-3 pb-3 mb-3">
        ثبت نام در دیجی‌کالا
      </h1>
      <RegisterForm />
      <p className=" pb-3 pr-5">
        حساب کاربری دارید؟
        <Link className="text-primary-700 mr-1 font-bold text-lg" href="/login">
          وارد شوید
        </Link>
      </p>
    </>
  );
};
export default Register;
