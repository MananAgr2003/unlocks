import React from "react";
import clock from "../../../assets/clock.png";
import lap from "../../../assets/Laptop.png";
import Image from "next/image";
import gradient from "../../../assets/gradient.png";
import cardGrad from "../../../assets/cardGrad.png";
import CardIcon from "@/public/CardIcon.png";
import gridBG from "@/public/gridBG.png";
import gradientBG from "@/public/radialGradient.png";
import card2icon from "@/public/card2icon.png";
const programs = [
  {
    title: "Marketing",
    description: "The gradual accumulation of information about...",
  },
  {
    title: "Marketing",
    description: "The gradual accumulation of information about...",
  },
  {
    title: "Marketing",
    description: "The gradual accumulation of information about...",
  },
  {
    title: "Marketing",
    description: "The gradual accumulation of information about...",
  },
  {
    title: "Marketing",
    description: "The gradual accumulation of information about...",
  },
  {
    title: "Marketing",
    description: "The gradual accumulation of information about...",
  },
];

const Card = ({ title, description }) => {
  return (
    <div className="relative cursor-pointer">
      {" "}
      <span className="absolute top-0 left-0 w-full lg:w-[94%] h-full mt-1 ml-1 bg-[#1B2339] rounded-xl"></span>{" "}
      <div className="relative p-6 bg-[#242A3B] w-full lg:w-[93%] h-full rounded-xl hover:scale-105 transition duration-500">
        {" "}
        <div className="flex items-center"> </div>{" "}
        <div className="mb-[10%] text-xs text-[#3ACBBC] p-1 w-fit">
          <Image src={card2icon} alt="Card Icon" height={68} width={68} unoptimized />
        </div>
        <h3 className="my-2 text-white font-semibold text-lg">
          Digital Marketing
        </h3>
        <p className="text-white text-base">
          Objectively innovate empowered manufactured products whereas parallel
          platforms.{" "}
        </p>{" "}
        <div className=" mt-10 flex justify-between">
          <div className="text-[#3ACBBC]">Read More -{">"}</div>{" "}
        </div>
      </div>
    </div>
  );
};

const PPrograms = () => {
  return (
    <section className="container my-10 md:mx-auto py-2 md:py-4">
      <h2 className="w-full text-3xl md:text-4xl font-[400] text-center mb-4">
        Who is this program for?
      </h2>
      <p className="text-sm text-white mx-auto w-[80%] md:w-[50%] text-center mb-8">
        Connect with 3000+ investors using Al-powered investor discovery,
        personalized pitches, and intelligent outreach.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {programs.map((program) => (
          <Card key={program.title} {...program} />
        ))}
      </div>
    </section>
  );
};

export default PPrograms;
