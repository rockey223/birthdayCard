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
          <div className="absolute card-back h-[400px] w-full bg-slate-50 p-4  flex flex-col origin-center overflow-scroll">
            <h1 className="text-2xl mt-10">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem tempore itaque quaerat a aliquid temporibus rerum suscipit eligendi blanditiis excepturi voluptates esse deleniti fugit mollitia nemo, corporis, alias id animi repellat non architecto. Soluta sed optio, cupiditate temporibus ad natus nobis perspiciatis voluptas autem. Veritatis eos assumenda modi sed quam sequi illum quod dolore accusamus nemo reprehenderit aliquid deleniti iste dolor quibusdam, accusantium consectetur, laudantium impedit dolorem porro voluptatibus. Quibusdam, omnis culpa soluta, fuga autem ad adipisci iure ex veritatis aut animi qui molestiae facere quod inventore saepe possimus quam cumque quos alias! A vel ipsum deserunt soluta quam ipsam, tempore, id molestiae ea corporis magni similique quisquam enim, et cumque eum! Aliquid distinctio dolorem delectus earum officiis pariatur, cum nisi? Rem eligendi ab nemo illum, repellendus eaque in doloribus sint vero, sapiente unde quaerat amet quisquam et! Dignissimos numquam aspernatur cupiditate reiciendis nihil assumenda. Aliquam, sequi. Velit voluptatem delectus quidem doloribus quibusdam? Nobis blanditiis perferendis eveniet debitis sequi. Quam in, sint nisi modi voluptatibus dolor consequuntur nesciunt quidem aliquam sunt qui? Molestias explicabo, excepturi consequuntur repellat optio molestiae, possimus porro nostrum similique temporibus dolor a magnam repudiandae nihil voluptate quis ad quisquam nisi accusantium. Voluptatem aspernatur accusamus voluptates beatae. </h1>
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
