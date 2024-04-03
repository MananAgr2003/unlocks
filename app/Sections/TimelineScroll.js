import Image from "next/image";
import React from "react";
import timelineOne from "@/public/timelineOne.png";
import AnimatedSection from "./timelineScroll2";

const TimelineScroll = () => {
  return (
    <div className="md:p-0 p-4 pr-10 md:pr-0">
      <ol class="md:w-[35vw] flex flex-col mt-0 md:h-[500PX] scroll-smooth relative">
        <div>
          <div className="absolute h-[90%] w-0.5 bg-[#3ACBBC] left-12 md:h-[100%] mt-8"></div>
          <div className="absolute left-[1.15rem] top-[5px]">
          <AnimatedSection></AnimatedSection>
          </div>
        </div>
        <li class="relative mb-8 ms-4 flex">
          <span class="-top-2 -left-[50px] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
            <Image className="z-[2]" src={timelineOne}></Image>
          </span>
          <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
            Focus on real-world application
          </h3>
        </li>
        <li class="relative mb-8 ms-4 flex items-center">
          <span class=" -top-2  left-[50%] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
            <Image className="z-[2]" src={timelineOne}></Image>
          </span>
          <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
            Focus on real-world application
          </h3>
        </li>
        <li class="relative mb-8 ms-4 flex items-center">
          <span class=" -top-2  left-[50%] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
            <Image className="z-[2]" src={timelineOne}></Image>
          </span>
          <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
            Focus on real-world application
          </h3>
        </li>
        <li class="relative mb-8 ms-4 flex items-center">
          <span class=" -top-2  left-[50%] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
            <Image className="z-[2]" src={timelineOne}></Image>
          </span>
          <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
            Focus on real-world application
          </h3>
        </li>
        <li class="relative mb-8 ms-4 flex items-center">
          <span class=" -top-2  left-[50%] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
            <Image className="z-[2]" src={timelineOne}></Image>
          </span>
          <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
            Focus on real-world application
          </h3>
        </li>
        <li class="relative mb-0 ms-4 flex items-center">
          <span class="-top-2  left-[50%] flex items-center justify-center w-16 h-16 bg-[transparent] rounded-full -start-3 ring-4 ring-[transparent]">
            <Image className="z-[2]" src={timelineOne}></Image>
          </span>
          <h3 class="flex text-nowrap md:text-wrap items-center ml-4 mb-2 text-lg text-white">
            Focus on real-world application
          </h3>
        </li>
      </ol>
    </div>
  );
};

export default TimelineScroll;
