import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 font-serif">
      <div className="relative mx-auto h-60 max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8 lg:pt-16">
        <div className="lg:flex lg:items-end lg:justify-between ">
          <div>
            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white lg:text-left">
              [Cafe Name] Copyright © 2024 All rights reserved
            </p>
          </div>

          <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
            <li>
              <a
                className="text-white transition hover:text-white/75"
                href="#"
              >
               
                Home
              </a>
            </li>

            <li>
              <a
                className="text-white transition hover:text-white/75"
                href="#"
              >
              
               Book a table
              </a>
            </li>

            <li>
              <a
                className="text-white transition hover:text-white/75"
                href="#"
              >
               
                Restaurent menu
              </a>
            </li>

            <li>
              <a
                className="text-white transition hover:text-white/75"
                href="#"
              >
                
                About
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-12 text-center text-sm text-white lg:text-right">
          Copyright &copy; 2022. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
