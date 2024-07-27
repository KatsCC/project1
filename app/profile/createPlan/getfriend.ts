import { sql } from "@vercel/postgres";

export async function getFriend(user_id: string) {
  try {
    const friend = await sql`SELECT * FROM friends WHERE user_id=${user_id}`;

    const friendList: any = [];

    for (let i = 0; i < friend.rows.length; i++) {
      const name =
        await sql`SELECT * FROM users WHERE id=${friend.rows[i].friend_id}`;
      friendList.push({ name: name.rows[0].name, id: name.rows[0].id });
    }

    return friendList;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
