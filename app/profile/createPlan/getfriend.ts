import { sql } from "@vercel/postgres";

export interface Friend {
  name: string;
  id: string;
}

export async function getFriend(user_id: string): Promise<Friend[]> {
  try {
    const friend = await sql`SELECT * FROM friends WHERE user_id=${user_id}`;

    const friendList: Friend[] = [];

    for (let i = 0; i < friend.rows.length; i++) {
      const userId = friend.rows[i].friend_id;
      const name = await sql`SELECT name, id FROM users WHERE id=${userId}`;

      if (name.rows.length > 0) {
        friendList.push({ name: name.rows[0].name, id: name.rows[0].id });
      }
    }

    return friendList;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}
