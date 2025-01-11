"use client";
import React, { useRef, useState } from "react";
import { useParams } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ReactConfetti from "react-confetti";

gsap.registerPlugin(useGSAP);

const Card = () => {
  const params = useParams();
  console.log("params", params.card);
  const title = "HAPPY BIRTHDAY";
  const name = "Prashant Maharjan";
  const flipCard = useRef<HTMLElement | any>(null);
  const content = useRef<HTMLElement | any>(null);
  const [explode, setExplode] = useState(false);
  const rotateCard = () => {
    console.log("click");
    setExplode(true);
    // setTimeout(()=>{
    //   setExplode(false)
    // },3000)
    gsap.to(flipCard.current, { rotateX: 180, duration: 2 });
    gsap.to(content.current, { opacity: 0.5, duration: 1.5 });
  };
  return (
    <>
      {explode && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          tweenDuration={5000}
          recycle={false}
        />
      )}
      <div className="cardContainer h-screen w-full bg-orange-300 flex justify-center items-center">
        <div className="absolute top-1/2 left-1/2 max-lg:w-4/5 w-2/6 -translate-x-1/2 -translate-y-1/2">
          <div
            ref={flipCard}
            className="absolute z-10 card-front h-[400px] bg-slate-50 p-4 flex flex-col origin-top"
          >
            <div className="content " ref={content}>
              <h1 className="shadow-2xl px-7 text-center text-8xl font-medium -skew-y-12 bg-purple-600 max-lg:w-2/3 max-md:w-3/4 max-md:text-5xl w-5/6 self-center">
                {title}
              </h1>
              <h3 className="name self-center text-6xl font-bold bg-green-700 px-6 py-7 -skew-y-12 shadow-2xl">
                {name}
              </h3>
              <button
                onClick={rotateCard}
                className="absolute right-3 bottom-3 text-md self-end text-purple-800 animate-pulse"
              >
                Click here
              </button>
            </div>
          </div>
          <div className="absolute card-back h-[400px] w-full bg-slate-50 p-4 flex flex-col origin-center">
            <h1 className="text-3xl">Hello </h1>
            {/* <h1 className="shadow-2xl px-7 text-center text-8xl font-medium -skew-y-12 bg-purple-600 max-lg:w-2/3 max-md:w-3/4 max-md:text-5xl w-5/6 self-center">
              {title}
            </h1>
            <h3 className="name self-center text-6xl font-bold bg-green-700 px-6 py-7 -skew-y-12 shadow-2xl">
              {name}
            </h3>
            <button className="absolute bottom-3 text-md self-end text-purple-800 animate-pulse">
              Click here
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
