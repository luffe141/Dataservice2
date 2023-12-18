import { useState } from "react";
import axios from "axios";

const useRequestData = ()=>{

    const [isLoading, setisLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    const makeRequest = async(apiurl,method = "GET", bodydata= null)=>{
        setisLoading(true)

        try{
            let response
            switch (method) {
                case "GET":
                    response = await axios.get(apiurl)
                    break;
                case "POST":
                    response = await axios.get(apiurl)
                    break;
                case "PUT":
                    response = await axios.get(apiurl)
                    break;
                case "PATCH":
                    response = await axios.get(apiurl)
                    break;
                case "DELETE":
                    response = await axios.get(apiurl)
                    break;
                default:
                    throw new Error ("invalid method - GET POST PUT PATCH or DELETE was  expected")
                    break;
            }
            if (response.data) {
                
                setData(response.data)
                setError(null)
                
            }
            else{
                throw new Error("Tomt reponse/ingen data")
            }

           
        } catch(error){
            console.log(error);
            setError("der er opstået en fejl"+ error.message)
            setData(null)
        } finally{
            setisLoading(false)
        }

    }

   return{data, isLoading,error, makeRequest}
}

export default useRequestData;