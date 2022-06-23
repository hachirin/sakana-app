import Image from "next/image"

export default function Main() {
  return (
    <> 
      <Image src="/images/bg.png" width={1366} height={683} layout="responsive" priority/>
    </>
  )
}