import Link from "next/link";

const LoginButton = () => {
  return (
    <Link
      href="/login"
      className="border border-neutral-200 px-3 py-1 flex items-center user-select-none text-button-2 rounded-sm whitespace-nowrap shrink-0 lg:ml-0"
    >
      <LoginIcon />
      <span className="mr-1">ورود | ثبت نام</span>
    </Link>
  );
};

const LoginIcon = () => {
  return (
    <svg width={24} height={24} className="fill-icon-high-emphasis">
      <use xlinkHref="#registerationSignIn"></use>
    </svg>
  );
};
export default LoginButton;
