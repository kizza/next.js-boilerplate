"use client"

import {APIProvider, Map as GoogleMap, Marker} from "@vis.gl/react-google-maps";

export default function MapComponent() {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID}
        style={{width: "100%", height: "20rem"}}
        defaultCenter={{lat: -27.520884990912958, lng: 152.93502596434882}}
        defaultZoom={13}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <Marker position={{lat: -27.520884990912958, lng: 152.93502596434882}} />
      </GoogleMap>
    </APIProvider>
  )
}

