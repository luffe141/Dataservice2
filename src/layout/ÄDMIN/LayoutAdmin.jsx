import NavbarAdmin from "./NavbarAdmin"
import HeaderAdmin from "./HeaderAdming"
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
   <section>
    <HeaderAdmin/>
    <NavbarAdmin/>

    <main>
      <Outlet/>
    </main>
  
   </section>
  )
}

export default LayoutAdmin