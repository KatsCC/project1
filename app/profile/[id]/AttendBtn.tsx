"use client";

import { attend } from "./getItem";

export default function AttendBtn({
  user_id,
  plan_id,
}: {
  user_id: string | number;
  plan_id: string | number;
}) {
  return (
    <>
      <button
        className="bg-purple-500 text-white p-1 rounded-lg font-semibold mr-2 min-w-[44px]"
        onClick={() => attend(user_id, plan_id)}
      >
        참여!
      </button>
    </>
  );
}
