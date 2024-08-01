import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-purple-500">
      <div className="text-white animate-bounce font-bold text-5xl">
        <h1>Have</h1>
        <h1>PLANs</h1>
      </div>
      <Link href={"/login"}>
        <button className="text-xl text-white font-semibold border-2 border-purple-200 bg-purple-400 p-2 rounded-xl pl-20 pr-20 m-8 hover:bg-purple-500">
          로그인
        </button>
      </Link>
      <p className="text-gray-100 text-sm">아직 회원이 아니신가요?</p>
      <Link href={"signup"}>
        <button className="text-xl text-white font-semibold border-2 border-purple-200 bg-purple-400 p-2 rounded-xl pl-20 pr-20 hover:bg-purple-500">
          회원가입하기
        </button>
      </Link>
    </main>
  );
}
