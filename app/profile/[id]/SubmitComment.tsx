"use client";
import { useState } from "react";
import { submitComment } from "./getItem";

export default function SubmitComment({ user_id, id }: any) {
  const [text, setText] = useState("");
  return (
    <form action={submitComment} className="flex" onSubmit={() => setText("")}>
      <textarea className="hidden" name="user_id" value={user_id} />
      <textarea className="hidden" name="plan_id" value={id} />
      <input
        name="text"
        type="text"
        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-80"
        placeholder="댓글을 입력하기!"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-purple-500 text-white p-2 rounded-md font-semibold hover:bg-purple-400 ml-2 "
      >
        등록
      </button>
    </form>
  );
}
