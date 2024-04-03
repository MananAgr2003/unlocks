import React from "react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import gradientBG from "@/public/rightGradient.png";
import TimelineScroll from "./TimelineScroll";
import AnimatedSection from "./timelineScroll2";

export default function Timeline() {
  return (
    <>
      <div className="relative flex flex-col md:flex-row items-center w-[100vw] p-10 md:p-28 -mt-10 md:-mt-32">
        <Image
          src={gradientBG}
          alt="Hero Image"
          width={128}
          height={128}
          className="w-[35%] h-[120vh] absolute right-0 z-[-1]"
          unoptimized
        ></Image>
        <div className="w-full mx-auto flex flex-col">
          <h1 className="w-full text-[45px]">Why Choose Unlocks?</h1>
          <p className="w-[100%] mt-2 md:mx-0 md:w-[60%] mx-auto text-[18px]">
            Focus on real-world applications, learning through action, and
            community buildingConnect with 3000+ investors using AI-powered
            investor discovery, personalized pitches, and intelligent outreach.
          </p>

          <button
            type="button"
            className="mx-auto md:mx-0 mt-10 mb-10 bg-[#3ACBBC] hover:bg-[#3ACBBC] text-white text-base font-semibold px-6 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl w-[70%] md:w-[30%]"
          >
            View Details
          </button>
        </div>
        <TimelineScroll></TimelineScroll>
      </div>
    </>
  );
}
