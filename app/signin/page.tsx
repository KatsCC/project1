import { db } from "@vercel/postgres";

const client = await db.connect();
console.log(client);

export default function Signin() {
  return (
    <div>
      <h1>Welcome</h1>
      <p>Email</p>
    </div>
  );
}
