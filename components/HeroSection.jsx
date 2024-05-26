import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css';

const HeroSection = () => {
  return (
    <div className="relative h-[500px] py-24 sm:py-32">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/headerimage.jpg"
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="flex justify-center text-center relative z-10">
        <div className="mx-auto max-w-4xl animate-fade-in-up">
          <h2 className="text-4xl font-bold tracking-tight drop-shadow-2xl text-white sm:text-6xl font-serif animate-bounce-in">
            Your Daily Dose of Delight
          </h2>
          <p className="mt-6 text-lg font-serif leading-8 text-gray-100 animate-fade-in-up">
            Wonderful coffee with Wonderful People
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
