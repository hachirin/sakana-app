import Image from "next/image"
import {IoBookSharp} from "react-icons/io5"
import {BsPatchQuestionFill} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {MdFacebook} from "react-icons/md"
import Link from "next/link"

export default function Header() {
  return (
    <>
      <div className="bg-[#F8F5EF] w-screen flex flex-row justify-between px-8 h-34">
        {/* pc用ロゴ */}
        <div className="md:flex hidden flex-row">
          <Link href={"/"}>
            <Image src="/images/logo.png" width={200} height={100} alt="logo" className="cursor-pointer"/>
          </Link>
        </div>
        {/* スマホ用ロゴ */}
        <div className="md:hidden flex flex-row">
          <Link href={"/"}>
            <Image src="/images/logo.png" width={150} height={75} alt="logo" className="cursor-pointer"/>
          </Link>
        </div>
        <div>
          {/* スマホ用ナビ */}
          <div className="md:hidden flex flex-row">
            <Link href={"/"} className="cursor-pointer">
              <div className="flex flex-col bg-[#C2E0E8] text-white w-20 h-20 rounded-b-lg text-center justify-center items-center cursor-pointer">
                <IoBookSharp size={30}/>
                <span className="select-none">図鑑</span>
              </div>
            </Link>
            <Link href={"/game"} className="cursor-pointer">
              <div className="flex flex-col bg-[#58A9D2] text-white w-20 h-20 rounded-b-lg text-center justify-center items-center cursor-pointer ml-2">
                <BsPatchQuestionFill size={30} />
                <span className="select-none">クイズ</span>
              </div>
            </Link>
          </div>
          {/* pc用ナビ */}
          <div className="md:flex hidden flex-row">
            <Link href={"/"} className="cursor-pointer">
              <div className="flex flex-col bg-[#C2E0E8] text-white w-32 h-34 rounded-b-lg text-center justify-center items-center cursor-pointer">
                <IoBookSharp size={60}/>
                <span className="select-none">図鑑</span>
              </div>
            </Link>
            <Link href={"/game"} className="cursor-pointer">
              <div className="flex flex-col bg-[#58A9D2] text-white w-32 h-34 rounded-b-lg ml-6 text-center justify-center items-center hover:cursor-pointer">
                <BsPatchQuestionFill size={60} />
                <span className="select-none">クイズ</span>
              </div>
            </Link>
            <div className="ml-6">
              <Link href="https://twitter.com/">
                <a target="_blank">
                  <AiFillTwitterCircle size={55} color={"#00ABE5"} className="cursor-pointer" />
                </a>
              </Link>
              <Link href="https://www.facebook.com/">
                <a target="_blank">
                  <MdFacebook size={55} color={"#3266AB"} className="cursor-pointer"/>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}