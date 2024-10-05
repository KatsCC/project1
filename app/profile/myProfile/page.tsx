/* eslint-disable @next/next/no-img-element */
import { auth } from "@/auth";
import ProfileItem from "./ProfileItem";
import { userImage, userName, userRotate } from "./uploadDB";
import { getPlan } from "../getPlan";
import { Session } from "next-auth";

export default async function myProfile() {
  const session: Session | null = await auth();
  if (!session || !session.user || !session.user.id) {
    return;
  }
  const image = await userImage(session.user.id);
  const rotate = await userRotate(session.user.id);
  const name = await userName(session.user.id);
  const plans = await getPlan(session?.user?.id as string);
  const upcom = plans.filter((plan) => {
    const now = new Date();
    const planDate = new Date(
      plan.year,
      plan.month - 1,
      plan.day,
      plan.hour,
      plan.minute
    );
    return planDate >= now;
  }).length;
  const past = plans.filter((plan) => {
    const now = new Date();
    const planDate = new Date(
      plan.year,
      plan.month - 1,
      plan.day,
      plan.hour,
      plan.minute
    );
    return planDate < now;
  }).length;
  return (
    <div className="h-dvh bg-gray-200">
      <div className="bg-white flex text-center font-bold border-b border-gray-300 pb-4 shadow">
        <h2 className="m-auto mt-6 text-2xl ">내 정보</h2>
      </div>

      <div className="w-[100%] max-w-[420px] min-w-[323px] bg-white mx-auto border border-gray-200 rounded-xl flex mt-2 pb-8 pl-4">
        <ProfileItem
          session={session}
          src={image}
          rotate={rotate}
          name={name}
          upcom={upcom}
          past={past}
        ></ProfileItem>
      </div>
    </div>
  );
}
