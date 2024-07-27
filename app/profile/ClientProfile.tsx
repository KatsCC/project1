"use client";

import { signOut } from "@/auth";
import { Session } from "next-auth";

export default function ClientProfile({ session }: any) {
  return (
    <div>
      <h1>Welcome, {session.user?.name}!</h1>
      <p>Email: {session.user?.email}</p>
      <p>User ID: {session.user?.id}</p>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
