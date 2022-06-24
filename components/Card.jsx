import { useState } from "react"
// import Link from "next/link"
import { useRouter } from "next/router";

export default function Card({id,kanji,readings}) {
  const [toogle,setToogle] = useState(true);
  const isToggleOn = () => {
    if(toogle) {
      setToogle(false);
    } else {
      setToogle(true);
    }
  }

  const router = useRouter();
  const seeDetails = () => {
    router.push({
      pathname:`../details/${id}`,
      query: {id :id}
    });
  }

  return(
    <>
      <div className="mb-6" onClick={()=>isToggleOn()}>
        <div className={`${toogle ? 'md:w-44 md:h-[12rem] w-38 h-[11rem] bg-white rounded-xl border-8 border-[#C2E0E8] justify-center' : 'md:w-44 md:h-[12rem] w-38 h-[11rem] bg-[#C2E0E8] rounded-xl py-6 top-0'} flex cursor-pointer select-none hover:scale-[1.1] hover:rotate-[-8deg]`}>
          {toogle ? (
            <h2 className="text-[#58A9D2] text-7xl self-center font-body">{kanji}</h2>
            ) : (
              <button className="flex flex-col justify-around text-center mx-auto">
                <h3 className="text-white text-4xl font-body">{readings}</h3>
                <button className="text-[#58A9D2] w-fit border-b-2 border-[#58A9D2] text-sm mx-auto font-body" onClick={() => seeDetails()}>
                  由来・語源
                </button>
              </button>
            )
          }
        </div>
      </div>   
    </>
  )
}