
import React from "react";
import Link from "next/link";
import About from "@/app/about/page";


export default function Home() {
  return (
    <>
    <div>
    <section
          id="features"
          className="relative block px-6 py-10 md:py-10 md:px-10 border-t border-b border-neutral-900 bg-neutral-900/30"
        ><div
        className="absolute top-0 left-0 z-0 h-1/3 w-full "
        style={{
          backgroundImage:
            "linear-gradient(to left bottom, rgba(79, 70, 229, 0.2) 0%, transparent 50%, transparent 100%)",
          borderColor: "rgba(92, 79, 240, 0.2)",
        }}
      ></div>
      <div
        className="absolute top-0 right-0 z-0 h-1/3 w-full"
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, rgba(220, 38, 38, 0.2) 0%, transparent 50%, transparent 100%)",
          borderColor: "rgba(92, 79, 240, 0.2)",
        }}
      ></div>
</section>
    
    <div className="flex justify-center flex-col gap-4 items-center text-white h-[75vh] px-5 md:px-0">
      <div className="font-bold flex gap-2 md:text-5xl text-4xl justify-center items-center">Fuel Me Up <span><img src="fueling.gif" width={65} alt="" /></span></div>
      <p className="text-center">
        A crowdfunding platform for creators to fund their projects.
      </p>
      <p className="text-center">
        A place where your fans can fuel you up. Unleash the power of your fans and get your project funded.
      </p>
      
      <div>
        <Link href={"/login"}>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-slate-950 rounded-md group-hover:bg-opacity-0">
            Start Here
          </span>
        </button>
        </Link>
        <Link href={"/about"}>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-slate-950 rounded-md group-hover:bg-opacity-0">
            Read More
          </span>
        </button>
        </Link>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10">
    </div>
    <div className="text-white container mx-auto pb-32 pt-14 px-10">
      <h2 className="text-2xl font-bold text-center mb-14">Your Fans Can Fuel You Up</h2>
      <div className="flex gap-5 justify-around">
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" src="/man.gif" width={90} alt="" />
          <p className="font-bold text-center">Fans want to Help</p>
          <p className="text-center">Your Fans Are Available to Support You.</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" src="/dollar.gif" width={90} alt="" />
          <p className="font-bold text-center">Fans want to contribute</p>
          <p className="text-center">Your Fans Are willing to contribute financially.</p>
        </div>
        <div className="item space-y-3 flex flex-col items-center justify-center">
          <img className="bg-slate-400 rounded-full p-2 text-black" src="/group.gif" width={90} alt="" />
          <p className="font-bold text-center">Fans want to Collabrate</p>
          <p className="text-center">Your Fans Are ready to Collabrate with you</p>
        </div>
      </div>
    </div>
    <div className="bg-white h-1 opacity-10">
    </div>

    <div className="text-white container mx-auto py-16">
      <h2 className="text-2xl font-bold text-center mb-14">Learn More About Us</h2>
      <div className="px-1 md:px-5 mt-12">
      <p className="p-4 text-gray-200 text-md text-center font-sans">At Fuel Me Up, we are dedicated to supporting developers, creators, and influencers by connecting them with their supporters. Our platform enables individuals to fund their projects and ideas, providing a space where creativity and innovation can thrive.
      </p>
      <p className="p-4 text-gray-200 text-md text-center font-sans">Our mission is to empower talented individuals by facilitating financial support, allowing them to focus on what they do best – creating. Whether you're a developer coding the next big app, a content creator making engaging videos, or an influencer sharing your passion, Fuel Me Up is here to help you achieve your goals.
      </p>
      <p className="p-4 text-gray-200 text-md text-center font-sans">We believe in the power of community and the impact of collective support. By providing a platform for patrons to contribute, we aim to transform dreams into reality and foster a culture of creativity and innovation.
      </p>
      </div>
    </div>
    
    </div>
    </>
  );
}

