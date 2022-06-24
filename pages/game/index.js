import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GameContainer from "../../components/GameContainer";

export default function Game() {
  return (
    <>
      <div className="w-full bg-[#F8F5EF]">
        <Header />
        <GameContainer />
        <Footer />
      </div>
    </>
  )
}