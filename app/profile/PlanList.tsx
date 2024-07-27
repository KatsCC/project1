import MapCont from "./MapCont";

export default function PlanList() {
  return (
    <li className="border border-gray-300 w-full h-40 rounded-lg flex overflow-hidden mb-3 shadow">
      <div className="flex flex-col h-full">
        <h2 className="text-lg font-bold overflow-hidden overflow-ellipsis whitespace-nowrap w-52 flex-1 p-2 mt-4 mr-2">
          카페에서
          만나자!11111111111111111111111111111111111111111111111111111111111111111111111111111
        </h2>
        <p className="text-gray-600 mb-2 pl-2">Date: 8/11, 2024</p>
        <p className="text-gray-600 mt-2 mb-4 pl-2">Time: 10:00</p>
      </div>
      <div className="p-2 w-48 rounded-lg overflow-hidden w-[100%]">
        <div className="border border-gray-300 h-full w-full">
          <MapCont></MapCont>
        </div>
      </div>
    </li>
  );
}
