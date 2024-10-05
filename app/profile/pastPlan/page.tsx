import { auth } from "@/auth";
import { getPlan } from "../getPlan";
import Link from "next/link";
import PlanList from "../PlanList";
import ScrollBtn from "../ScrollBtn";
import { getFriendImage } from "../friendList/controlFriend";
import { getName } from "../[id]/getItem";
import { mapToPlan, Plan } from "../page";

export default async function pastPlan() {
  const session = await auth();
  const queryResult = await getPlan(session?.user?.id as string);
  const plans = queryResult.map(mapToPlan);

  const imagePromises = plans.map(async (val: Plan) => {
    const src = await getFriendImage(val.user_id);
    return src;
  });
  const namePromises = plans.map(async (val: Plan) => {
    const src = await getName(val.user_id);
    return src;
  });

  const imageSrc = await Promise.all(imagePromises);
  const names = await Promise.all(namePromises);

  const plansData = plans.map((val: Plan, idx: number) => ({
    ...val,
    name: names[idx] || "none",
    image: imageSrc[idx] || "none",
  }));

  return (
    <>
      <div className="h-full-dvh bg-gray-200 pb-[200px]">
        <div className="flex justify-between border-b border-gray-300 p-5 shadow-lg pl-6 pr-6 bg-white">
          <h1 className="text-2xl font-bold ">지난 약속</h1>
        </div>

        <ul className="bg-white pt-8 pb-6 pl-2 pr-2 rounded-xl shadow-md w-full max-w-md mt-12 mx-auto">
          {plansData
            .filter((plan, idx) => {
              const now = new Date();
              const planDate = new Date(
                plan.year,
                plan.month - 1,
                plan.day,
                plan.hour,
                plan.minute
              );
              return planDate < now;
            })
            .map((val, idx) => {
              return (
                <>
                  <li key={idx + 100} className="w-[100%] mx-auto ">
                    <Link href={`/profile/${val.id}`}>
                      <PlanList
                        image={val.image}
                        name={val.name}
                        lat={val.lat}
                        lng={val.lng}
                        address={val.address}
                        detailed_address={val.detailed_address}
                        textfield={val.textfield}
                        month={val.month}
                        day={val.day}
                        hour={val.hour}
                        minute={val.minute}
                        year={val.year}
                      ></PlanList>
                    </Link>
                  </li>
                </>
              );
            })}
        </ul>
      </div>
      <ScrollBtn></ScrollBtn>
    </>
  );
}
