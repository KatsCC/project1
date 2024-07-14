import { useSession, getSession, GetSessionParams } from "next-auth/react";

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

// 서버사이드 렌더링을 위해 세션 정보를 프리페치합니다.
// export async function getServerSideProps(
//   context: GetSessionParams | undefined
// ) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "api/auth/signin",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { session },
//   };
// }
