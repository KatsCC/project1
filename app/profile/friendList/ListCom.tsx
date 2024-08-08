/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState } from "react";
import FriendCom from "./FriendCom";

export default function ListCom({ friend }: { friend: any }) {
  const [activeTab, setActiveTab] = useState("friends");

  return (
    <>
      <div className="relative flex bg-gray-300 h-12 rounded-lg ml-1 mr-1">
        <button
          onClick={() => setActiveTab("friends")}
          className={`w-1/2 py-2 z-10 flex items-center justify-center`}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
          >
            <path
              d="M8.49999 3.06572L10.2657 6.64286L14.2143 7.21658L11.3571 10.0017L12.0314 13.9343L8.49999 12.0783L4.96856 13.9343L5.64285 10.0017L2.78571 7.21658L6.73428 6.64286L8.49999 3.06572Z"
              stroke="#171A1F"
              strokeWidth="1.37143"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
          내 친구
        </button>
        <button
          onClick={() => setActiveTab("groups")}
          className={`w-1/2 py-2  flex items-center justify-center z-10 `}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1"
          >
            <path
              d="M9.64283 7.35714L11.9285 7.35714L11.9285 11.9286L7.35712 11.9286L7.35712 9.64285"
              stroke="#171A1F"
              strokeWidth="1.37143"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
            <path
              d="M9.64284 5.07143L5.07141 5.07143L5.07141 9.64286L9.64284 9.64286L9.64284 5.07143Z"
              stroke="#171A1F"
              strokeWidth="1.37143"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
            <path
              d="M14.7857 2.21428L2.21429 2.21428L2.21429 14.7857L14.7857 14.7857L14.7857 2.21428Z"
              stroke="#171A1F"
              strokeWidth="1.37143"
              strokeMiterlimit="10"
              strokeLinecap="square"
            />
          </svg>
          그룹
        </button>
        <div
          className={`absolute ml-2 mb-1 bottom-0 left-0 w-48 h-10 bg-white transition-transform duration-300 z-2 rounded-lg -translate-x-1 ${
            activeTab === "groups" ? "ml-6 transform translate-x-[188px]" : ""
          }`}
        ></div>
      </div>
      <div className="mt-6">
        {activeTab === "friends" ? (
          <FriendCom friend={friend}></FriendCom>
        ) : (
          <p>그룹</p>
        )}
      </div>
    </>
  );
}
