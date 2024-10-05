/* eslint-disable @next/next/no-img-element */
"use client";

import { signOut } from "@/auth";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import Link from "next/link";
import { Session } from "next-auth";

interface ProfileItemProps {
  session: Session;
  src: string;
  rotate: string;
  name: string;
  upcom: number;
  past: number;
}

export default function ProfileItem({
  session,
  src,
  rotate,
  name,
  upcom,
  past,
}: ProfileItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full relative pb-16">
      <p className="font-bold text-2xl m-6 flex items-center border-b-2 border-gray-200 pb-6 justify-between">
        <span className="flex items-center">
          <img
            src={src}
            alt="profile image"
            className=" w-12 h-12 rounded-full mr-4"
          />
          {name}
        </span>
        <button
          className="bg-green-300 text-white font-semibold p-1 rounded-lg text-base"
          onClick={openModal}
        >
          정보수정
        </button>
      </p>
      <p className="font-semibold ml-2">{rotate}</p>
      <div className="flex between mt-8">
        <div className="w-[45%] h-40 border-4 border-purple-400 rounded-2xl overflow-hidden mr-4">
          <Link href={"/profile"}>
            <div className="w-full bg-purple-400 border-1 border-purple-400 text-white text-center p-3 font-bold text-xl">
              예정된 약속
            </div>
            <p className="w-full text-center mx-auto mt-7 text-3xl font-bold text-gray-800 h-full">
              {`${upcom} 건`}
            </p>
          </Link>
        </div>

        <div className="w-[45%] h-40 border-4 border-gray-400 rounded-2xl overflow-hidden">
          <Link href={"/profile/pastPlan"}>
            <div className="w-full bg-gray-400 border-1 border-gray-400 text-white text-center p-3 font-bold text-xl">
              지난 약속
            </div>
            <p className="w-full text-center mx-auto mt-7 text-3xl font-bold text-gray-800 h-full">
              {`${past} 건`}
            </p>
          </Link>
        </div>
      </div>

      <button
        className="bg-blue-300 text-white font-semibold p-1 rounded-lg  mt-8 absolute right-6"
        onClick={() => signOut()}
      >
        로그아웃
      </button>

      {isModalOpen && (
        <EditProfileModal
          session={session}
          closeModal={closeModal}
          name={name}
          rotate={rotate}
        />
      )}
    </div>
  );
}
