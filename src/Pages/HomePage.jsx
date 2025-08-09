import Presentation from '../Components/Presentation'
import Reviews from '../Components/Sec_Reviews'
import Sections from '../Components/Sections'
import restaurant_hotel from '../assets/restaurant_hotel.jpg'
import resort_hotel from '../assets/resort_hotel.jpg'
import hosting_hotel from '../assets/hosting_hotel.jpg'


function HomePage() {
  return (
      <>

      <Presentation/>
      <section className='flex flex-col gap-32'>
        <Sections img={hosting_hotel} title={'Hotel'}/>
        <Sections img={restaurant_hotel} title={'Restaurant'}/>
        <Sections img={resort_hotel} title={'Resort'} />
        <Reviews/>
      </section>
      
      </>
  )
}

export default HomePage