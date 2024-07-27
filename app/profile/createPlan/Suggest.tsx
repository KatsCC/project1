import { getFriend } from "./getfriend";

export default async function Suggest({ session }: any) {
  const friends = await getFriend(session);

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="font-semibold">제안할 친구!</h1>

      {/* 선택 박스 */}
      {/* <select multiple style={{ width: "200px", height: "100px" }}>
        {friends.map((friend: any) => (
          <option key={friend.id} value={friend.name}>
            {friend.name}
          </option>
        ))}
      </select> */}
      <div className="max-h-24 overflow-y-auto mb-5">
        {friends.map((friend: any) => (
          <div key={friend.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={`friend-${friend.id}`}
              name="friend_id"
              value={friend.id}
              className="mr-2"
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
