import { auth } from "@/auth";
import Map from "./Map";
import TimeSelect from "./TimeSelect";
import Suggest from "./Suggest";
import { postForm } from "./postForm";

export default async function createPlan() {
  const session = await auth();

  //타임스탬프도 만들어야 한다.
  return (
    <div className="min-h-dvh flex items-center justify-center bg-gray-100">
      <form
        className="bg-white p-8 rounded shadow-md w-full max-w-md mb-32 mt-12"
        action={postForm}
      >
        <h2 className="text-2xl mb-6 text-center font-bold border-b border-gray-300 pb-4">
          약속 만들기!
        </h2>
        <textarea name="user_id" className="hidden" readOnly>
          {session?.user?.id}
        </textarea>
        <TimeSelect></TimeSelect>
        <Map></Map>
        <textarea
          className="w-full h-64 mb-4 mt-2 border border-gray-300 rounded-lg p-2 resize-none"
          placeholder="내용을 입력하기!"
          name="textfield"
        ></textarea>
        <Suggest session={session?.user?.id}></Suggest>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-500 transition duration-200"
        >
          약속 만들기
        </button>
      </form>
    </div>
  );
}
