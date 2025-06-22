
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <NavBar/>  
        <Outlet/>
      <Footer/>  
    </>
  )
}

export default Layout