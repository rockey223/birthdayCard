"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const Test = () => {
  const cover = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const letter = useRef<HTMLDivElement | null>(null);
  const bottom = useRef<HTMLDivElement | null>(null);
  const front = useRef<HTMLDivElement | null>(null);
  const back = useRef<HTMLDivElement | null>(null);

  const dispplay = () => {
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
  // useGSAP(

  //   { scope: container }
  // );

  return (
    <>
      <div className="h-screen w-full overflow-hidden bg-slate-800 flex flex-col justify-center items-center">
        <div
          className="letterBox h-screen relative w-full flex justify-center items-center opacity-1 px-10"
          ref={container}
        >
          <div
            onClick={dispplay}
            ref={front}
            className="front absolute h-[300px] w-[500px] max-sm:w-[280px] max-sm:h-[180px] bg-yellow-300 z-[6] "
          >
            <div className="front-content p-3 flex justify-center items-center w-full h-full">
              <p className="from absolute top-3 left-3 text-sm">
                From: Prashant Maharjan
              </p>
              <p className="desc font-bold text-gray-400 opacity-10 animate-pulse">
                {" "}
                TAP TO READ MESSAGE
              </p>
              <p className="to absolute bottom-3 right-3 text-sm">
                To: Prashant Maharjan
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
                alt="envcover"
                className="h-full w-full object-contain relative z-[4]"
              />
              <div
                ref={letter}
                className="letter absolute p-3 top-0 h-full max-sm:h-[160px] w-full bg-blue-500 flex justify-center items-center opacity-1 z-[2]"
              >
                <p className="letterMessage line-clamp-6 text-center max-sm:text-sm max-sm:leading-5 ">
                  Dear [Recipient's Name], I hope this message finds you well.
                  I&apos;m writing to share an update and express my gratitude
                  for your continued support. Our team has been working hard on
                  [project name], and I&apos;m thrilled to share that we&apos;re making
                  great progress. Your encouragement has been invaluable, and we
                  truly appreciate it. If you have any questions or suggestions,
                  please don&apos;t hesitate to reach out. We&apos;re excited about the
                  journey ahead and look forward to sharing more soon. Warm
                  regards, [Your Name]
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

export default Test;
