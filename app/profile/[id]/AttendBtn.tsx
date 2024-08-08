"use client";

import { attend } from "./getItem";

export default function AttendBtn({
  user_id,
  plan_id,
}: {
  user_id: any;
  plan_id: string | number;
}) {
  return (
    <>
      <button
        className="bg-purple-500 text-white p-1 rounded-lg font-semibold mr-2"
        onClick={() => attend(user_id as any, plan_id)}
      >
        참여!
      </button>
    </>
  );
}
