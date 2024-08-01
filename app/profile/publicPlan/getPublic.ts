import { sql } from "@vercel/postgres";

export async function getPublicPlan(user_id: string) {
  try {
    const plans = await sql`SELECT * FROM plan WHERE post_all='on'`;
    return plans.rows;
  } catch (error) {
    throw new Error("Failed to fetch user.");
  }
}
