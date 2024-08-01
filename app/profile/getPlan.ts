import { sql } from "@vercel/postgres";

export async function getPlan(user_id: string) {
  try {
    const plans = await sql`SELECT * FROM plan WHERE user_id=${user_id}`;
    return plans.rows;
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
}
