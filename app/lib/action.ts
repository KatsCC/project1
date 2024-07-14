"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

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
    await sql`INSERT INTO userData (userId, name, password) VALUES (${userId}, ${name}, ${password})`;
  } catch (error) {
    return {
      message: "Database Error: Failed to Create User.",
    };
  }
  revalidatePath("/signup");
  redirect("/login");
}
