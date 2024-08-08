"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function getItem(id: number | string | undefined) {
  try {
    const plans = await sql`SELECT * FROM plan WHERE id=${id}`;
    return plans.rows[0];
  } catch (error) {
    throw new Error("Failed to fetch DB");
  }
}

export async function getComment(id: number | string | undefined) {
  try {
    const comment = await sql`SELECT * FROM comment WHERE plan_id=${id}`;
    return comment.rows;
  } catch (error) {
    return "";
  }
}

export async function getName(id: number | string | undefined) {
  try {
    const comment = await sql`SELECT * FROM users WHERE id=${id}`;

    return comment.rows[0].name;
  } catch (error) {
    return "";
  }
}

export async function getImage(id: number | string | undefined) {
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

export async function attend(
  user_id: number | string,
  plan_id: number | string
) {
  try {
    await sql`WITH upsert AS (
    UPDATE attend
    SET attend = NOT attend
    WHERE user_id = ${user_id} AND plan_id = ${plan_id}
    RETURNING * )
INSERT INTO attend (plan_id, user_id, attend)
SELECT ${plan_id}, ${user_id}, TRUE
WHERE NOT EXISTS (SELECT 1 FROM upsert);`;
  } catch (error) {
    throw new Error("Failed to fetch DB");
  }
  redirect(`/profile/${plan_id}`);
}

export async function getAttendCount(plan_id: number | string) {
  try {
    const people =
      await sql`SELECT * FROM attend WHERE plan_id=${plan_id} AND attend=TRUE`;
    return people.rows;
  } catch (error) {
    throw new Error("Failed to fetch DB");
  }
}
