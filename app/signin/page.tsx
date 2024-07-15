import { db } from "@vercel/postgres";

const client = await db.connect();
const result = await client.query("SELECT * FROM userdata WHERE userid = cat");

export default function Signin() {
  return (
    <div>
      <h1>Welcome {result.rows}</h1>
      <p>Email</p>
    </div>
  );
}
