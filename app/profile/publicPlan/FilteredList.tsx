/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import PlanList from "../PlanList";
import { Plan } from "../page";

interface FilteredData {
  id: number;
  user_id: string;
  friend_id: string[];
  lat: string;
  lng: string;
  address: string;
  detailed_address: string;
  textfield: string;
  post_all: string | null;
  created_at: string;
  timetext: string;
  month: number;
  day: number;
  hour: number;
  minute: number;
  year: number;
  name: string;
  image: string;
}

export default function FilteredList({
  regions,
  plans,
}: {
  regions: string[];
  plans: FilteredData[];
}) {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [page, setPage] = useState(1);
  const [displayedPlans, setDisplayedPlans] = useState<FilteredData[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    loadPlans();
  }, [page, selectedRegion]);

  const loadPlans = useCallback(() => {
    const filteredPlans = plans
      .filter((plan: FilteredData) => {
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
      .filter((plan: FilteredData) => {
        return selectedRegion
          ? plan.address.trim().split(" ")[0] === selectedRegion
          : true;
      })
      .slice(0, page * 5);

    setDisplayedPlans(filteredPlans);
  }, [page, selectedRegion, plans]);

  const lastPlanElementRef = useCallback((node: Element | null) => {
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (node) observerRef.current.observe(node);
  }, []);

  return (
    <div className="mb-32 w-[100%] max-w-md mx-auto">
      <ul className="bg-white pt-8 pb-6 rounded-xl shadow-md mt-12 mx-auto pr-2 pl-2">
        <li className="flex justify-center mb-4">
          <select
            className="p-2 border-2 border-gray-400 rounded-md"
            value={selectedRegion}
            onChange={(e) => {
              setSelectedRegion(e.target.value);
              setPage(1);
              setDisplayedPlans([]);
            }}
            aria-label="지역 선택하여 필터링"
          >
            <option value="">전체 지역</option>
            {regions.map((region: string, idx: number) => (
              <option key={idx} value={region}>
                {region}
              </option>
            ))}
          </select>
        </li>
        {displayedPlans.map((val: FilteredData, idx: number) => {
          if (displayedPlans.length === idx + 1) {
            return (
              <li key={idx + 100} ref={lastPlanElementRef} className=" mx-auto">
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
            );
          } else {
            return (
              <li key={idx + 100} className=" mx-auto">
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
            );
          }
        })}
      </ul>
    </div>
  );
}
