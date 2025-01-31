"use client";

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { Button } from "@/components/ui/moving-border";
import aditya from "@/components/assets/aditya.jpeg";
import amar from "@/components/assets/amar.jpeg";
import ananya from "@/components/assets/Ananya3.jpeg";
import astha from "@/components/assets/astha11.jpeg";
import kajal from "@/components/assets/kajal6.jpeg";
import byuti from "@/components/assets/byuti.jpeg";
import mithalesh from '@/components/assets/mithalesh9.jpeg';
import kundan from '@/components/assets/kundan1.jpeg';
import FeatureSection from "@/components/LandingPageContent/Featured";
import SuccessStory from "@/components/LandingPageContent/SuccessStory";
import Goal from '@/components/LandingPageContent/Goal'
import FAQ from "@/components/LandingPageContent/FAQ";
import Footer from "@/components/LandingPageContent/Footer";
export default function Page() {
  const people = [
    {
      id: 1,
      name: "Mithalesh",
      designation: "Software Engineer",
      image: mithalesh,
    },
    {
      id: 2,
      name: "kundan",
      designation: "Software Engineer",
      image: kundan,
    },
    {
      id: 3,
      name: "Kajal",
      designation: "Software Engineer",
      image: kajal,
    },
    {
      id: 4,
      name: "Amar",
      designation: "Software Engineer",
      image: amar,
    },
    {
      id: 5,
      name: "Ananya",
      designation: "Software Engineer",
      image: ananya,
    },
    {
      id: 6,
      name: "Byuti",
      designation: "Software Engineer",
      image: byuti,
    },
    {
      id: 7,
      name: "Astha",
      designation: "Software Engineer",
      image: astha,
    },
    {
      id: 8,
      name: "Aditya",
      designation: "Software Engineer",
      image: aditya,
    }
  ];


  return (
    
    <div className="relative px-8 w-screen  dark:bg-[#141A21] bg-white overflow-hidden flex  items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 dark:bg-grid-white/[0.16] bg-grid-black/[0.04]"></div>
      {/* Radial Gradient Mask */}
      <div className="absolute inset-0 pointer-events-none dark:bg-[#141A21] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 dark:bg-gradient-to-r from-[#141A21] via-[#141A20] to-[#d8591e] opacity-50"></div>
        <div className="absolute inset-0 dark:bg-gradient-to-l from-[#141A21] via-transparent to-transparent"></div>

      </div>

      {/* Floating Dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-4 h-4 bg-green-500 rounded-full absolute top-8 left-3/4 animate-float"></div>
        <div className="w-4 h-4 bg-red-500 rounded-full absolute top-1/2 right-3/4 animate-float"></div>
        <div className="w-4 h-4 bg-yellow-500 rounded-full absolute top-1/4 left-1/4 animate-ping"></div>
        <div className="w-4 h-4 bg-purple-500 rounded-full absolute top-1/2 right-1/3 animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full absolute top-2/3 left-1/3 animate-spin"></div>
      </div>

      {/* Main Content */}
      <div className="z-10 text-center mt-36">
        <p className="text-4xl sm:text-7xl font-bold text-slate-900 dark:text-slate-100 leading-relaxed tracking-wide">
          Elevate Your Skills <br /> with
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-400">
            Mockskills
          </span>
        </p>

        <p className="mt-4 text-lg dark:text-gray-300 text-gray-700">
          Boost your career with expert courses, AI tools, and community support through CollabZone and BattleGround!
        </p>

        <div className="mt-6 flex justify-center space-x-4">
          <Button
            duration={4000}
            className="border-none dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 font-bold shadow-lg"
          >
            Get Started
          </Button>
          <Button
            duration={4000}
            className="border-none dark:text-white text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-bold shadow-lg"
          >
            Learn More
          </Button>


        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mt-10">
          {/* Tooltip Section */}
          <div className="flex flex-row items-center">
            <AnimatedTooltip items={people} />
          </div>

          {/* Text Section */}
          <small className="text-gray-500">
            160K+ Happy Learners
          </small>
        </div>
        <FeatureSection />
        <Goal />
        <SuccessStory />
        <FAQ />
        <Footer />
      </div>

    </div>

  );
}
