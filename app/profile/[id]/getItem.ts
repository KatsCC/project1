"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function getItem(id: number | string) {
  try {
    const plans = await sql`SELECT * FROM plan WHERE id=${id}`;
    return plans.rows[0];
  } catch (error) {
    throw new Error("Failed to fetch DB");
  }
}

export async function getComment(id: number | string) {
  try {
    const comment = await sql`SELECT * FROM comment WHERE plan_id=${id}`;
    return comment.rows;
  } catch (error) {
    return "";
  }
}

export async function getName(id: number | string) {
  try {
    const comment = await sql`SELECT * FROM users WHERE id=${id}`;

    return comment.rows[0].name;
  } catch (error) {
    return "";
  }
}

export async function getImage(id: number | string) {
  try {
    const comment = await sql`SELECT * FROM user_image WHERE user_id=${id}`;
    return comment.rows[0].image;
  } catch (error) {
    return "";
  }
}

export async function submitComment(formData: FormData) {
  const { user_id, plan_id, text } = {
    user_id: formData.get("user_id")?.toString(),
    plan_id: formData.get("plan_id")?.toString(),
    text: formData.get("text")?.toString(),
  };
  try {
    await sql`INSERT INTO comment (user_id, plan_id, text) VALUES (${user_id}, ${plan_id}, ${text})`;
  } catch (error) {
    throw new Error("Failed to fetch DB");
  }
  redirect(`/profile/${plan_id}`);
}
