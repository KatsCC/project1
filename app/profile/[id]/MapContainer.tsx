"use client";

import { GoogleMap, LoadScriptNext, MarkerF } from "@react-google-maps/api";
import { useState } from "react";

export default function MapContainer({
  lat,
  lng,
}: {
  lat: number;
  lng: number;
}) {
  const googleMapUrl = `https://www.google.com/maps?q=${lat},${lng}`;

  const [loading, setLoading] = useState(true);

  const handleMapLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {loading && <div className="w-full h-full bg-gray-300 animate-pulse" />}

      <LoadScriptNext
        googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
        libraries={["places"]}
        onLoad={handleMapLoad}
      >
        <GoogleMap
          mapContainerStyle={{
            width: "100%",
            height: "100%",
          }}
          options={{
            disableDefaultUI: true,
            zoomControl: false,
            scrollwheel: false,
            draggable: false,
            gestureHandling: "none",
          }}
          center={{
            lat: lat,
            lng: lng,
          }}
          zoom={16}
        >
          <MarkerF
            position={{
              lat: lat,
              lng: lng,
            }}
          ></MarkerF>
        </GoogleMap>
      </LoadScriptNext>
      <a
        href={googleMapUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 bg-white text-black p-2 rounded shadow-lg hover:bg-gray-100 font-semibold border border-gray-300"
      >
        Google Map에서 보기
      </a>
    </div>
  );
}
