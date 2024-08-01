import { useState } from "react";
import { UploadImage } from "./UploadImage";
import { updateData } from "./uploadDB";

export default function EditProfileModal({
  session,
  name,
  rotate,
  closeModal,
}: any) {
  const [names, setNames] = useState(name);
  const [location, setLocation] = useState(rotate); // 초기값 설정

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold mb-4">정보 수정</h2>
        <form action={updateData} onSubmit={() => closeModal()}>
          <input className="hidden" name="user_id" value={session.user.id} />
          <div className="mb-4">
            <label className="block text-gray-700">이름</label>
            <input
              name="name"
              type="text"
              value={names}
              onChange={(e) => setNames(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">거주 지역</label>
            <input
              type="text"
              name="rotate"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <UploadImage session={session}></UploadImage>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-500 text-white p-2 rounded mr-2"
            >
              취소
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              저장
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
