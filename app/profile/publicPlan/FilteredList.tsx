/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import PlanList from "../PlanList";

export default function FilteredList({ regions, plans }: any) {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [page, setPage] = useState(1);
  const [displayedPlans, setDisplayedPlans] = useState<any[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    loadPlans();
  }, [page, selectedRegion]);

  const loadPlans = useCallback(() => {
    const filteredPlans = plans
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
      .filter((plan: any) => {
        return selectedRegion
          ? plan.address.trim().split(" ")[0] === selectedRegion
          : true;
      })
      .slice(0, page * 5);

    setDisplayedPlans(filteredPlans);
  }, [page, selectedRegion, plans]);

  const lastPlanElementRef = useCallback((node: any) => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (node) observerRef.current.observe(node);
  }, []);

  return (
    <div className="mb-32">
      <div className="bg-white pt-8 pb-6 rounded-xl shadow-md w-full max-w-md mt-12 mx-auto">
        <div className="flex justify-center mb-4">
          <select
            className="p-2 border-2 border-gray-400 rounded-md"
            value={selectedRegion}
            onChange={(e) => {
              setSelectedRegion(e.target.value);
              setPage(1); // 지역 선택이 변경되면 페이지 번호를 초기화합니다.
              setDisplayedPlans([]); // 기존 표시된 계획을 초기화합니다.
            }}
          >
            <option value="">전체 지역</option>
            {regions.map((region: string, idx: number) => (
              <option key={idx} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        {displayedPlans.map((val: any, idx: number) => {
          if (displayedPlans.length === idx + 1) {
            return (
              <div
                key={idx + 100}
                ref={lastPlanElementRef}
                className="w-[420px] mx-auto"
              >
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
              </div>
            );
          } else {
            return (
              <div key={idx + 100} className="w-[420px] mx-auto">
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
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
