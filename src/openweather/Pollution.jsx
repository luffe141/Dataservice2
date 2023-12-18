import React from 'react'
import { useEffect, useState } from 'react'
import useRequestData from '../hooks/useRequestData'
import Error from '../components/Error'
import Loader from '../components/Loader'
import LeafletMap from '../components/LeafletMap'




const Pollution = () => {

    const { makeRequest, isLoading, data, error}= useRequestData()

    const [lat, setLat] = useState(56)

    const [lon, setLon] = useState(10)

    useEffect(()=>{

        makeRequest("http://api.openweathermap.org/data/2.5/air_pollution?lat="+ lat +"&lon="+lon+"&appid=32266fb3be0fe5a6446c576f52fb39b0")

    }, [lat, lon])

  return (
    <div>
        <h1>Pollution/forurening ud fra klik/koordinater på Leaflet map</h1>

        <h2 className='text-2xl'>Polution data</h2>
        {data &&
        
        <ul>
            <li>CO:{data.list[0].component.co}</li>
            <li>no:{data.list[0].component.co}</li>
            <li>no<sup>2</sup>:{data.list[0].component.co}</li>
        </ul>
            
        }


        <LeafletMap coord={[lat,lon]} info="pollution"/>



    </div>
  )
}

export default Pollution