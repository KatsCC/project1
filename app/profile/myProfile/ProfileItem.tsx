/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { UploadImage } from "./UploadImage";
import { signOut } from "@/auth";
import { userImage } from "./uploadDB";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import Link from "next/link";

export default function ProfileItem({
  session,
  src,
  rotate,
  name,
  upcom,
  past,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="w-full">
      <p className="font-bold text-2xl m-6 flex items-center border-b-2 border-gray-200 pb-6">
        <img
          src={src}
          alt="profile image"
          className=" w-12 h-12 rounded-full mr-4"
        />
        {name}
      </p>
      <p className="font-semibold ml-2">{rotate}</p>
      <div className="flex between mt-8">
        <div className="w-[45%] h-40 border-4 border-purple-400 rounded-2xl overflow-hidden mr-4">
          <Link href={"/profile"}>
            <div className="w-full bg-purple-400 text-white text-center p-3 font-bold text-xl">
              예정된 약속
            </div>
            <p className="w-full text-center mx-auto mt-7 text-3xl font-bold text-gray-800 h-full">
              {`${upcom} 건`}
            </p>
          </Link>
        </div>

        <div className="w-[45%] h-40 border-4 border-gray-400 rounded-2xl overflow-hidden">
          <Link href={"/profile/pastPlan"}>
            <div className="w-full bg-gray-400 text-white text-center p-3 font-bold text-xl">
              지난 약속
            </div>
            <p className="w-full text-center mx-auto mt-7 text-3xl font-bold text-gray-800 h-full">
              {`${past} 건`}
            </p>
          </Link>
        </div>
      </div>

      <button
        className="bg-blue-300 text-white font-semibold p-1 rounded-lg ml-[300px] mt-8"
        onClick={() => signOut()}
      >
        로그아웃
      </button>
      <button
        className="bg-green-300 text-white font-semibold p-1 rounded-lg ml-[10px] absolute top-0 mt-28 right-14"
        onClick={openModal}
      >
        정보수정
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
