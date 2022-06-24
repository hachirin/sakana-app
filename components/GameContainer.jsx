import FishInfo from "../models/FishInfo"
import SelectOption from "./Select";
import { useRouter } from 'next/router'
import { useState } from "react";

export default function GameContainer() {
  const fishData = FishInfo.FishInfoData;
  const rand = Math.floor(Math.random() * (fishData.length - 1));
  const quizKanji = fishData[rand].kanji;
  const correctAnswer = fishData[rand].readings;

  const answers = [rand];
  let number;
  let i = 0;
  while(i < 3) {
    number = Math.floor(Math.random() * (fishData.length - 1));
    if(!answers.includes(number)) {
      answers.push(number);
      i++;
    }
  }

  function shuffle(arrays) {
    const array = arrays.slice();
    for (let i = array.length - 1; i >= 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  }

  const answersShuffle = shuffle(answers);

  const router = useRouter();
  // const againClick = () => {
  //   router.push("/game");
  // }

  // const [result,setResult] = useState(false);
  const judge = (e) => {
    console.log(e);
    if(e == rand) {
      alert("正解！おめでとうございます！");
      router.push("/game");
    } else {
      alert("違いますよ！");
    }
  }

  const options = answersShuffle.map((index) => {
    return (
      <SelectOption 
        option={fishData[index].readings}
        value={index}
        onClickFunc={() => {judge(index)}}
        // result={result}
        // setResult={setResult}
      />
    )
  })

  return (
    <>
      <div className="bg-[#F8F5EF] w-full md:mt-10 mt-6">
        <div className="mx-auto mb-6 w-44 h-[14rem] bg-white rounded-xl border-8 border-[#C2E0E8] flex justify-center">
          <h2 className="text-[#58A9D2] text-8xl font-body text-center select-none flex my-auto">
            {quizKanji}
          </h2>
        </div>
        
        <div className="w-[50%] mx-auto flex flex-col">
          <h3 className="font-body text-[#58A9D2] text-center md:text-xl mb-6 text-sm">Q.この漢字の読み方は？</h3>
          <div className="md:w-[35%] mx-auto flex flex-col w-[80%]">
            {options}
          </div>
          {/* <button onClick={() => {againClick()}} className="bg-[#C2E0E8] rounded-xl md:w-[35%] mx-auto w-[80%] justify-center py-4 text-white font-body cursor-pointer text-xl hover:bg-[#58A9D2]">もう一回！</button> */}
        </div>
      </div>
    </>
  )
}