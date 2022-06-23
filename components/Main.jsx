import Image from "next/image"

export default function Main() {
  return (
    <> 
      <div className="md:hidden sm:flex mb-6">
        <Image src="/images/bg_sp.png" width={1366} height={1234}/>
      </div>
      <div className="hidden md:flex mb-6">
        <Image src="/images/bg.png" width={1366} height={683}/>
      </div>
    </>
  )
}