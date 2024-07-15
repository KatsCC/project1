import { db } from "@vercel/postgres";
import { useEffect, useState } from "react";

export default function Signin() {
  const [client, setClient] = useState({}); // 클라이언트 상태 추가

  useEffect(() => {
    const connectToDatabase = async () => {
      try {
        const dbClient = await db.connect(); // 비동기 연결 함수 호출
        setClient(dbClient); // 클라이언트 상태 설정
        console.log(dbClient); // 연결된 클라이언트 출력
      } catch (error) {
        console.error("Failed to connect to database:", error);
        // 에러 처리 로직 추가
      }
    };

    connectToDatabase(); // useEffect 내에서 비동기 함수 호출
  }, []);

  return (
    <div>
      <h1>Welcome</h1>
      <p>Email</p>
    </div>
  );
}
