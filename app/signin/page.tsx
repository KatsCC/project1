import { db } from "@vercel/postgres";

export default function Signin() {
  const client = db.connect();
  console.log(client);
  return (
    <div>
      <h1>Welcome</h1>
      <p>Email</p>
    </div>
  );
}
