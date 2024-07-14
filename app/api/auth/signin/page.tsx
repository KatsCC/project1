"use client";

import { signIn } from "next-auth/react";

export default function SignIn() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    await signIn("credentials", {
      redirect: true,
      userId: data.get("userId"),
      password: data.get("password"),
      callbackUrl: "/profile",
    });
  };

  return (
    <form action={handleSubmit}>
      <input type="userId" name="userId" placeholder="userId" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}
