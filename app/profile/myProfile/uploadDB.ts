"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function uploadDB(formData: FormData) {
  const { user_id, image } = {
    user_id: formData.get("user_id")?.toString(),
    image: formData.get("image")?.toString(),
  };

  try {
    await sql`INSERT INTO user_image (user_id, image) VALUES (${user_id},${image}) ON CONFLICT (user_id) DO UPDATE SET image = ${image};
`;
  } catch (error) {
    throw new Error("Database Error: Failed to Upload.1");
  }
  redirect("/profile/myProfile");
}

export async function userImage(user_id: string) {
  try {
    const image = await sql`SELECT * FROM user_image WHERE user_id=${user_id} `;
    return image.rows[0].image;
  } catch (error) {
    return "";
  }
}
export async function userName(user_id: string) {
  try {
    const name = await sql`SELECT * FROM users WHERE id=${user_id} `;
    return name.rows[0].name;
  } catch (error) {
    return "";
  }
}
export async function userRotate(user_id: string) {
  try {
    const image = await sql`SELECT * FROM users WHERE id=${user_id} `;
    return image.rows[0].rotate;
  } catch (error) {
    return "";
  }
}

export async function updateData(formData: FormData) {
  const { user_id, name, rotate, image } = {
    user_id: formData.get("user_id")?.toString(),
    name: formData.get("name")?.toString(),
    rotate: formData.get("rotate")?.toString(),
    image: formData.get("image")?.toString(),
  };
  try {
    name
      ? await sql`UPDATE users SET name = ${name} WHERE id = ${user_id}`
      : "";
    image
      ? await sql`INSERT INTO user_image (user_id, image) VALUES (${user_id},${image}) ON CONFLICT (user_id) DO UPDATE SET image = ${image};`
      : "";
    rotate
      ? await sql`UPDATE users SET rotate = ${rotate} WHERE id = ${user_id}`
      : "";
  } catch (error) {
    throw new Error(name);
  }
  redirect("/profile/myProfile");
}
