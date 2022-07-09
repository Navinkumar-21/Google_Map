import React, {useEffect ,useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 25.0391667,
  lng: 121.525
};

/*let markersTest = [
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
    shelter: 'marker 4'
  }
]*/
// 
// position={{

//     lat: 47.444,

//     lng: -122.176

// }}

let markers = []
function MyComponent() {
  const [map, setMap] = useState(null)
  const[markerlocation , setMarkerlocation] = useState()
  

  function getData(){
    return fetch('../../data.json')
    .then((res) => res.json())
    .then((data) => {
      setMarkerlocation(data)
    })
  }
  
   function getPromiseData(){
   return Promise.all([getData()])
  }
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDykLcSVPpD9Kw0VoZUkrlpMOCKOVWs7Bg"
  })


  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  useEffect(() => {
    getData()
  } ,[])
  // return isLoaded ? "true" : "false"
// When this Promise resolves, both values will be available.

// console.log("markers" , markerlocation); 
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={1}
      onLoad={onLoad}
       onUnmount={onUnmount}
    >
      {markerlocation && markerlocation.map((marker) => {
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
