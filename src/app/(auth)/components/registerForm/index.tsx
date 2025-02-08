"use client";

import { useActionState } from "react";
import { signup } from "../../register/actions";
import SubmitButton from "../submitButton";
import Input from "@/components/ui/input";
import { Spinner } from "@heroui/react";

const RegisterForm = () => {
  const [supabaseState, supabaseSignup, pending] = useActionState(
    signup,
    undefined
  );

  return (
    <form className="p-5 flex flex-col gap-2" action={supabaseSignup}>
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
        label={pending ? <Spinner color="default" /> : "ثبت نام"}
        type="submit"
      />
    </form>
  );
};
export default RegisterForm;
