"use server";

import { createClient } from "@/utils/supabase/server";

export async function signup(_: any, formData: FormData) {
  const supabase = await createClient();

  const formValues = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signUp(formValues);

  if (error) {
    return {
      errors: error?.message,
    };
  }

  return {
    success: "برای تکمیل ثبت نام ایمیل خود را تایید کنید",
  };
}
