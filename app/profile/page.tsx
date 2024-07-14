import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h1>Welcome</h1>
      <p>Email</p>
    </div>
  );
}
