import React from "react";
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="bg-purple-100 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2 pb-12 md:pb-0">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-start font-serif">ABOUT US</h2>
            <hr className="w-24 h-1.5 bg-gray-100 border-0 rounded md:my-1 dark:bg-gray-700" />
          </div>
          <p className="text-xl font-medium font-serif">
            Welcome to [Cafe Name], where passion for coffee meets an extraordinary experience. Nestled in the heart of the city, our cafe is more than just a place to grab a cup of coffee—it's a destination for true coffee lovers who seek quality, ambiance, and a sense of community.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center rounded shadow-2xl">
          <Image src="/assets/abt.jpg" alt="About Us" width={750} height={500} className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
