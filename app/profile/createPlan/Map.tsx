"use client";

import {
  GoogleMap,
  LoadScriptNext,
  MarkerF,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";

interface LatLng {
  lat: number;
  lng: number;
  address: string;
}

interface Marker extends LatLng {}

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center: LatLng = {
  lat: 37.56,
  lng: 126.9774,
  address: "",
};

const GEOCODING_API_URL = "https://maps.googleapis.com/maps/api/geocode/json";

const fetchAddress = async (lat: number, lng: number): Promise<string> => {
  try {
    const response = await fetch(
      `${GEOCODING_API_URL}?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
    );
    const data = await response.json();
    if (data.status === "OK" && data.results.length > 0) {
      return data.results[0].formatted_address;
    }
    return "No address found";
  } catch (error) {
    console.error("Error fetching address:", error);
    return "Error fetching address";
  }
};

export default function Map() {
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<LatLng>(center);
  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);

  const onSBLoad = (ref: google.maps.places.SearchBox) => {
    searchBoxRef.current = ref;
  };

  const onPlacesChanged = () => {
    const searchBox = searchBoxRef.current;
    if (!searchBox) return;

    const places = searchBox.getPlaces();
    if (!places || places.length === 0) return;

    const place = places[0];
    if (!place.geometry || !place.geometry.location) return;

    const latLng: LatLng = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
      address: place.formatted_address || "No address found",
    };

    setMarkers([latLng]);
    setSelectedLocation(latLng);
  };

  const onMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
  };

  const onMapClick = async (event: google.maps.MapMouseEvent) => {
    if (!event.latLng) return;
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    const address = await fetchAddress(lat, lng);

    const latLng: LatLng = {
      lat: lat,
      lng: lng,
      address: address,
    };

    setMarkers([latLng]);
    setSelectedLocation(latLng);
  };

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.panTo(selectedLocation);
    }
  }, [selectedLocation]);

  return (
    <>
      <div className="w-full h-80">
        <LoadScriptNext
          googleMapsApiKey={`${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`}
          libraries={["places"]}
        >
          <GoogleMap
            onLoad={onMapLoad}
            mapContainerStyle={mapContainerStyle}
            center={selectedLocation}
            zoom={16}
            onClick={onMapClick}
          >
            {markers.map((marker, index) => (
              <MarkerF key={index} position={marker} />
            ))}
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 20,
                background: "white",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              <div className="hidden">
                <textarea name="lat" readOnly value={selectedLocation.lat}>
                  {selectedLocation.lat}
                </textarea>
                <textarea name="lng" readOnly value={selectedLocation.lng}>
                  {selectedLocation.lng}
                </textarea>
                <textarea readOnly>{selectedLocation.address}</textarea>
              </div>
            </div>
            <StandaloneSearchBox
              onLoad={onSBLoad}
              onPlacesChanged={onPlacesChanged}
            >
              <input
                type="text"
                placeholder="입력해서 찾기!"
                className="box-border border border-transparent max-w-[270px] w-[70%] h-[40px] px-3 rounded-[3px] shadow-md text-[14px] outline-none mx-auto truncate absolute top-[10px] left-1 transform -translate-x-2/1"
              />
            </StandaloneSearchBox>
          </GoogleMap>
        </LoadScriptNext>
      </div>
      <div>
        <textarea
          name="address"
          className="mt-2 font-semibold pl-2 resize-none w-full h-8 pt-1 pointer-events-none"
          value={`${
            selectedLocation.address.split(" ")[0] !== "대한민국"
              ? selectedLocation.address.split(" ")[0]
              : ""
          } ${
            selectedLocation.address.split(" ")[1]
              ? selectedLocation.address.split(" ")[1]
              : ""
          } ${
            selectedLocation.address.split(" ")[2]
              ? selectedLocation.address.split(" ")[2]
              : ""
          } ${
            selectedLocation.address.split(" ")[3]
              ? selectedLocation.address.split(" ")[3]
              : ""
          }`}
          aria-label="선택 주소"
        ></textarea>
        <input
          className=" mb-2 border border-gray-300 p-2 w-full rounded-lg font-semibold"
          type="text"
          placeholder="세부 주소를 입력하세요!"
          name="detailed_address"
        />
      </div>
    </>
  );
}
