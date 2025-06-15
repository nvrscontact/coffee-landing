
function FoodImages({img,title,paragraph}) {
  return (
    <>
            <section className="">
              <section className="flex flex-col">
                <p className="flex gap-1 items-center">
                  <span className="text-[16px]">{title} </span>
                  <span className="text-[12px] text-[#cea65bc7]">€ 23</span>
                </p>
                <section className="flex gap-1 items-center">
                  <span className="text-[10px] border p-[6px] rounded-[6px] border-white/20 w-fit">Entrantes </span>
                  <p className="text-[10px] text-white/50 w-44">{paragraph} </p>
                </section>
              </section>
            <img src={img} alt="" className='h-48 w-48 object-cover backdrop-blur-lg py-2 rounded-xl' />
              <section className="flex gap-2 text-[9px] mr-4">
                <span className="border rounded-xl p-2 border-white/30">Juices</span>
                <span className="border rounded-xl p-2 border-white/30">Spices</span>
                <span className="border rounded-xl p-2 border-white/30">Spices</span>
              </section>
            </section>
    
    </>
  )
}

export default FoodImages