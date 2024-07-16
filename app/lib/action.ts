"use server";

import { signIn } from "@/auth";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { AuthError } from "next-auth";

const FormSchema = z.object({
  userId: z.string(),
  name: z.string(),
  password: z.string(),
});

export async function createUser(formData: FormData) {
  const { userId, name, password } = {
    userId: formData.get("userId")?.toString(),
    name: formData.get("name")?.toString(),
    password: formData.get("password")?.toString(),
  };

  try {
    await sql`INSERT INTO userdata (userId, name, password) VALUES (${userId}, ${name}, ${password})`;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create User.",
    };
  }
  revalidatePath("/signup");
  redirect("/login");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    const res: any = await signIn("credentials", {
      ...Object.fromEntries(formData),
    });
    if (!res.ok) {
      throw new Error("Sign in failed.");
    }
  } catch (error) {
    throw new Error("Sign in failed.");
  }
}
