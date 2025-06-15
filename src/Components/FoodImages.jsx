
function FoodImages({img,title,paragraph}) {
  return (
    <>
            <section className="m-2">
              <section className="flex flex-col ml-3">
                <p className="flex gap-1 items-center">
                  <span className="text-[14px]">{title} </span>
                  <span className="text-[12px] text-[#cea65bc7]">€ 23</span>
                </p>
                  <p className="text-[10px] text-white/50">{paragraph} </p>
              </section>
            <img src={img} alt="" className='h-60 w-full object-cover backdrop-blur-lg py-2' />
              <section className="flex gap-2 text-[9px] mr-4 justify-end">
                <span className="border rounded-xl p-2 border-white/30">Juices</span>
                <span className="border rounded-xl p-2 border-white/30">Spices</span>
                <span className="border rounded-xl p-2 border-white/30">Spices</span>
              </section>
            </section>
    
    </>
  )
}

export default FoodImages