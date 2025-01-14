"use client";
import { useGSAP } from "@gsap/react";
import axios from "axios";
import gsap from "gsap";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import ReactConfetti from "react-confetti";

gsap.registerPlugin(useGSAP);
interface CardData {
  senderName: string;
  fullName: string;
  message: string;
}

const Card = () => {
  const cover = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const letter = useRef<HTMLDivElement | null>(null);
  const bottom = useRef<HTMLDivElement | null>(null);
  const front = useRef<HTMLDivElement | null>(null);
  const back = useRef<HTMLDivElement | null>(null);
  const params = useParams<{ card: string }>();
  const [data, setData] = useState({ senderName: "", name: "", message: "" });
  const [explode, setExplode] = useState(false);
  function getData(id: string) {
    axios
      .get<CardData>(`/api/birthday/${id}`)
      .then((res) => {
        console.log(res);

        setData({
          senderName: res.data.senderName,
          name: res.data.fullName,
          message: res.data.message,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getData(params.card);
  }, [params]);

  const dispplay = () => {
    setTimeout(()=>{
      setExplode(true);
    },3000)
    const tl = gsap.timeline();
    tl.to(cover.current, { zIndex: 5 }); // Rotate back synchronously
    tl.to(front.current, { rotateY: 180 }) // Rotate front
      .to(back.current, { rotateY: 0 }, "<") // Rotate back synchronously
      .set(cover.current, { opacity: 1 }, "<") // Rotate back synchronously
      .to(cover.current, {
        "--rotate-value": "0deg",
        duration: 1,
        delay: 0.5,
      })
      .to(cover.current, { zIndex: 2 }) // Rotate back synchronously
      .to(back.current, { top: "300px", delay: 0.3 }, "<")
      .set(letter.current, { zIndex: 3 }, "<")
      .to(letter.current, { top: "-300px", duration: 1 }, "<");
  };
  if (data.name == "") {
    return (
      <>
        <div className="h-screen w-full flex justify-center items-center">
          <div className="w-full h-1/2 flex justify-center items-center">
            <Image
              src={"/loading.gif"}
              alt="loading image"
              width={300}
              height={300}
              className="w-1/4 aspect-square"
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {explode && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={600}
          tweenDuration={2500}
          recycle={true}
        />
      )}
      <div className="h-screen w-full overflow-hidden bg-orange-300 flex flex-col justify-center items-center">
        <div
          className="letterBox h-screen relative w-full flex justify-center items-center opacity-1 px-10"
          ref={container}
        >
          <div
            onClick={dispplay}
            ref={front}
            className="front absolute h-[300px] w-[500px] max-sm:w-[280px] max-sm:h-[180px] bg-purple-900 rounded-md z-[6] "
          >
            <div className="front-content p-3 flex justify-center items-center w-full h-full">
              <p className="from absolute top-3 left-3 text-xl max-sm:text-sm text-slate-50">
                From: {data.senderName}
              </p>
              <p className="desc font-bold text-gray-400 opacity-10 animate-pulse cursor-pointer">
                TAP TO READ MESSAGE
              </p>
              <p className="to absolute bottom-3 right-3 text-xl max-sm:text-sm text-slate-50">
                To: {data.name}
              </p>
            </div>
          </div>
          <div
            ref={back}
            className="back letter-content h-[300px]  max-sm:h-[180px] absolute top-[12%] max-sm:top-[25%] rotateY-180"
          >
            <div
              className="relative letterCover origin-bottom  max-sm:w-[280px] rotateX-180 opacity-0 z-[1] "
              ref={cover}
            >
              <Image
                src="/envcover.svg"
                width={500}
                height={300}
                alt="envcover"
                className="h-full w-full object-contain"
              />
            </div>

            <div
              ref={bottom}
              className="relative letterBox h-full max-sm:h-[170px] max-sm:w-[280px] w-full"
            >
              <Image
                src="/envbottom.svg"
                width={200}
                height={200}
                alt="envbottom"
                className="h-full w-full object-cover relative z-[4] shadow-lg"
              />
              <div
                ref={letter}
                className="letter absolute p-3 top-0 h-full max-sm:h-[160px] w-full rounded-lg bg-blue-500 flex justify-center items-center opacity-1 z-[2]"
              >
                <p className="letterMessage line-clamp-6 text-center max-sm:text-sm max-sm:leading-5 ">
                  {data.message}
                </p>
              </div>
              <div className="bg-color h-full w-full relative bg-slate-600 -top-[100%] z-[1]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
