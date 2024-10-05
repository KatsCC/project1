"use server";

import { signIn } from "@/auth";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";

interface Data {
  userId: string;
  name: string;
  password: string;
}

export async function createUser(formData: FormData) {
  const { userId, name, password }: Data = {
    userId: formData.get("userId")?.toString() || "",
    name: formData.get("name")?.toString() || "",
    password: formData.get("password")?.toString() || "",
  };
  const hashedPassword: string = await bcrypt.hash(password, 10);
  try {
    await sql`INSERT INTO users (email, name, password) VALUES (${userId}, ${name}, ${hashedPassword})`;
  } catch (error) {
    return {
      message: error,
    };
  }
  redirect("/login");
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", formData);
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
