"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function deleteFriend(friend_id: string) {
  try {
    await sql`DELETE FROM friends WHERE friend_id = ${friend_id}`;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
  redirect("friendList");
}

export async function addFriend(formData: FormData) {
  const { friend_email, user_id } = {
    friend_email: formData.get("friend_email")?.toString(),
    user_id: formData.get("user_id")?.toString(),
  };
  try {
    const friend_id =
      await sql`SELECT * FROM users WHERE email=${friend_email} `;
    await sql`INSERT INTO friends (user_id, friend_id) VALUES (${user_id}, ${friend_id.rows[0].id})`;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
  redirect("friendList");
}

export async function getFriendImage(id: any) {
  try {
    const image = await sql`SELECT * FROM user_image WHERE user_id=${id}`;
    return image.rows[0].image;
  } catch (error) {
    return "11";
  }
}
