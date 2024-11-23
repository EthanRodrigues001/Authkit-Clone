"use client";

import { Spotlight } from "@/components/spotlight";
import Particles from "@/components/ui/particles";
import Image from "next/image";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { BorderBeam } from "@/components/ui/border-beam";
import { PullUpAnimation } from "@/components/pull-up-animation";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#05060f] text-white overflow-hidden">
      {/* Spotlights */}
      {/* <Spotlight
        className="absolute -top-40 left-0 md:left-1/4 md:-top-20 transform -translate-x-1/2"
        fill="white"
      /> */}
      <Spotlight
        className="-top-40 left-0 md:left-[75%] md:-top-20"
        fill="hsl(217, 91%, 65%, 0.45)"
      />
      <Spotlight
        className="-top-40 left-0 md:right-[75%] md:-top-20"
        fill="hsl(217, 91%, 60%, 0.2)"
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid grid-cols-[1fr_1px_70px_1px_70px_1px_70px_1px_370px_1px_70px_1px_70px_1px_70px_1px_1fr] grid-rows-[1px_105px_1px_70px_1px_70px_1px_135px_1px_85px_1px_540px_1px_110px]">
        {/* Vertical lines */}
        {[2, 4, 6, 8, 10, 12, 14, 16].map((col) => (
          <div
            key={`v-${col}`}
            className="row-span-full bg-gradient-to-b from-transparent via-gray-700/50 to-transparent"
            style={{
              gridColumn: col,
              opacity: col === 2 || col === 16 ? 0.5 : 1,
            }}
          />
        ))}

        {/* Horizontal lines */}
        {[1, 3, 5, 7, 9, 11, 13].map((row) => (
          <div
            key={`h-${row}`}
            className="col-span-full bg-gradient-to-r from-transparent via-gray-700/50 to-transparent"
            style={{
              gridRow: row,
              opacity: row === 1 || row === 13 ? 0.75 : 1,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-[1fr_1px_70px_1px_70px_1px_70px_1px_370px_1px_70px_1px_70px_1px_70px_1px_1fr] grid-rows-[1px_105px_1px_70px_1px_70px_1px_135px_1px_85px_1px_540px_1px_110px] min-h-screen">
        {/* Introducing */}
        <div className="col-start-6 col-end-12 row-start-6 row-end-7 flex items-center justify-center">
          <PullUpAnimation>
            <span className="text-gray-400 text-lg">Introducing</span>
          </PullUpAnimation>
        </div>

        {/* Cross markers */}
        <div className="col-start-5 col-end-6 row-start-6 row-end-7 flex items-center justify-center text-gray-600">
          ×
        </div>
        <div className="col-start-13 col-end-14 row-start-6 row-end-7 flex items-center justify-center text-gray-600">
          ×
        </div>

        {/* Logo */}

        <div className="col-start-7 col-end-12 row-start-8 row-end-9 flex items-center justify-center relative">
          {/* Glow effect */}
          <PullUpAnimation>
            <div className="absolute inset-0 bg-blue-500/15 filter blur-3xl"></div>
            <div className="relative">
              <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#85A7FA] to-[#AAC4FF] bg-clip-text text-transparent">
                AuthKit
              </h1>
              <AnimatedShinyText className="absolute inset-0 text-7xl md:text-8xl font-bold pointer-events-none">
                AuthKit
              </AnimatedShinyText>
            </div>
          </PullUpAnimation>
        </div>

        {/* Tagline */}
        <div className="col-start-7 col-end-12 row-start-10 row-end-11 flex flex-col items-center justify-center text-center">
          <PullUpAnimation>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              The world&apos;s best login box,
              <br />
              powered by WorkOS + Radix.
            </p>
          </PullUpAnimation>
        </div>

        {/* Auth Cards */}
        <div className="pt-6 col-start-[2] col-end-[17] row-start-12 row-end-[14]">
          <div className=" relative bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 border border-gray-800 w-full aspect-video">
            <BorderBeam colorFrom="#ffffff" colorTo="transparent" size={400} />
            {/* Corner dots */}
            <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-gray-500 rounded-full" />
            <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-gray-500 rounded-full" />
            <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-gray-500 rounded-full" />
            <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-gray-500 rounded-full" />

            {/* Content */}
            <div className="relative w-full h-full">
              <Image
                src="/image.png"
                alt="SuperApp Dashboard Preview"
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)] pointer-events-none" />
      <Particles
        className="absolute inset-0"
        quantity={200}
        ease={100}
        color="#ffffff"
        size={0.05}
        refresh
      />
    </section>
  );
}
