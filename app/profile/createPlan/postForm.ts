"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function postForm(formData: FormData) {
  const timetext = `${formData.get("month")}월 ${formData.get(
    "day"
  )}일 ${formData.get("hour")}시 ${formData.get("minute")}분 .${formData.get(
    "year"
  )}`;

  //   const created_at = new Date();
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
  }: any = {
    user_id: formData.get("user_id"),
    friend_id: formData.getAll("friend_id"),
    lat: formData.get("lat"),
    lng: formData.get("lng"),
    address: formData.get("address"),
    detailed_address: formData.get("detailed_address"),
    textfield: formData.get("textfield"),
    post_all: formData.get("post_all"),
    month: formData.get("month"),
    day: formData.get("day"),
    hour: formData.get("hour"),
    minute: formData.get("minute"),
    year: formData.get("year"),
  };

  try {
    await sql`INSERT INTO plan (user_id, friend_id, lat, lng, address, detailed_address, textfield, post_all, timetext, month, day, hour, minute, year) VALUES (${user_id}, ${friend_id}, ${lat},${lng}, ${address},${detailed_address}, ${textfield},${post_all},${timetext},${month},${day},${hour},${minute},${year})`;
    //await sql`INSERT INTO plan (user_id, friend_id, lat, lng) VALUES (${user_id}, ${friend_id}, ${lat},${lng})`;
  } catch (error) {
    return {
      message: "Database Error: Failed to Post Form.",
    };
  }
  redirect("/profile");
}
