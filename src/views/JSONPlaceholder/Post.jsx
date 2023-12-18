import { useParams, Link } from "react-router-dom"
import { useEffect } from "react"
import useRequestData from "../../hooks/useRequestData"
import Loader from "../../components/Loader"
import Error from "../../components/Error"

const Post = () => {

  const { postID} = useParams()

  const [makeRequest, isLoading, data, error] =  useRequestData()

  useEffect(()=>{

    makeRequest("https://jsonplaceholder.typicode.com/posts/"+(postID))

  }, [])


  return (
    <div>
      
    <h1 className="mb-6 text-3xl  font-bold text-center"> JSONPlaceholder - vis udvalgte post</h1>

    {isLoading && <Loader/>}
    {error && <Error/>}
   

    </div>
  )
}

export default Post