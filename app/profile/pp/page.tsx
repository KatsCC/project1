/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

export default function Home() {
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

  return (
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
        </div>
      ) : (
        <p>No image uploaded</p>
      )}
    </div>
  );
}
