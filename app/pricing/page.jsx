import React from "react";
import Hero from "./components/hero";
import Image from "next/image";
import gradient from "../../assets/gradient.png";
import gradientRight from "@/public/rightGradient.png";
import circle from "../../assets/circle.png";
import BrandScroll from "../components/BrandScroll";
import PPrograms from "./components/PPrograms";
import PersonScroll from "../components/PersonScroll";
import Practioners from "../Sections/Practioners";
import spotify from "@/public/spotify.png";
import Pricing from "../Sections/Pricing";
import Faq from "../Sections/Faq";
import Details from "./components/details";
import certificate from "@/public/certificate.png";
import details from "@/public/details.png";
import man from "@/public/man.png";
import tickIcon from "@/public/tickIcon.png";
import CourseShowcase from "../Sections/CourseShowcase";


export default function page() {
  return (
    <>
      <div className="relative py-16">
        {/* <Image
    src={HeroBGImg}
    alt="Hero Image"
    className= "absolute -top-4 -left-80"
    unoptimized
  ></Image> */}
        <Image
          src={gradient}
          alt="Gradient"
          width={128}
          height={128}
          className="md:w-[20%] w-[50%] h-full absolute inset-0 z-[1]"
          unoptimized
        ></Image>
        <div className="relative max-w-screen-xl mx-auto lg:px-36  z-10 text-center text-white">
          <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
            Make Your Growth <span className=" text-[#3ACBBC]"> 100x </span>{" "}
            More From It is
          </h1>
          <p className="md:max-w-[70%] w-[50%] text-center mx-auto text-[12px] md:text-[14px] mb-8">
            Connect with 3000+ investors using AI-powered investor discovery,
            personalized pitches, and intelligent outreach.
          </p>
          <button
            type="button"
            className=" bg-[#242A3B] mb-[7%] text-[#3ACBBC] text-base font-semibold px-8 py-2.5 rounded-sm transition duration-300 ease-in-out shadow-explore hover:shadow-xl"
          >
            Explore Courses -{">"}
          </button>

          <div className="flex gap-3 flex-col md:flex-row p-10 md:justify-around">
            <div className=" relative lg:w-1/6 md:w-1/4 flex items-center gap-1">
              <Image
                src={circle}
                alt="Gradient"
                width={128}
                height={128}
                className="w-1/2 hidden md:block -left-[10%] absolute  z-[1]"
                unoptimized
              ></Image>
              <div className="font-bold text-3xl">23+</div>
              <div className="text-base">Years Of Experience</div>
            </div>
            <div className="relative lg:w-1/6 md:w-1/4 flex items-center gap-3">
              <Image
                src={circle}
                alt="Gradient"
                width={128}
                height={128}
                className="w-[69%] hidden md:block -left-[10%] absolute  z-[1]"
                unoptimized
              ></Image>
              <div className="text-[#3ACBBC] font-bold text-5xl">300%</div>
              <div className="text-base">Years Of Experience</div>
            </div>
            <div className="relative lg:w-1/6 md:w-1/4 flex items-center gap-1">
              <Image
                src={circle}
                alt="Gradient"
                width={128}
                height={128}
                className="w-1/2 hidden md:block -left-[10%] absolute  z-[1]"
                unoptimized
              ></Image>
              <div className="font-bold text-3xl">23+</div>
              <div className="text-base">Years Of Experience</div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative py-16 z-[1]">
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
          className="md:w-[30%] w-[50%] h-[600px] absolute top-0 right-0 -z-[10]"
          unoptimized
        ></Image>
        <div className="relative max-w-screen-xl mx-auto lg:px-24 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight mb-6">
            Our Mentors Teach
          </h1>
          <p className="md:max-w-[70%] w-[50%] text-center mx-auto text-[12px] md:text-[14px] mb-8">
            Connect with 3000+ investors using AI-powered investor discovery,
            personalized pitches, and intelligent outreach.
          </p>
          <BrandScroll></BrandScroll>
          <BrandScroll></BrandScroll>
        </div>
      </div>
      <PPrograms></PPrograms>
      <Practioners></Practioners>
      <Details></Details>
      <CourseShowcase></CourseShowcase>
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
          <Image
            className="mx-auto min-w-[90%]"
            src={details}
            alt="Certificate"
            width={128}
            height={128}
            unoptimized
          ></Image>
        </div>
      </div>
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
            Brands Our Mentors Have Impacted
          </h1>
          <p className="md:max-w-[70%] w-[50%] text-center mx-auto text-[12px] md:text-[14px] mb-8">
            Connect with 3000+ investors using AI-powered investor discovery,
            personalized pitches, and intelligent outreach.
          </p>
          <Image
            className="mx-auto min-w-[60%]"
            src={certificate}
            alt="Certificate"
            width={128}
            height={128}
            unoptimized
          ></Image>
        </div>
      </div>
      <div className="relative pb-20 md:pb-40 z-[1]">
        <Image
          src={gradient}
          alt="Gradient"
          width={128}
          height={128}
          className="md:w-[20%] w-[50%] h-full absolute inset-0 -z-[1]"
          unoptimized
        ></Image>
        <div className="relative max-w-screen-2xl mx-auto lg:px-20 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
            Why Unlocks?
          </h1>
          <p className="md:max-w-[70%] w-[50%] text-center mx-auto text-[12px] md:text-[14px] mb-8">
            Connect with 3000+ investors using AI-powered investor discovery,
            personalized pitches, and intelligent outreach.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-between p-5 md:pl-16">
          <div className="w-[100%] md:w-[40%] mt-10">
            <p>OUR SKILLS</p>
            <h6 className="mt-5 text-4xl text-bold">
              We Bring the best for your education
            </h6>
            <p className="mt-5">
              Malesuada bibendum arcu vitae elementum. Semper eget duis at
              tellus at urna condimentum. Aliquam malesuada bibendum arcu vitae
              elementum curabitur vitae nunc sed.
            </p>
            <div className="flex flex-row mt-5">
              <div className="flex flex-col">
                <div className="flex flex-row items-center mt-3">
                  <Image
                    className="w-3 h-3"
                    src={tickIcon}
                    alt="Certificate"
                    width={128}
                    height={128}
                    unoptimized
                  ></Image>
                  <p className="ml-2">Multiply global marketing policy</p>
                </div>
                <div className="flex flex-row items-center mt-3">
                  <Image
                    className="w-3 h-3"
                    src={tickIcon}
                    alt="Certificate"
                    width={128}
                    height={128}
                    unoptimized
                  ></Image>
                  <p className="ml-2">Multiply global marketing policy</p>
                </div>
                <div className="flex flex-row items-center mt-3">
                  <Image
                    className="w-3 h-3"
                    src={tickIcon}
                    alt="Certificate"
                    width={128}
                    height={128}
                    unoptimized
                  ></Image>
                  <p className="ml-2">Multiply global marketing policy</p>
                </div>
              </div>
              <div className="flex flex-col ml-5">
                <div className="flex flex-row items-center mt-3">
                  <Image
                    className="w-3 h-3"
                    src={tickIcon}
                    alt="Certificate"
                    width={128}
                    height={128}
                    unoptimized
                  ></Image>
                  <p className="ml-2">Multiply global marketing policy</p>
                </div>
                <div className="flex flex-row items-center mt-3">
                  <Image
                    className="w-3 h-3"
                    src={tickIcon}
                    alt="Certificate"
                    width={128}
                    height={128}
                    unoptimized
                  ></Image>
                  <p className="ml-2">Multiply global marketing policy</p>
                </div>
                <div className="flex flex-row items-center mt-3">
                  <Image
                    className="w-3 h-3"
                    src={tickIcon}
                    alt="Certificate"
                    width={128}
                    height={128}
                    unoptimized
                  ></Image>
                  <p className="ml-2">Multiply global marketing policy</p>
                </div>
              </div>
            </div>
            <button
              type="button"
              className="bg-[#16DBAA] hover:bg-[#16DBAA] text-black text-base font-semibold px-8 py-2.5 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl mt-8"
            >
              Get Started -{">"}
            </button>
          </div>
          <div className="w-[100%] md:w-[50%] mt-5 md:mt-10">
            <Image
              className="mx-auto min-w-[100%] md:min-w-[60%] rounded-2xl"
              src={man}
              alt="Certificate"
              width={128}
              height={128}
              unoptimized
            ></Image>
          </div>
        </div>
      </div>
      <div className="relative pb-20 md:pb-40 z-[1] hidden md:block">
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
            Brands Our Mentors Have Impacted
          </h1>
          <p className="md:max-w-[70%] w-[50%] text-center mx-auto text-[12px] md:text-[14px] mb-8">
            Connect with 3000+ investors using AI-powered investor discovery,
            personalized pitches, and intelligent outreach.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row gap-10">
            <Image
              src={spotify}
              alt="Gradient"
              width={128}
              height={128}
              unoptimized
            ></Image>
            <Image
              src={spotify}
              alt="Gradient"
              width={128}
              height={128}
              unoptimized
            ></Image>
            <Image
              src={spotify}
              alt="Gradient"
              width={128}
              height={128}
              unoptimized
            ></Image>
            <Image
              src={spotify}
              alt="Gradient"
              width={128}
              height={128}
              unoptimized
            ></Image>
            <Image
              src={spotify}
              alt="Gradient"
              width={128}
              height={128}
              unoptimized
            ></Image>
          </div>
          <div className="flex flex-row gap-10 mt-10">
            <Image
              src={spotify}
              alt="Gradient"
              width={128}
              height={128}
              unoptimized
            ></Image>
            <Image
              src={spotify}
              alt="Gradient"
              width={128}
              height={128}
              unoptimized
            ></Image>
            <Image
              src={spotify}
              alt="Gradient"
              width={128}
              height={128}
              unoptimized
            ></Image>
            <Image
              src={spotify}
              alt="Gradient"
              width={128}
              height={128}
              unoptimized
            ></Image>
          </div>
        </div>
      </div>
      <div className="relative pr-4 pb-20 md:pb-40 z-[1]">
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
          className="md:w-[30%] w-[50%] absolute bottom-5 right-0 -z-[10]"
          unoptimized
        ></Image>
        <div className="relative max-w-screen-2xl mx-auto lg:px-20 text-center text-white">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
            Brands Our Mentors Have Impacted
          </h1>
          <p className="md:max-w-[70%] w-[50%] text-center mx-auto text-[12px] md:text-[14px] mb-8">
            Connect with 3000+ investors using AI-powered investor discovery,
            personalized pitches, and intelligent outreach.
          </p>
        </div>
        <Pricing></Pricing>
        <Faq></Faq>
      </div>
    </>
  );
}
