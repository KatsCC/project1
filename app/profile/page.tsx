import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (session) {
    return <div>Good</div>;
  } else {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Email</p>
      </div>
    );
  }
}
