import Header from "../../components/Header"
import Footer from "../../components/Footer"
import FishDetail from "../../components/FishDetail"
import { useRouter } from "next/router";
import FishInfo from "../../models/FishInfo";

export default function DetailsPage() {
  const router = useRouter();
  const fishData = FishInfo.FishInfoData;

  let kanji;
  let readings;
  let info;

  fishData.map((fish) => {
    if(fish.id === router.query.id) {
      kanji = fish.kanji;
      readings = fish.readings;
      info = fish.info;
    }
  })
  
  return (
    <>
      <div className='w-full bg-[#F8F5EF]'>
        <Header />
        <FishDetail 
          kanji = {kanji}
          readings = {readings}
          info = {info}
        />
        <Footer />
      </div>
    </>
  )
}