/* eslint-disable @next/next/no-img-element */
import { auth, signOut } from "@/auth";
import ProfileItem from "./ProfileItem";
import { UploadImage } from "./UploadImage";
import { userImage, userName, userRotate } from "./uploadDB";
import { getPlan } from "../getPlan";

export default async function myProfile() {
  const session: any = await auth();
  const image = await userImage(session.user.id);
  const rotate = await userRotate(session.user.id);
  const name = await userName(session.user.id);
  const plans = await getPlan(session?.user?.id as string);
  const upcom = plans.filter((plan, idx) => {
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
  const past = plans.filter((plan, idx) => {
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
    <div className="h-screen bg-gray-200">
      <div className="bg-white flex text-center font-bold border-b border-gray-300 pb-4 shadow">
        <h2 className="m-auto mt-6 text-2xl ">내 정보</h2>
      </div>

      <div className="w-[420px] bg-white mx-auto border border-gray-200 rounded-xl flex mt-2 pb-8 pl-4">
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
