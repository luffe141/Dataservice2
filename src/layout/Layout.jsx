import Footer from "./Footer"
import Header from "./Header"
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <section>
    <Header/>

    <main>
      <Outlet/>
    </main>
    <Footer/>
   </section>
  )
}

export default Layout