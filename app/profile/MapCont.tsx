"use client";

import { GoogleMap, LoadScriptNext, MarkerF } from "@react-google-maps/api";

export default function MapCont({ lat, lng }: { lat: number; lng: number }) {
  return (
    <LoadScriptNext
      googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
      libraries={["places"]}
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
  );
}
