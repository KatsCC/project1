import { getSession, GetSessionParams } from "next-auth/react";

export default function Profile({ session }: any) {
  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome</h1>
      <p>Email: {session.userData.name}</p>
    </div>
  );
}

export async function getServerSideProps(
  context: GetSessionParams | undefined
) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/api/auth/signin",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
