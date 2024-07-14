import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  console.log(session);

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome,</h1>
      <p>Email: </p>
    </div>
  );
}
