"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

const Modal = ({setdisplayModal}:{setdisplayModal: (value: boolean) => void}) => {
  const cover = useRef<HTMLElement | any>(null);
  const container = useRef<HTMLElement | any>(null);
  const letter = useRef<HTMLElement | any>(null);


  const [displayLink, setdisplayLink] = useState(false);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        onComplete: () => setdisplayLink(true), // Trigger state update after animation finishes
      });

      tl.to(letter.current, { y: "125%", duration: 1 }) // Move the letter
        .set(cover.current, { zIndex: 3 }) // Change z-index
        .to(cover.current, { rotateX: 180, duration: 1 }) // Rotate the cover
        .to(container.current, { top: "-100%", duration: 2 }) // Move the container out of view
        .set(container.current, { display: "none" }); // Hide the container
    },
    { scope: container }
  );

  return (
    <>
      <div className="w-full h-screen absolute top-0 left-0 z-20 backdrop-blur-[5px] bg-transparent flex justify-center items-center">
        <div
          className="letterBox h-[303px] relative w-[503px] bg-slate-500"
          ref={container}
        >
          {/* letterBox */}
          <div className="envelopeBottom relative z-[3]">
            <svg
              width="502"
              height="303"
              viewBox="0 0 502 303"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 302L0.5 302.5L1 302.5L501 302.5L501.5 302.5L501.5 302L501.5 2.00001L501.5 1.21824L500.79 1.54612L251 116.949L1.20971 1.54611L0.500004 1.21823L0.500004 2L0.5 302Z"
                fill="#D9D9D9"
                stroke="black"
              />
            </svg>
          </div>
          {/* letter */}
          <div
            ref={letter}
            className="letter relative z-[2] bg-slate-800 h-4/5 bottom-[200%]"
          >
            Hello
          </div>
          {/* letter cover */}
          <div
            ref={cover}
            className="envelopTop absolute bottom-[303px] z-[1] origin-bottom"
          >
            <svg
              width="502"
              height="210"
              viewBox="0 0 502 210"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.860738 74.0198L0.5 74.1244V74.5V209V209.5H1H501H501.5V209V74.5V74.1244L501.139 74.0198L251.139 1.51979L251 1.4794L250.861 1.51979L0.860738 74.0198Z"
                fill="white"
                stroke="black"
              />
            </svg>
          </div>
        </div>
        {displayLink && (
          <div className="linkContainer w-full flex justify-center items-center">
            <div className="linkContent bg-slate-50 max-lg:w-4/5 w-1/4 h-[200px] p-3 flex flex-col gap-5">
              <h5 className="text-3xl">Send this link:</h5>
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
                <p className="linkcontent text-gray-600 cursor-pointer">
                  Your Link goes Here
                </p>
              </div>
              <button type="button" onClick={()=>{setdisplayModal(false)}} className=" bg-blue-500 h-12 w-1/2 self-center rounded-lg text-white text-2xl font-medium">
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
