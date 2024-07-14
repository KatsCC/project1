"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    await signIn("credentials", {
      redirect: true,
      userId: data.get("userId"),
      password: data.get("password"),
      callbackUrl: "/profile",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex items-center justify-center bg-gray-100"
    >
      <input type="userId" name="userId" placeholder="userId" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}
