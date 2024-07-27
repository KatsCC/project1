/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { uploadDB } from "./uploadDB";
import { sql } from "@vercel/postgres";

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
    <form action={uploadDB}>
      <div>
        <h1>Upload an Image</h1>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {imageBase64 ? (
          <div>
            <h2>Preview:</h2>
            <img
              src={imageBase64}
              alt="Uploaded Preview"
              style={{ maxWidth: "100%", height: "auto" }}
            />
            <input name="image" value={imageBase64} />
            <input name="user_id" value={session.user.id} />
            <button type="submit">제출</button>
          </div>
        ) : (
          <p>No image uploaded</p>
        )}
      </div>
    </form>
  );
}
