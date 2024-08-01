/* eslint-disable @next/next/no-img-element */
import { Session } from "next-auth";
import { getComment, getImage, getName } from "./getItem";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  Key,
} from "react";
import SubmitComment from "./SubmitComment";

export default async function Comment({
  id,
  session,
}: {
  id: string;
  session: Session | null;
}) {
  const comment = await getComment(id);

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex items-center space-x-2">
        <SubmitComment user_id={session?.user?.id} id={id}></SubmitComment>
      </div>
      <div className="flex flex-col space-y-2">
        {comment &&
          comment.map(async (val, idx) => {
            const name = await getName(val.user_id);
            const src = await getImage(val.user_id);

            return (
              <div
                key={idx}
                className="bg-gray-100 p-2 rounded-md flex items-center"
              >
                <img src={src} alt="11" className="w-8 h-8 rounded-full" />
                <p className="pl-1 text-gray-700 font-bold">{`${name} : `}</p>
                <p className="pl-1 text-gray-700 ">{` ${val.text}`}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
