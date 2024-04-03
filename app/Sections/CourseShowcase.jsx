"use client";
import React, { useState } from "react";
import gradientRight from "@/public/rightGradient.png";
import Image from "next/image";
import clock from "@/assets/clock.png";
import lap from "@/assets/Laptop.png";
import cardGrad from "@/assets/cardGrad.png";

const CourseShowcase = () => {
  const [selectedWeek, setSelectedWeek] = useState("Week 1");

  const weekData = [
    {
      week: "Week 1",
      title: "Marketing And Managing",
    },
    {
      week: "Week 2",
      title: "Product Teardown",
    },
    {
      week: "Week 3",
      title: "Fireside Chat",
    },
    {
      week: "Week 4",
      title: "Team Bonding Activities",
    },
    {
      week: "Week 5",
      title: "Panel Discussion with Mentors",
    },
    // Add more week data here
  ];

  const courseDetails = {
    "Week 1": {
      title: "Marketing And Managing",
      description:
        "Connect with 3000+ investors using AI-powered investor discovery, personalized pitches, and intelligent outreach.",
    },
    "Week 2": {
      title: "Digital Marketing",
      duration: "6 Months",
      live: "Live Included",
      description:
        "Objectively innovate empowered manufactured products whereas parallel platforms.",
    },
    "Week 3": {
        title: "Marketing And Managing",
        description:
          "Connect with 3000+ investors using AI-powered investor discovery, personalized pitches, and intelligent outreach.",
      },
    "Week 4": {
      title: "Digital Marketing",
      duration: "6 Months",
      live: "Live Included",
      description:
        "Objectively innovate empowered manufactured products whereas parallel platforms.",
    },
    "Week 5": {
        title: "Marketing And Managing",
        description:
          "Connect with 3000+ investors using AI-powered investor discovery, personalized pitches, and intelligent outreach.",
      },
    // Add more course details here
  };

  return (
    <div className="relative pb-20 md:pb-40 z-[1]">
      {/* <Image
src={HeroBGImg}
alt="Hero Image"
className= "absolute -top-4 -left-80"
unoptimized
></Image> */}
      <Image
        src={gradientRight}
        alt="Gradient"
        width={128}
        height={128}
        className="md:w-[30%] w-[50%] h-[600px] absolute -top-[150px] right-0 -z-[10]"
        unoptimized
      ></Image>
      <div className="relative max-w-screen-2xl mx-auto lg:px-20 text-center text-white">
        <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
          Program Details
        </h1>
        <p className="md:max-w-[70%] w-[50%] text-center mx-auto text-[12px] md:text-[14px] mb-8">
          Connect with 3000+ investors using AI-powered investor discovery,
          personalized pitches, and intelligent outreach.
        </p>
      </div>

      <div className="flex flex-col md:flex-row p-5 md:p-10">
        <div className="text-white p-4 md:w-1/6 md:border-r">
          {weekData.map((week, index) => (
            <button
              key={index}
              className={`w-full text-left py-2 px-4 rounded transition-colors duration-300 ${
                selectedWeek === week.week ? "bg-[#3ACBBC]" : "bg-transparent"
              }`}
              onClick={() => setSelectedWeek(week.week)}
            >
              {week.week}
            </button>
          ))}
        </div>
        <div className="text-white p-4 md:w-5/6">
          {selectedWeek && courseDetails[selectedWeek] && (
            <>
            <div className="flex flex-col md:flex-row gap-10">
              <div>
                <h3 className="text-2xl text-[#3ACBBC] mb-2">
                  {courseDetails[selectedWeek].title}
                </h3>
                {courseDetails[selectedWeek].duration && (
                  <p className="mb-2">
                    <span className="bg-[#3ACBBC] rounded-full px-2 py-1 mr-2">
                      {courseDetails[selectedWeek].duration}
                    </span>
                    {courseDetails[selectedWeek].live}
                  </p>
                )}
                <p className="mb-4">
                  {courseDetails[selectedWeek].description}
                </p>
              </div>
              <div className="relative cursor-pointer">
                {" "}
                <span className="absolute top-0 left-0 w-full lg:w-[94%] h-full mt-1 ml-1 bg-[#1B2339] rounded-xl"></span>{" "}
                <div className="relative p-6 bg-[#242A3B] w-full lg:w-[93%] h-full rounded-xl hover:scale-105 transition duration-500">
                  {" "}
                  <div className="flex items-center"> </div>{" "}
                  <div className="border mb-[10%] text-xs bg-newbg  border-[#3ACBBC] text-[#3ACBBC] p-1 w-fit">
                    New
                  </div>
                  <Image
                    src={cardGrad}
                    alt="Gradient"
                    width={128}
                    height={128}
                    className="w-[70%] h-full absolute inset-0 z-[1]"
                    unoptimized
                  ></Image>
                  <h3 className="my-2 text-white font-semibold text-lg">
                    Digital Marketing
                  </h3>
                  <div className="flex gap-3 mb-3">
                    <div className="flex gap-1">
                      <Image
                        src={clock}
                        alt="Hero Image"
                        className=""
                        unoptimized
                      ></Image>
                      <div className="text-sm">6 months</div>
                    </div>
                    <div className="flex gap-1">
                      <Image
                        src={lap}
                        alt="Hero Image"
                        className=""
                        unoptimized
                      ></Image>
                      <div className="text-sm">Live Included</div>
                    </div>
                  </div>
                  <p className="text-white text-base">
                    Objectively innovate empowered manufactured products whereas
                    parallel platforms.{" "}
                  </p>{" "}
                  <div className=" mt-10 flex justify-between">
                    <div className="text-[#3ACBBC]">Read More -{">"}</div>{" "}
                    <div className="text-xl">$90,000</div>
                  </div>
                </div>
              </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseShowcase;
