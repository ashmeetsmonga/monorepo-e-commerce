import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-[30rem] w-full">
      <div className="absolute left-0 top-0 h-full w-full">
        <Image
          src="/images/hero.jpg"
          alt="hero"
          fill
          objectFit="cover"
          className=""
          priority
        />
      </div>
      <div className="relative z-10 flex h-full flex-col justify-center p-10 text-4xl font-extrabold uppercase text-black">
        Stylist pick beats the heat
      </div>
    </div>
  );
};

export default HeroSection;
