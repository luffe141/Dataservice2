import React from 'react'
import { useEffect } from 'react'
import L from "leaflet"
import "leaflet/dist/leaflet.css"

const LeafletMap = () => {

    const mapRef = useRef()

    const pointerIcon = L.icon({
        iconUrl:""
    })


    useEffect(()=>{

        if(!mapRef.current){
            
        mapRef.current = L.map("mapcontainer").setView([56,20],10)

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapRef.current);

    markerRef.current = L.marker(coord).addTo(mapRef.current)

        }else{
            mapRef.current.setView(coord,13)
            markerRef.current.setLatLng(coord)
        }



    },[])

  return (
    <div id='mapcontainer' style={{width: "500px", height:"500px"}}>Kortet loader...</div>
  )
}

export default LeafletMap