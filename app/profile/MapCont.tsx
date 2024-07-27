"use client";

import { GoogleMap, LoadScriptNext, MarkerF } from "@react-google-maps/api";

export default function MapCont() {
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
          lat: 37.56,
          lng: 126.9774,
        }}
        zoom={16}
      >
        <MarkerF
          position={{
            lat: 37.56,
            lng: 126.9774,
          }}
        ></MarkerF>
      </GoogleMap>
    </LoadScriptNext>
  );
}
