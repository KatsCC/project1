/* eslint-disable @next/next/no-img-element */
"use server";
import { getFriendImage } from "./controlFriend";

export default async function ImageSrc({ id }: any) {
  const image = await getFriendImage(id);
  return (
    <img
      src={image.toString()}
      alt="profile Image"
      className="w-12 h-12 rounded-full bg-gray-100 z-10"
    />
  );
}
