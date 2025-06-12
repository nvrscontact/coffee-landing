
function FoodImages({img,title,paragraph}) {
  return (
    <>
            <section>
                <section className="flex items-center">
                <p className="flex flex-col ml-3 mb-2">
            <span className="text-[12px] ">{title} </span>
            <span className="text-[10px] text-white/40">since € 23</span>
                </p>
            <p className="text-[10px] ml-3">{paragraph} </p>
                </section>
            <img src={img} alt="" className='h-60 w-full object-cover py-2' />
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