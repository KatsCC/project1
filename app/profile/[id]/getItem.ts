"use server";

import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function getItem(id: number | string | undefined) {
  try {
    const plans = await sql`SELECT * FROM plan WHERE id=${id}`;
    return plans.rows[0];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch DB");
  }
}

export async function getComment(id: number | string | undefined) {
  try {
    const comment = await sql`SELECT * FROM comment WHERE plan_id=${id}`;
    return comment.rows;
  } catch (error) {
    console.error(error);
    return "";
  }
}

export async function getName(id: number | string | undefined) {
  try {
    const comment = await sql`SELECT * FROM users WHERE id=${id}`;

    return comment.rows[0].name;
  } catch (error) {
    console.error(error);
    return "";
  }
}

export async function getImage(id: number | string | undefined) {
  try {
    const comment = await sql`SELECT * FROM user_image WHERE user_id=${id}`;
    return comment.rows[0].image;
  } catch (error) {
    console.error(error);

    return "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCADGAMcDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD7rooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoorptB8Pqqrc3S5Y8pGe3uaAMvT9Bur8B9vlRH+N+/0FbUHhO1jA815JT9dorcooAzP+Eb0/H+oP/fbf41Wn8J2sgPlPJEfruFblFAHE6hoN1YAvt82Ifxp2+orNr0iud17w+rK1zarhhy8Y7+4oA5miiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKANbw5povrzzHGYouT7nsK7Ksrw3biDS0bHzSEuf5D9BWrQAUUUUAFFFFABRRRQBxviPTRY3nmIMRS8j2PcVk12fiS3E+lu2PmjIcfyP6GuMoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDvtLAGm2uP+eS/yq1WdoEwm0mA91G0/ga0aACiiigAooooAKKKKAKuqAHTbrP8Azyb+VcDXb6/MIdJnPdhtH4muIoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigDf8KX4jme1c4EnzJ9e4/L+VdTXnCO0bq6naynII7V2ujawmpQhWIW4UfMvr7igDSooooAKKKKACiis3WdYTTYSqkNcMPlX09zQBkeK78STJaociP5n+vYfl/OsCld2kdnY7mY5JPekoAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAp0cjwyK6MUdeQynmm0UAdJp/ivgJdpz/AM9EH8xW1BqVrcgGO4jb2zg/ka4GigD0fcMZzxVafUrW2BMlxGvtnJ/IVwNFAHSah4r4KWic/wDPRx/IVzskjzSM7sXduSzHmm0UAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRSqpdgqgsx4AHU0AJU1rZz3jbYYmkPfA4H41vaX4XyBLefURA/zNdDHEkKBI0VFHRVGBQBzNt4RlcAzzLH/sqNxrQj8K2SfeMkn1bH8hWzRQBmDw3p4/5YZ/4G3+NL/wjunf8+//AI+3+NaVFAGb/wAI7p3/AD7/APj7f40f8I7p3/Pv/wCPt/jWlRQBmHw3p5/5YY/4G3+NQyeFbJ/umSP6Nn+YrZooA5a58IyoCYJlk/2WG01jXVnPZttmiaM9sjg/jXoVMkiSZCkiK6nqrDIoA86orpNU8L4Bls/qYif5GucZSjFWBVhwQeooASiiigAooooAKKKKACiiigAooooAVVaRgqgszHAA712GiaGmnoJZQGuSPwX2FVPDGlBUF5KPmbiMHsPWuioAKKKKACiiigAooooAKKKKACiiigAooooAKyNb0NNQQyxALcgfg3sa16KAPOGVo2KsCrKcEHtSV03ifSgyG8iHzLxIB3HrXM0AFFFFABRRRQAUUUUAFWtMszqF7FD/AAk5Y+gHWqtdL4RtRtnuCOSdg/mf6UAdEqhFCqMKBgAUtFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAjKHUqwypGCDXBalZnT72SE/dByp9Qeld9XOeLrUbYLgDkHYf5j+tAHNUUUUAFFFFABRRRQAV23h+LytJg45bLH8T/hXE132ljbptr/ANclP6UAWqKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigArN8QRebpM/HK4Yfgf8K0qq6oN2m3X/XJj+lAHA0UUUAFFFFABRRRQAV3+m/8g20/65J/6CK4Cu/03/kG2n/XJP8A0EUAWaKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqtqX/INu/wDrk/8A6Cas1W1L/kG3f/XJ/wD0E0AcBRRRQAUUUUAFFFFABXf6b/yDbT/rkn/oIoooAs0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABVbUv+Qbd/8AXJ//AEE0UUAcBRRRQAUUUUAf/9k=";
  }
}

export async function submitComment(formData: FormData) {
  const { user_id, plan_id, text } = {
    user_id: formData.get("user_id")?.toString(),
    plan_id: formData.get("plan_id")?.toString(),
    text: formData.get("text")?.toString(),
  };
  try {
    await sql`INSERT INTO comment (user_id, plan_id, text) VALUES (${user_id}, ${plan_id}, ${text})`;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch DB");
  }
  redirect(`/profile/${plan_id}`);
}

export async function attend(
  user_id: number | string,
  plan_id: number | string,
) {
  try {
    await sql`WITH upsert AS (
    UPDATE attend
    SET attend = NOT attend
    WHERE user_id = ${user_id} AND plan_id = ${plan_id}
    RETURNING * )
INSERT INTO attend (plan_id, user_id, attend)
SELECT ${plan_id}, ${user_id}, TRUE
WHERE NOT EXISTS (SELECT 1 FROM upsert);`;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch DB");
  }
  redirect(`/profile/${plan_id}`);
}

export async function getAttendCount(plan_id: number | string) {
  try {
    const people =
      await sql`SELECT * FROM attend WHERE plan_id=${plan_id} AND attend=TRUE`;
    return people.rows;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch DB");
  }
}
