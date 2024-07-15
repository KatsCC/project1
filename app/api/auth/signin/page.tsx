"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // 기본 제출 동작 방지

    const formData = new FormData(event.currentTarget);
    const userId = formData.get("userid") as string;
    const password = formData.get("password") as string;

    try {
      await signIn("credentials", {
        redirect: true,
        userId,
        password,
        callbackUrl: "/profile",
      });
    } catch (error) {
      console.error("Sign in error:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <input type="text" name="userid" placeholder="User ID" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}
