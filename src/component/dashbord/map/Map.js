import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 25.0391667,
  lng: 121.525
};

let markers = [
  {
    id: 1,
    latitudeTest: 25.0391667,
    longitudeTest: 121.525,
    shelter: 'marker 1'

  },
  {
    id: 2,
    latitudeTest: 24.0391667,
    longitudeTest: 110.525,
    shelter: 'marker 2'

  },
  {
    id: 3,
    latitudeTest: 20.0391667,
    longitudeTest: 100.525,
    shelter: 'marker 3'

  },
  {

    id: 4,
    latitudeTest: 9.548517279887355,
    longitudeTest: 78.57553782078467,
    shelter: 'marker 3'
  }
]
// position={{

//     lat: 47.444,

//     lng: -122.176

// }}

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDykLcSVPpD9Kw0VoZUkrlpMOCKOVWs7Bg"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  // return isLoaded ? "true" : "false"

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {markers.map((marker) => {
        return (

          <Marker
            visible={true}
            id={marker.id}
            key={marker.id}
            position={{ lat: marker.latitudeTest, lng: marker.longitudeTest }}
            title="Click to zoom"
          >
          </Marker>
        );
      })}
    </GoogleMap>
  ) : <></>
}

export default MyComponent