"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

export async function login(prevState: any, formData: FormData) {
  const supabase = await createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error, data: res } = await supabase.auth.signInWithPassword(data);

  console.log("error", error);
  console.log("res", res);
  if (error) {
    return {
      errors: error?.message,
    };
  }

  revalidatePath("/", "layout");
  redirect("/");
}
