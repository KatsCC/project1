/* eslint-disable @next/next/no-img-element */
import { auth } from "@/auth";
import Comment from "./Comment";
import { getImage, getItem, getName } from "./getItem";
import MapContainer from "./MapContainer";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const item = await getItem(id);
  const session = await auth();
  const image = await getImage(session?.user?.id as string);
  const name = await getName(session?.user?.id as string);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md mb-32 mt-12">
        <div className="flex items-center font-semibold border-b-2 border-gray-300 pb-3 mb-3 text-xl">
          <img
            src={image}
            alt="profileIMG"
            className="w-10 h-10 rounded-full mr-2"
          />
          {`${name}`}
        </div>
        <div className="flex flex-col h-full">
          <p className="text-gray-600 mb-2 pl-2">{`Date: ${item?.month}/${item?.day}, ${item?.year}`}</p>
          <p className="text-gray-600 mt-2 mb-4 pl-2">{`Time: ${
            String(item.hour).length === 1 ? "0" + item.hour : item.hour
          }:${
            String(item.minute).length === 1 ? "0" + item.minute : item.minute
          }`}</p>
          <h2 className="text-lg font-bold w-full flex-1 p-2 mt-1 mr-2">
            {`${item.address}`}
          </h2>
          <h2 className="text-lg font-bold w-full flex-1 p-2 mb-4 mr-2">
            {`${item.detailed_address}`}
          </h2>
        </div>
        <div className="p-2 w-48 rounded-lg overflow-hidden w-[100%] h-96">
          <div className="border border-gray-300 h-full w-full">
            <MapContainer
              lat={Number(item.lat)}
              lng={Number(item.lng)}
            ></MapContainer>
          </div>
        </div>
        <p className="text-lg font-semibold  w-full flex-1 p-3 mb-4 mr-2">
          {`${item.textfield}`}
        </p>
        <button className="bg-purple-500 text-white p-1 rounded-lg font-semibold">
          참여!
        </button>
        <span> #하마 등 2명이 참여한다고 합니다!</span>
        <p className="mt-6 mb-2 text-gray-700">댓글</p>
        <Comment id={id} session={session}></Comment>
      </div>
    </div>
  );
}
