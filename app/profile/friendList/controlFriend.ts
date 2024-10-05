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

export async function getFriendImage(id: string) {
  try {
    const image = await sql`SELECT * FROM user_image WHERE user_id=${id}`;
    return image.rows[0].image;
  } catch (error) {
    return "data:image/jpeg;base64,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";
  }
}
