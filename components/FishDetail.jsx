export default function FishDetail({kanji,readings,info}) {
  return (
    <div className="flex flex-col md:flex-row md:justify-around md:px-10 mt-10">
      <div className="mx-auto mb-6 w-56 h-[18rem] bg-white rounded-xl border-8 border-[#C2E0E8] justify-center py-8">
        <h3 className="text-4xl text-[#A1D0DC] font-body text-center mb-4 select-none">{readings}</h3>
        <h2 className="text-[#58A9D2] text-8xl font-body text-center select-none">{kanji}</h2>
      </div>
      <div className="w-[90%] mx-auto h-[22rem] md:w-[800px] md:h-[18rem] bg-white rounded-xl px-16 flex flex-col justify-center">
        <h2 className="mb-6 text-2xl font-semibold text-[#58A9D2] font-body">{kanji}({readings})の由来は？</h2>
        <p className="text-xs text-[#58A9D2] ">{info}</p>
      </div>
    </div>
  )
}