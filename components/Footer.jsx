import {AiFillTwitterCircle} from "react-icons/ai"
import {MdFacebook} from "react-icons/md"
import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative mt-24 bg-[#A1D0DC]">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#A1D0DC]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      </div>
      <div className="bg-[#A1D0DC] h-52 flex flex-col justify-between">
        <div>
          <h2 className="text-center text-4xl text-white">SHARE</h2>
          <div className="flex flex-row justify-center mt-4">
            <Link href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <AiFillTwitterCircle size={55} color={"#00ABE5"} className="cursor-pointer" />
            </Link>
            <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <MdFacebook size={55} color={"#3266AB"} className="cursor-pointer"/>
            </Link>
          </div>
        </div>
        <span className="text-white text-xs text-center mb-2">copyright@SakanaHenNoKanji</span>
      </div>
    </div>
  );
};