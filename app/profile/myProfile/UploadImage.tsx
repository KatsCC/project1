/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export function UploadImage({ session }: any) {
  const [imageBase64, setImageBase64] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      // 파일 읽기 완료 핸들러
      reader.onloadend = () => {
        if (reader.result) {
          // 결과가 Base64 데이터 URL로 변환됨
          setImageBase64(reader.result as string);
        }
      };

      // 파일을 Base64 데이터 URL로 읽기 시작
      reader.readAsDataURL(file);
    }
  };
  // const formData = new FormData();
  // formData.append("image", selectedImage as any);
  // formData.append("user_id", id);

  return (
    <div className="mb-4">
      <h1>프로필 사진 수정</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="bg-white"
      />
      {imageBase64 ? (
        <div className="mt-2">
          <img
            src={imageBase64}
            alt="Uploaded Preview"
            className="w-12 h-12 rounded-full"
          />
          <input className="hidden" name="image" value={imageBase64} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
