/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { deleteFriend } from "./controlFriend";

export default function FriendCom({ friend }: { friend: any }) {
  const [selectedFriend, setSelectedFriend] = useState("");
  const [selectedFriendId, setSelectedFriendId] = useState("");

  return (
    <ul>
      {friend.map((val: any, index: any) => (
        <div
          key={index}
          onClick={() => {
            setSelectedFriend(val.name);
            setSelectedFriendId(val.id);
          }}
        >
          <li className="flex items-center mb-2 pt-2 pl-4 border-t border-gray-200 cursor-pointer">
            <img
              src={val.image}
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
            <span className="ml-2 font-semibold">{val.name}</span>
          </li>
        </div>
      ))}
      {selectedFriend && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-[350px]">
            <h2 className="text-lg font-semibold mb-4">{selectedFriend}</h2>
            <p className="mb-6">{selectedFriend}에 대한 설명입니다.</p>
            <button
              onClick={async () => {
                await deleteFriend(selectedFriendId);
              }}
              className="mt-4 py-2 px-4 bg-purple-500 text-white rounded-lg"
            >
              친구 삭제
            </button>
            <button
              onClick={() => setSelectedFriend("")}
              className="mt-4 py-2 px-4 bg-purple-500 text-white rounded-lg ml-[145px]"
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </ul>
  );
}
