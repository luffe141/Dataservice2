import React from 'react'
import { useState,useEffect } from 'react'
import useRequestData from '../hooks/useRequestData'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import Error from '../components/Error'


const Airtable = () => {

    const {makeRequest, isLoading, data, error} =useRequestData()

    useEffect(()=>{

        makeRequest("https://api.airtable.com/v0/appYwtUvKnNC1rUBm/Need", "GET", null, {"Authorization":"Bearer"+ import.meta.env.VITE_APP_AIRTABLESHOPPINGTOKEN})
    
      },[])
    
  return (
    <div>

    <h1 className="mb-6 text-3xl font-bold text-center">Airtable hentede data</h1>

    {isLoading && <Loader/>}

    {error && <Error/>}

    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">

      {data && data.map(p =>
        
        <div className="shadow-xl card bg-base-100" key={p.id}>

        <div className="card-body">

        <h2 className="text-xl font-bold">{p.title}</h2>
        <p>{p.id}</p>
        <Link to={"/post/"+ p.id} className="btn">læs mere</Link>

        </div>

        </div>
        
        
        )}

    </div>


  </div>
  )
}

export default Airtable