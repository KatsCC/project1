"use client";

import Image from "next/image";
import { UploadImage } from "./UploadImage";

export default function ProfileItem({ session }: any) {
  return (
    <>
      <p className="font-bold text-2xl m-6">{session.user.name}</p>
      <ul>
        <li>
          <UploadImage session={session}></UploadImage>
        </li>
      </ul>
    </>
  );
}
