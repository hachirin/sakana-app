import { useEffect, useState } from 'react'
import { BsArrowBarUp } from 'react-icons/bs';

export default function ReturnToTopBtn() {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const top = 100;
    let scroll = 0;
    scroll = window.scrollY;
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  const normalStyle = "opacity-0 duration-500 pointer-events-none";
  const activeStyle = "opacity-100 duration-500";
  const className = isButtonActive ? activeStyle : normalStyle;

  return (
    <button onClick={returnTop} className={className}>
      <div className='bg-white py-6 px-6 text-3xl rounded-full font-body text-[#58A9D2] flex'>
        <BsArrowBarUp />
      </div>
    </button>
  )
}