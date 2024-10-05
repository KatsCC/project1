import { sql } from "@vercel/postgres";

export async function getPlan(user_id: string) {
  try {
    const plans =
      await sql`SELECT * FROM plan WHERE friend_id @> ARRAY[${user_id}]::uuid[] OR user_id = ${user_id}::uuid;`;
    return plans.rows;
  } catch (error) {
    console.error(error);

    throw new Error("Failed to fetch user.");
  }
}
