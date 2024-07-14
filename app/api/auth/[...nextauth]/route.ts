import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "@vercel/postgres"; // Vercel Postgres 모듈에서 db를 가져옵니다.
import bcrypt from "bcrypt"; // 비밀번호 해시화를 위한 bcrypt 모듈을 사용합니다.

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        userId: { label: "User ID", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        const client = await db.connect();
        try {
          // 데이터베이스 연결

          // 사용자의 userId로 사용자 정보를 찾습니다.
          const result = await client.query(
            "SELECT * FROM userdata WHERE userId = $1",
            [credentials.userId]
          );

          const user = result.rows[0];

          // 사용자 정보가 존재하고 비밀번호가 일치하는지 확인합니다.
          if (
            user &&
            (await bcrypt.compare(credentials.password, user.password))
          ) {
            // 사용자가 존재하고 비밀번호가 일치하면 사용자 객체를 반환합니다.
            return { id: user.id, name: user.name, email: user.userId };
          } else {
            // 사용자 정보가 존재하지 않거나 비밀번호가 일치하지 않으면 null을 반환합니다.
            return null;
          }
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        } finally {
          await client.release(); // 데이터베이스 연결 해제
        }
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});

export { handler as GET, handler as POST };
