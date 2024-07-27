import { sql } from "@vercel/postgres";

export async function tt() {
  try {
    const friend = await sql`SELECT * FROM user_image WHERE id=2`;

    return friend.rows[0].image;
  } catch (error) {
    return {
      message: "Database Error: Failed to Upload.1",
    };
  }
}
