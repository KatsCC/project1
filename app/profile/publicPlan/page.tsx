/* eslint-disable @next/next/no-img-element */
"use server";

import { auth } from "@/auth";
import { getPublicPlan } from "./getPublic";
import Link from "next/link";
import PlanList from "../PlanList";
import ScrollBtn from "../ScrollBtn";
import FilteredList from "./FilteredList";
import { getFriendImage } from "../friendList/controlFriend";
import { getName } from "../[id]/getItem";
import { mapToPlan, Plan } from "../page";

export default async function myProfile() {
  const session = await auth();
  const queryResult = await getPublicPlan();
  const plans = queryResult.map(mapToPlan);

  const regions = [
    ...new Set(plans.map((plan) => plan.address.trim().split(" ")[0])),
  ];

  const imagePromises = plans.map(async (val: Plan) => {
    const src = await getFriendImage(val.user_id);
    return src;
  });
  const namePromises = plans.map(async (val: Plan) => {
    const src = await getName(val.user_id);
    return src;
  });

  const imageSrc = await Promise.all(imagePromises);
  const names = await Promise.all(namePromises);

  const plansData = plans.map((val: Plan, idx: number) => ({
    ...val,
    name: names[idx] || "none",
    image: imageSrc[idx] || "none",
  }));

  return (
    <div className="h-full-dvh">
      <div className="bg-gray-200 pb-8">
        <div className="flex justify-between border-b border-gray-300 p-5 shadow-lg pl-6 pr-6 bg-white">
          <h1 className="text-2xl font-bold ">모두의 약속</h1>
          <Link href={"/profile/createPlan"} aria-label="새 게시글 작성">
            <svg
              width="33"
              height="33"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="28"
                height="28"
                rx="3"
                fill="#787880"
                fillOpacity="0.12"
              />
              <path
                d="M6.97754 14.0068C6.97754 14.3057 7.08268 14.5602 7.29297 14.7705C7.50326 14.9753 7.75505 15.0776 8.04834 15.0776H12.9375V19.9668C12.9375 20.2546 13.0399 20.5036 13.2446 20.7139C13.4494 20.9242 13.7012 21.0293 14 21.0293C14.2933 21.0293 14.5451 20.9242 14.7554 20.7139C14.9657 20.5036 15.0708 20.2546 15.0708 19.9668V15.0776H19.96C20.2477 15.0776 20.4967 14.9753 20.707 14.7705C20.9173 14.5602 21.0225 14.3057 21.0225 14.0068C21.0225 13.7135 20.9173 13.4618 20.707 13.2515C20.4967 13.0412 20.2477 12.936 19.96 12.936H15.0708V8.05518C15.0708 7.76188 14.9657 7.51009 14.7554 7.2998C14.5451 7.08952 14.2933 6.98438 14 6.98438C13.7012 6.98438 13.4494 7.08952 13.2446 7.2998C13.0399 7.51009 12.9375 7.76188 12.9375 8.05518V12.936H8.04834C7.75505 12.936 7.50326 13.0412 7.29297 13.2515C7.08268 13.4618 6.97754 13.7135 6.97754 14.0068Z"
                fill="#999999"
              />
            </svg>
          </Link>
        </div>
        <FilteredList regions={regions} plans={plansData}></FilteredList>
      </div>
      <ScrollBtn></ScrollBtn>
    </div>
  );
}
