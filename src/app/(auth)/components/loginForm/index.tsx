"use client";
import { Input, Spinner } from "@heroui/react";
import { login } from "../../login/actions";
import SubmitButton from "../submitButton";
import { useActionState } from "react";

const LoginForm = () => {
  const [supabaseState, supabaseLogin, pending] = useActionState(
    login,
    undefined
  );

  return (
    <form className="p-5 flex flex-col gap-2" action={supabaseLogin}>
      <Input
        label="ایمیل"
        type="email"
        name="email"
        required
        errorMessage="لطفا یک ایمیل معتبر وارد کنید"
      />
      <Input
        label="رمزعبور"
        type="password"
        name="password"
        required
        minLength={6}
        errorMessage="رمز عبور حداقل باید ۶ کاراکتر باشد"
      />
      {supabaseState?.errors && (
        <p className="my-2 text-primary-700">{supabaseState.errors}</p>
      )}
      <SubmitButton
        disabled={pending}
        label={pending ? <Spinner color="default" /> : "ورود"}
        type="submit"
      />
    </form>
  );
};
export default LoginForm;
