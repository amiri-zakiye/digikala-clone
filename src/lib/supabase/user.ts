"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();

  return { data, error };
};

export const signOut = async () => {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();

  if(error){
    return { error };
  }

  redirect("/");
}