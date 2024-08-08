"use client";

import { useState } from "react";
import { addFriend } from "./controlFriend";

export default function AddFriend({ id }: { id: string | undefined }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className="bg-purple-600 text-white px-4 py-2 rounded-lg flex justify-center items-center"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-1"
        >
          <path
            d="M14.2857 6.85715L9.14287 6.85715L9.14287 1.71429L6.85715 1.71429L6.85715 6.85715L1.71429 6.85715L1.71429 9.14287L6.85715 9.14287L6.85715 14.2857L9.14287 14.2857L9.14287 9.14287L14.2857 9.14287L14.2857 6.85715Z"
            stroke="white"
            strokeWidth="1.37143"
            strokeMiterlimit="10"
            strokeLinecap="square"
          />
        </svg>
        친구 추가
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">친구 추가</h2>
            <form action={addFriend}>
              <textarea name="user_id" value={id} className="hidden"></textarea>
              <label className="block mb-2">
                이메일:
                <input
                  type="email"
                  name="friend_email"
                  className="border border-gray-300 p-2 w-full rounded-md"
                />
              </label>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-300 text-black px-4 py-2 rounded-lg mr-2"
                  onClick={() => handleCloseModal()}
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg"
                >
                  추가
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
