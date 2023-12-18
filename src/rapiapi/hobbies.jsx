import React, { useEffect } from 'react'

import useRequestData from "../hooks/useRequestData"
import Loader from "../components/Loader"
import Error from "../components/Error"




const hobbies = () => {

    const {makeRequest, isLoading, data, error} =useRequestData()

    useEffect( ()=>{

        makeRequest("https://hobbies-by-api-ninjas-p-rapidapi.com/v1/hobbies", "GET", null,{

            "X-RapidAPI-Key":"373b842c9cmshfc94217b1f29e40p159a04jsn4a34a44faa5c",
            "X-RApidAPI-Host": "hobbies-by-api-ninjas.p.rapidapi.com"


        })

    }, [])

  return (
    <div>{
            data && <div>{data.hobby}</div>
        }</div>
  )
}

export default hobbies