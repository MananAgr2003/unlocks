import React from "react";
import Image from "next/image";
import gradient from "../../assets/gradient.png";
import ticktok from "../../assets/ticktok.svg";
import x from "../../assets/x.svg";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import grid from "@/public/gridBG.png";

export default function Page() {
  return (
    <>
      <div className="relative py-16">
        <Image
          src={gradient}
          alt="Gradient"
          width={128}
          height={128}
          className="md:w-[20%] w-[50%] h-full absolute inset-0 z-[1]"
          unoptimized
        />
        <Image
          src={grid}
          className="absolute inset-0"
        />
        <div className="relative max-w-screen-xl mx-auto px-6 lg:px-36 lg:flex lg:justify-between z-10 text-white ">
          <div className="w-full lg:w-1/2 flex flex-col justify-center"> {/* Added flex and justify-center */}
            <div className="mb-8 text-center lg:text-left"> {/* Changed here */}
              <div className="text-4xl font-semibold mb-8 ">Get In Touch</div>
              <div className="mb-2">14 LE Gounlburn St, Sydney 1198NSA.</div>
              <div className="mb-2">(+089) 19918989</div>
              <div>manasuiux@icloud.com</div>
            </div>
            <div className="text-center lg:text-left"> {/* Changed here */}
              <div className="text-3xl font-semibold mb-8">OPEN HOURS</div>
              <div className="mb-2">Contact our customer happiness team</div>
              <div className="mb-4">Monday-Friday 9am-5pm</div>
            </div>
            <div className="flex lg:mx-0 md:mx-auto md:mb-2">
              <div className="font-semibold mr-6">FOLLOW US:</div>
              <Image src={ticktok} alt="Ticktok" className="mx-2"/>
              <Image src={x} alt="X" className="mx-2" />
              <Image src={instagram} alt="Instagram" className="mx-2"/>
              <Image src={facebook} alt="Facebook" className="mx-2"/>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="mb-10 pb-4">
              <div className="text-[1.25rem] font-[200] mb-1">Email address</div>
              <div className="relative">
                <div style={{borderRadius:'4px',backgroundColor:'#3ACBBC'}} className="absolute top-2 left-2 w-full h-10"></div>
                <input style={{borderRadius:'4px'}} className="absolute top-0 left-0 w-full text-black h-10 pl-8" type="text" placeholder="yourname@email.com" />
              </div>
            </div>
            <div className="mb-10 pb-4">
              <div className="text-[1.25rem] font-[200] mb-1">Phone Number</div>
              <div className="relative">
                <div style={{borderRadius:'4px',backgroundColor:'#3ACBBC'}} className="absolute top-2 left-2 w-full h-10"></div>
                <input style={{borderRadius:'4px'}} className="absolute top-0 left-0 w-full h-10 pl-8 text-black" type="text" placeholder="9876543210" />
              </div>
            </div>
            <div style={{marginBottom:'10rem'}}>
              <div className="text-[1.25rem] font-[200] mb-1">Your Message</div>
              <div className="relative">
                <div style={{borderRadius:'4px',backgroundColor:'#3ACBBC'}} className="absolute top-2 left-2 w-full h-32"></div>
                <textarea style={{borderRadius:'4px'}} className="absolute top-0 left-0 text-black pt-2 w-full h-32 pl-8" placeholder="Click here to type"></textarea>
              </div>
            </div>
            <div className="mb-8 text-sm">
              <input type="checkbox" className="mr-2" />
              I authorize GrowthSchool and its representative to contact me with updates and notifications via Email, SMS, Whatsapp, and Call. This will override the registry on DND / NDNC.
            </div>
            <div className="relative">
              <div style={{backgroundColor:'#3ACBBC',borderRadius:'4px'}} className="absolute top-2 left-2 w-full h-10"></div>
              <button style={{backgroundColor:'#242A3B',borderRadius:'4px'}} className="absolute top-0 left-0 w-full h-10">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
