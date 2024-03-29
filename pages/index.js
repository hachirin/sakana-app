import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Card from "../components/Card";
import FishInfo from "../models/FishInfo";
import Footer from "../components/Footer";
import ReturnToTopBtn from "../components/ReturnToTop";

export default function Home() {
  const fishData = FishInfo.FishInfoData;

  return (
    <div className="w-full bg-[#F8F5EF]">
      <div>
        <Head>
          <title>読める？｜魚編の漢字</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Main />
        <div className="w-[80%] mx-auto grid gap-5 justify-evenly lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:justify-items-center">
          {fishData.map((fish) => {
            return (
              <Card id={fish.id} kanji={fish.kanji} readings={fish.readings} />
            );
          })}
        </div>
        <div className="flex lg:float-right lg:mr-20 mt-3 mx-auto justify-center">
          <ReturnToTopBtn />
        </div>
        <Footer />
      </div>
    </div>
  );
}
