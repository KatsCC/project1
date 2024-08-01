import MapCont from "./MapCont";

export default function PlanList({
  lat,
  lng,
  address,
  detailed_address,
  textfield,
  month,
  day,
  hour,
  minute,
  year,
}: {
  lat: number | string;
  lng: number | string;
  address: string;
  detailed_address: string;
  textfield: string;
  month: number;
  day: number;
  hour: number;
  minute: number;
  year: number;
}) {
  return (
    <li className="border border-gray-300 w-full h-40 rounded-lg flex overflow-hidden mb-3 shadow">
      <div className="flex flex-col h-full">
        <h2 className="text-lg font-bold overflow-hidden overflow-ellipsis whitespace-nowrap w-52 flex-1 p-2 mt-4 mr-2">
          {`${textfield}`}
        </h2>
        <p className="text-gray-600 mb-2 pl-2">{`Date: ${month}/${day}, ${year}`}</p>
        <p className="text-gray-600 mt-2 mb-4 pl-2">{`Time: ${
          String(hour).length === 1 ? "0" + hour : hour
        }:${String(minute).length === 1 ? "0" + minute : minute}`}</p>
      </div>
      <div className="p-2 w-48 rounded-lg overflow-hidden w-[100%]">
        <div className="border border-gray-300 h-full w-full">
          <MapCont lat={Number(lat)} lng={Number(lng)}></MapCont>
        </div>
      </div>
    </li>
  );
}
