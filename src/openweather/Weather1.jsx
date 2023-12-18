import React from 'react'
import useRequestData from '../hooks/useRequestData';
import Error from '../components/Error';
import Loader from '../components/Loader';
import { useEffect, useState } from 'react'


const Weather1 = () => {

    const[zip,setZip] = useState("3320")

    const { makeRequest, isLoading, data, error}= useRequestData()

    const [valid, setValid] =useState(true)

    useEffect(()=>{

        if(valid){

            makeRequest("https://api.openweathermap.org/data/2.5/weather?zip="+ zip + ",dk&units=metric&appid=32266fb3be0fe5a6446c576f52fb39b0", "GET")
        }

        

    },[zip])

  return (
    <div>

        {isLoading && <Loader/>}

        {error && <Error/>}



        {data &&

            

            <article>
                <h1>Skriv et post nr</h1>
                <input type="text" placeholder='intast post nr'
                value={zip}
                onChange={e=> {setZip(e.target.value); setValid(e.target.checkValidity)}}
                required
                pattern='[0-9]{4}'
                />
                <h2>Vejret i {data.name}</h2>
                <h3>Temperatur:{Math.round(data.main.temp)}&deg;C</h3>
            </article>


      }



        

    </div>
  )
}

export default Weather1