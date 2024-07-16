import { User } from "next-auth";
import LoginForm from "../ui/login-form";
import { sql } from "@vercel/postgres";

async function getUser(userid: string): Promise<User | undefined> {
  try {
    const user =
      await sql<User>`SELECT * FROM userdata WHERE userid='digimon@kkk.com'`;
    console.log(user);
    console.log(user.rows[0]);
    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export default async function Login() {
  const user = await getUser("1");
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="sm:w-full sm:max-w-sm bg-white shadow-md rounded-md overflow-hidden">
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          Log in
        </h2>

        <LoginForm></LoginForm>
      </div>
      <p className="text-3xl">{user?.name}</p>
    </div>
  );
}
