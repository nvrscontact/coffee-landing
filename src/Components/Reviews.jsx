import Review from './SubComponents/Review'


function Reviews() {
  return (
   <div className='mx-6 my-20 flex flex-col inter-200'>
        <h1 className='fira-sans-extralight mb-10 animated_white text-4xl inter-200 text-center '>Reviews</h1>
        <section className='flex flex-col gap-4'>
        <Review names='Katterin R.' dates='December 2024' paragraph='Excellent food.' />
        <Review names='Mascherandossk' dates='Summer of 2025' paragraph='Excellent food and sprites, during summer is great.' />
        <Review names='Jennifer' dates='April 2023' paragraph='Its unique.' />
        </section>
    </div>
  )
}

export default Reviews