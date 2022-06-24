import { useState } from "react"

export default function SelectOption({option,onClickFunc,value,result}) {  
  return (
    <>
      {/* <button className={` font-body text-2xl rounded-lg py-2 text-center mb-3 cursor-pointer  ${ result ? 'bg-green-500 text-white' : 'hover:bg-[#58A9D2] hover:text-white bg-white text-[#58A9D2]'} `} onClick={onClickFunc} value={value}>
        {option}
      </button> */}
      <button className={`font-body text-2xl rounded-lg py-2 text-center mb-3 cursor-pointer lg:hover:bg-[#58A9D2] lg:hover:text-white bg-white text-[#58A9D2]`} onClick={onClickFunc} value={value}>
        {option}
      </button>
    </>
  )
}