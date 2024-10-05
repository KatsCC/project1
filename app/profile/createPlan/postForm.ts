"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

interface PostData {
  user_id: string;
  friend_id: string[] | null; // 배열이 null일 수 있도록 설정
  lat: string | number;
  lng: string | number;
  address: string;
  detailed_address: string;
  textfield: string;
  post_all: "on" | null;
  month: string | number;
  day: string | number;
  hour: string | number;
  minute: string | number;
  year: string | number;
}

export async function postForm(formData: FormData) {
  const timetext = `${formData.get("month")}월 ${formData.get(
    "day",
  )}일 ${formData.get("hour")}시 ${formData.get("minute")}분 .${formData.get(
    "year",
  )}`;

  const {
    user_id,
    friend_id,
    lat,
    lng,
    address,
    detailed_address,
    textfield,
    post_all,
    month,
    day,
    hour,
    minute,
    year,
  }: PostData = {
    user_id: formData.get("user_id") as string,
    friend_id: formData.getAll("friend_id") as string[] | null,
    lat: formData.get("lat") as string | number,
    lng: formData.get("lng") as string | number,
    address: formData.get("address") as string,
    detailed_address: formData.get("detailed_address") as string,
    textfield: formData.get("textfield") as string,
    post_all: formData.get("post_all") as "on" | null,
    month: formData.get("month") as string | number,
    day: formData.get("day") as string | number,
    hour: formData.get("hour") as string | number,
    minute: formData.get("minute") as string | number,
    year: formData.get("year") as string | number,
  };

  try {
    // friend_id를 JSON 문자열로 변환
    const friendIds =
      friend_id && friend_id.length > 0 ? JSON.stringify(friend_id) : null;

    await sql`INSERT INTO plan (user_id, friend_id, lat, lng, address, detailed_address, textfield, post_all, timetext, month, day, hour, minute, year) VALUES (${user_id}, ${friendIds}, ${lat}, ${lng}, ${address}, ${detailed_address}, ${textfield}, ${post_all}, ${timetext}, ${month}, ${day}, ${hour}, ${minute}, ${year})`;
  } catch (error) {
    console.error(error);
    return {
      message: "Database Error: Failed to Post Form.",
    };
  }
  redirect("/profile");
}
