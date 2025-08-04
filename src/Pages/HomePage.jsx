import Presentation from '../Components/Presentation'
import Restaurant from '../Components/Restaurant'
import Reviews from '../Components/Reviews'
import Resort from '../Components/Resort'
import Hotel from '../Components/Hotel'


function HomePage() {
  return (
      <>

      <Presentation/>
      <section className='flex flex-col gap-32'>
      <Hotel/>
      <Restaurant/>
      <Resort/>
      <Reviews/>
      </section>
      
      </>
  )
}

export default HomePage