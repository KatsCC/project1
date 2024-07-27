import { auth } from "@/auth";
import ProfileItem from "./ProfileItem";
import { UploadImage } from "./UploadImage";

export default async function myProfile() {
  const session = await auth();

  return (
    <div className="h-screen bg-white">
      <div className="flex text-center font-bold border-b border-gray-300 pb-6">
        <h2 className="m-auto mt-6 text-2xl">내 정보</h2>
      </div>
      <ProfileItem session={session}></ProfileItem>
    </div>
  );
}
