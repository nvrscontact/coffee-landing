
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <NavBar/>  
    <section className=''>
      <div>
        <Outlet/>
      </div>
    </section>
      <Footer/>  
    </>
  )
}

export default Layout