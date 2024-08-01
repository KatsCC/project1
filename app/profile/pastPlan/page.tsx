import { auth } from "@/auth";
import { getPlan } from "../getPlan";
import Link from "next/link";
import PlanList from "../PlanList";
import ScrollBtn from "../ScrollBtn";

export default async function pastPlan() {
  const session = await auth();
  const plans = await getPlan(session?.user?.id as string);

  return (
    <>
      <div className="min-h-screen bg-gray-200 ">
        <div className="flex justify-between border-b border-gray-300 p-5 shadow-lg pl-6 pr-6 bg-white">
          <h1 className="text-2xl font-bold ">지난 약속</h1>
        </div>

        <ul className="bg-white pt-8 pb-6 rounded-xl shadow-md w-full max-w-md mb-32 mt-12 mx-auto">
          {plans
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
                  <div key={idx + 100} className="w-[420px] mx-auto">
                    <Link href={`/profile/${val.id}`}>
                      <PlanList
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
                  </div>
                </>
              );
            })}
        </ul>
      </div>
      <ScrollBtn></ScrollBtn>
    </>
  );
}
