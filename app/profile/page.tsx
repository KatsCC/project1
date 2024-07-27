import { auth, signIn, signOut } from "@/auth";
import { Session } from "next-auth";
import ClientProfile from "./ClientProfile";
import { getSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";
import MapCont from "./MapCont";
import PlanList from "./PlanList";
import ScrollBtn from "./ScrollBtn";

export default async function Profile() {
  const session = await auth();

  return (
    <>
      <div className="min-h-screen bg-white ">
        <div className="flex justify-between border-b border-gray-300 p-5 shadow-lg pl-6 pr-6">
          <h1 className="text-2xl font-bold ">예정된 약속</h1>
          <Link href={"/profile/createPlan"}>
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
                fill-opacity="0.12"
              />
              <path
                d="M6.97754 14.0068C6.97754 14.3057 7.08268 14.5602 7.29297 14.7705C7.50326 14.9753 7.75505 15.0776 8.04834 15.0776H12.9375V19.9668C12.9375 20.2546 13.0399 20.5036 13.2446 20.7139C13.4494 20.9242 13.7012 21.0293 14 21.0293C14.2933 21.0293 14.5451 20.9242 14.7554 20.7139C14.9657 20.5036 15.0708 20.2546 15.0708 19.9668V15.0776H19.96C20.2477 15.0776 20.4967 14.9753 20.707 14.7705C20.9173 14.5602 21.0225 14.3057 21.0225 14.0068C21.0225 13.7135 20.9173 13.4618 20.707 13.2515C20.4967 13.0412 20.2477 12.936 19.96 12.936H15.0708V8.05518C15.0708 7.76188 14.9657 7.51009 14.7554 7.2998C14.5451 7.08952 14.2933 6.98438 14 6.98438C13.7012 6.98438 13.4494 7.08952 13.2446 7.2998C13.0399 7.51009 12.9375 7.76188 12.9375 8.05518V12.936H8.04834C7.75505 12.936 7.50326 13.0412 7.29297 13.2515C7.08268 13.4618 6.97754 13.7135 6.97754 14.0068Z"
                fill="#999999"
              />
            </svg>
          </Link>
        </div>

        {/* <ClientProfile session={session} /> */}

        <ul className="p-4 mb-24 mt-4">
          <li className="border border-gray-300 w-full h-40 rounded-lg flex overflow-hidden mb-3 shadow">
            <div className="flex flex-col h-full">
              <h2 className="text-lg font-bold overflow-hidden overflow-ellipsis whitespace-nowrap w-52 flex-1 p-2 mt-2">
                카페에서
                만나자!11111111111111111111111111111111111111111111111111111111111111111111111111111
              </h2>
              <p className="text-gray-600 mb-2 pl-2">Date: 8/11, 2024</p>
              <p className="text-gray-600 mt-2 mb-4 pl-2">Time: 10:00</p>
            </div>
            <div className="p-2 w-48 rounded-lg overflow-hidden w-[100%]">
              <div className="border border-gray-300 h-full w-full">
                <MapCont></MapCont>
              </div>
            </div>
          </li>
          <PlanList></PlanList>
          <PlanList></PlanList>
          <PlanList></PlanList>
          <PlanList></PlanList>
          <PlanList></PlanList>
          <PlanList></PlanList>
          <PlanList></PlanList>
          <PlanList></PlanList>
          <PlanList></PlanList>
        </ul>
      </div>
      <ScrollBtn></ScrollBtn>
    </>
  );
}
