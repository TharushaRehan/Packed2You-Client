"use server";

//import { validate } from "uuid";
import { eq } from "drizzle-orm";
import { users } from "../../../migrations/schema";
import db from "./db";
import { User } from "./supabase.types";

// export const getUserDetails = async (
//   userId: string
// ) => {
//   const isValid = validate(userId);
//   if (!isValid) return { data: null, error: "Error" };

//   try {
//     const results = await db.select().from(users).where(eq(users.id, userId))
//     return {
//       data: results,
//       error: null,
//     };
//   } catch (error) {
//     console.log(error);
//     return {
//       data: null,
//       error: "Error",
//     };
//   }
// };

export const addUserDetails = async (user: User) => {
  if (!user)
    return {
      data: null,
      error: "Error",
    };

  try {
    await db.insert(users).values(user);
    return {
      data: null,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      data: null,
      error: "Error",
    };
  }
};
