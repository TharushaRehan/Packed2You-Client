"use server";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const actionLoginUser = async (email: string, password: string) => {
  const supabase = createRouteHandlerClient({ cookies });

  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return response;
};

export const actionSignUpUser = async (email: string, password: string) => {
  const supabase = createRouteHandlerClient({ cookies });

  const response = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      //emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}api/auth/callback`,
    },
  });

  return response;
};
