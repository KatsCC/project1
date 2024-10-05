import { Session } from "next-auth";
import { getFriend } from "./getfriend";

interface Friend {
  name: string;
  id: string;
}
interface SuggestProps {
  session: Session | null;
}

export default async function Suggest({ session }: SuggestProps) {
  let friends: Friend[] = [];

  if (session?.user?.id) {
    friends = await getFriend(session.user.id); // user.id가 string이라고 가정
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="font-semibold">제안할 친구!</h1>
      <div className="max-h-24 overflow-y-auto mb-5">
        {friends.map((friend: Friend) => (
          <div key={friend.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`friend-${friend.id}`}
              name="friend_id"
              value={friend.id}
              className="mr-2"
              aria-label={friend.name}
            />
            <label htmlFor={`friend-${friend.id}`} className="text-lg">
              {friend.name}
            </label>
          </div>
        ))}

        <div className="flex items-center mb-2">
          <input type="checkbox" name="post_all" value="on" className="mr-2" />
          <label className="text-lg">모두에게 게시하기!</label>
        </div>
      </div>
    </div>
  );
}
