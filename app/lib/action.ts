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
  const { userId, password } = {
    userId: formData.get("userId")?.toString(),
    password: formData.get("password")?.toString(),
  };
  try {
    await signIn("credentials", { userId, password });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
