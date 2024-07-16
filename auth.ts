import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import type { User } from "@/app/lib/definitions";
import bcrypt from "bcrypt";

interface Userd {
  id: string;
  userid: string;
  name: string;
  password: string;
}

async function getUser(userid: string): Promise<Userd | undefined> {
  try {
    const user =
      await sql<Userd>`SELECT * FROM userdata WHERE userid=${userid}`;

    return user.rows[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ userid: z.string(), password: z.string() })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { userid, password } = parsedCredentials.data;
          const user = await getUser(userid);
          if (!user) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }
        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
