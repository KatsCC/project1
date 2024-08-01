"use client";

import Link from "next/link";
import { useState } from "react";
import PlanList from "../PlanList";

export default function FilteredList({ regions, plans }: any) {
  const [selectedRegion, setSelectedRegion] = useState("");
  return (
    <div className="mb-32">
      <div className="bg-white pt-8 pb-6 rounded-xl shadow-md w-full max-w-md  mt-12 mx-auto">
        <div className="flex justify-center mb-4">
          <select
            className="p-2 border-2 border-gray-400 rounded-md"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            <option value="">전체 지역</option>
            {regions.map((region: string, idx: number) => (
              <option key={idx} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        {selectedRegion &&
          plans.map((val: any, idx: number) => {
            if (val.address.trim().split(" ")[0] === selectedRegion)
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
        {!selectedRegion &&
          plans
            .filter((plan: any) => {
              const now = new Date();
              const planDate = new Date(
                plan.year,
                plan.month - 1,
                plan.day,
                plan.hour,
                plan.minute
              );
              return planDate >= now;
            })
            .map((val: any, idx: number) => {
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
      </div>
    </div>
  );
}
