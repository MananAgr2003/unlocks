"use client"
import React, { useState } from "react";
import { questions } from "./questions";
import SingleQuestion from "./SingleQuestion";

export default function App() {
  const [cards] = useState(questions);

  return (
    <>
      <section className="w-[100%] md:max-w-[80%] -mt-10 mx-auto md:py-20 md:px-20">
        <h1 className="text-center uppercase tracking-widest text-3xl font-bold mb-8">
        FAQs: Here’s everything you may ask...
        </h1>
        <h1 className="max-w-[50%] mx-auto text-center uppercase tracking-widest text-xs mb-8">
        Connect with 3000+ investors using AI-powered investor discovery,
personalized pitches, and intelligent outreach.
        </h1>

        <section className="grid grid-cols-1 gap-8 p-2 md:p-0 text-white">
          {cards.map((card, index) => (
            <>
            <div className="relative mt-5">
            <p className="absolute top-[26px]">{`0${index}`}</p>
            <SingleQuestion {...card} key={index} />
            </div>
            </>
          ))}
        </section>
      </section>
    </>
  );
}