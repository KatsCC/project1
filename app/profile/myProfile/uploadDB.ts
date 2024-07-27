"use server";

import { sql } from "@vercel/postgres";
import fs from "fs";

export async function uploadDB(formData: FormData) {
  const { user_id, image } = {
    user_id: formData.get("user_id")?.toString(),
    image: formData.get("image")?.toString(),
  };

  try {
    await sql`INSERT INTO user_image (user_id, image) VALUES (${user_id},${image})`;
  } catch (error) {
    return {
      message: "Database Error: Failed to Upload.1",
    };
  }
}
