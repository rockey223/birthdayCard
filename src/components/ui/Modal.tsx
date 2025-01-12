"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const Modal = ({
  setdisplayModal,
  message,
  link
}: {
  setdisplayModal: (value: boolean) => void;
  message: string;
  link: string
}) => {
  const cover = useRef<HTMLElement | any>(null);
  const container = useRef<HTMLElement | any>(null);
  const letter = useRef<HTMLElement | any>(null);

  const [displayLink, setdisplayLink] = useState(false);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => setdisplayLink(true), // Trigger state update after animation finishes
      });
      tl.to(container.current, { opacity: 1, duration: 0.5 })
     
        .to(letter.current, { y: "370%", duration: 1 }) // Move the letter
        .set(cover.current, { zIndex: 3 }) // Change z-index
        .to(cover.current, { rotateX: 180, duration: 1 }) // Rotate the cover
        .to(container.current, { top: "-100%", duration: 0.8 }) // Move the container out of view
        .set(container.current, { display: "none" }); // Hide the container
    },
    { scope: container }
  );
  const [displayCoppied, setDisplayCoppied] = useState(false);
  async function copy(e: any) {
    console.log(e.target.innerHTML);
    await navigator.clipboard.writeText(e.target.innerHTML);
    setDisplayCoppied(true);
    setTimeout(() => {
      setDisplayCoppied(false);
    }, 3000);
  }

  return (
    <>
      <div className="w-full h-screen fixed top-0 left-0 z-20 backdrop-blur-[5px] bg-transparent flex justify-center items-center">
        <div
          className="letterBox h-screen relative w-full flex justify-center items-center opacity-0 px-10 "
          ref={container}
        >
          <div className="letter-content h-[300px] w-[500px] max-sm:h-[180px] relative ">
            <div className="relative letterCover origin-bottom " ref={cover}>
              <Image
                src="/envcover.svg"
                width={500}
                height={300}
                alt="envcover"
                className="h-full w-full object-contain"
              />
            </div>
            <div ref={letter} className="letter absolute -top-[300%] max-sm:-top-[264%] h-full max-sm:h-[160px] w-full bg-blue-500 flex justify-center items-center z-[1] opacity-1">
              <p className="letterMessage line-clamp-6  text-center ">
                {message}
              </p>
            </div>
            <div className="relative letterBox h-full max-sm:h-[170px] max-sm:w-[280px] w-full z-[2] overflow-hidden">
              <Image
                src="/envbottom.svg"
                width={200}
                height={200}
                alt="envcover"
                className="h-full w-full object-contain relative z-[2]"
              />
              <div className="bg-color h-full w-full absolute bg-slate-600 top-0 z-[1]"></div>
            </div>
          </div>
          {/* <div className="content relative h-[303px] w-auto bg-slate-500">
            <div className="envelopeBottom relative z-[3] px-7">
              <Image src="/envbottom.svg" alt="asdf" width={502} height={303} />
             
            </div>
            
            <div
              ref={letter}
              className="flex justify-center items-center px-7 letter relative z-[2]   bottom-[200%] text-center"
            >
              <p className="message px-7 bg-sky-500 h-[210px] w-[475px]">
                {message}
              </p>
            </div>
            
            <div
              ref={cover}
              className="envelopTop absolute bottom-[303px] z-[1] origin-bottom px-7"
            >
              <Image src="/envcover.svg" alt="asdf" width={502} height={210} />
              
            </div>
          </div> */}
          {/* letterBox */}
        </div>
        {displayLink && (
          <div className="linkContainer w-full flex justify-center items-center">
            <div className="linkContent bg-slate-50 max-lg:w-4/5 w-1/4 min-h-[190px] h-auto p-3 flex flex-col gap-5">
              <h5 className="text-3xl">Send this link:</h5>
              <div className="flex flex-col h-auto max-sm:h-[80px]">
                <div className="linkBox bg-slate-200 px-4  h-[40px] flex items-center gap-3">
                  <span className="icon h-[25px] w-[25px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                      />
                    </svg>
                  </span>
                  <p
                    className="linkcontent text-gray-600 cursor-pointer"
                    onClick={copy}
                  >
                    {link}
                  </p>
                </div>
                {displayCoppied && (
                  <span className="text-lg text-green-500">Link copied</span>
                )}
              </div>
              <button
                type="button"
                onClick={() => {
                  setdisplayModal(false);
                }}
                className=" bg-blue-500 h-12 w-1/2 self-center rounded-lg text-white text-2xl font-medium"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
