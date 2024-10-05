import { createUser } from "../lib/action";

export default function Signup() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-gray-100">
      <div className="w-[400px] bg-white shadow-md rounded-md overflow-hidden">
        <h2 className="mt-6 text-center text-2xl font-bold text-gray-900">
          회원가입
        </h2>
        <form className="px-6 py-8 space-y-6" action={createUser}>
          <div>
            <label
              htmlFor="name"
              className="font-semibold block text-sm font-medium leading-6 text-gray-900"
            >
              이름
            </label>
            <input
              id="name"
              name="name"
              type="name"
              required
              className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="userId"
              className="font-semibold block text-sm font-medium leading-6 text-gray-900"
            >
              이메일
            </label>
            <input
              id="userId"
              name="userId"
              type="email"
              required
              className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="font-semibold block text-sm font-medium leading-6 text-gray-900"
            >
              비밀번호
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="font-semibold block text-sm font-medium leading-6 text-gray-900"
            >
              비밀번호 확인
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none"
            />
          </div>
          <input type="checkbox" />
          <label className="text-sm"> 약관에 동의합니다</label>
          <br />
          <input type="checkbox" />
          <label className="text-sm"> 개인정보 보호 정책에 동의합니다</label>
          <div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold text-sm shadow-sm hover:bg-purple-500 focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 focus:outline-none"
            >
              가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
