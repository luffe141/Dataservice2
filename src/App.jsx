import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Login from "./views/Login";
import NoMatch from "./views/NoMatch";
import Layout from "./layout/Layout";
import LayoutAdmin from "./layout/ÄDMIN/LayoutAdmin";
import HomeAdmin from "./views/ADMIN/HomeAdmin"
import News from "./views/News";
import Posts from "./views/JSONPlaceholder/Posts";
import Post from "./views/JSONPlaceholder/Post";
import Photos from "./views/JSONPlaceholder/Photos";
import Todos from "./views/JSONPlaceholder/Todos";
import Starships from "./views/swapi/StarShips";
import PostsAdmin from "./views/JSONPlaceholder/PostsAdmin";
import PostCreate from "./views/JSONPlaceholder/PostCreate";
import PostEdit from "./views/JSONPlaceholder/PostEdit";
import Everything from "./views/Newsapi/Everything";
import Weather1 from "./openweather/Weather1";
import Weather2 from "./openweather/weather2";
import Weather3 from "./openweather/Weather3";
import Weather4 from "./openweather/Weather4";
import Pollution from "./openweather/Pollution";
import Riotgames from "./EgenApi/Riotgames";
import Airtable from "./Airtable/Airtable";

function App (){

    const router = createBrowserRouter(

        createRoutesFromElements(
            <>

            <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="newseverything" element={<Everything/>}/>
                <Route path="starships" element={<Starships/>}/>
                <Route path="weather1"element={<Weather1/>}/>
                <Route path="weather2" element={<Weather2/>}/>
                <Route path="weather3" element={<Weather3/>}/>
                <Route path="weather4" element={<Weather4/>}/>
                <Route path="pollution" element={<Pollution/>}/>
                <Route path="riotgames" element={<Riotgames/>}/>
                <Route path="airtable" element={<Airtable/>}/>
                <Route path="posts" element={<Posts/>}/>
                <Route path="post/:postID" element={<Post/>}/>
                <Route path="post" element={<Post/>}/>
                <Route path="postadmin" element={<PostsAdmin/>}/>
                <Route path="postcreate" element={<PostCreate/>}/>
                <Route path="postedit/:postID" element={<PostEdit/>}/>
                <Route path="photos" element={<Photos/>}/>
                <Route path="todos" element={<Todos/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Route>

           
            <Route path="/admin" element={<LayoutAdmin/>}>
                <Route index element={<HomeAdmin/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Route>

            </>
        )

    )
    return(
        <section>
            <RouterProvider router = {router}/>
        </section>
    )
}

export default App;