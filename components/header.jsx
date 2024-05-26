"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiGooglemaps } from 'react-icons/si';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineLocalPhone } from 'react-icons/md';
import { useSpring, animated } from '@react-spring/web';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuAnimation = useSpring({
    transform: menuOpen ? 'translateY(0%)' : 'translateY(-100%)',
    opacity: menuOpen ? 1 : 0,
  });

  const offsetValue = -100; // Adjust this value as needed to balance the sections

  return (
    <header className="bg-white sticky top-0 z-50 shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="#">
              <span className="sr-only">Cafe Name</span>
              <Image
                src="/assets/logo (2).png"
                alt="Cafe Name"
                width={128}
                height={128}
                className="h-32 mt-2 w-auto"
              />
            </Link>
          </div>
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-md font-semibold font-sans">
                <li>
                  <ScrollLink
                    activeClass="text-teal-600"
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={500}
                    className="cursor-pointer transition hover:opacity-75"
                  >
                    Home
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    activeClass="text-teal-600"
                    to="booking"
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={500}
                    className="cursor-pointer transition hover:opacity-75"
                  >
                    Book A table
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    activeClass="text-teal-600"
                    to="menu"
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={500}
                    className="cursor-pointer transition hover:opacity-75"
                  >
                    Restaurant Menu
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    activeClass="text-teal-600"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={500}
                    className="cursor-pointer transition hover:opacity-75"
                  >
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink
                    activeClass="text-teal-600"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={offsetValue}
                    duration={500}
                    className="cursor-pointer transition hover:opacity-75"
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-1">
              <div className="sm:flex sm:gap-1">
                <Link className="rounded-md px-5 py-2.5 text-lg font-medium" href="#">
                  <SiGooglemaps className="inline-block h-5 w-5" />
                </Link>

                <div className="hidden sm:flex">
                  <Link className="rounded-md px-5 py-4 text-xl font-medium" href="#">
                    <MdOutlineLocalPhone />
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="rounded p-2 h-[16px] text-gray-600 transition hover:text-gray-600/75"
                >
                  <RxHamburgerMenu />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {menuOpen && (
        <animated.div
          style={menuAnimation}
          className="fixed inset-0 z-40 bg-white bg-opacity-95 p-8 flex flex-col items-center justify-center"
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-600 text-2xl"
          >
            &times;
          </button>
          <ul className="flex flex-col gap-6 text-xl font-semibold font-sans text-center">
            <li>
              <ScrollLink
                to="hero"
                spy={true}
                smooth={true}
                offset={offsetValue}
                duration={500}
                className="cursor-pointer transition hover:opacity-75"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="booking"
                spy={true}
                smooth={true}
                offset={offsetValue}
                duration={500}
                className="cursor-pointer transition hover:opacity-75"
                onClick={() => setMenuOpen(false)}
              >
                Book A table
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="menu"
                spy={true}
                smooth={true}
                offset={offsetValue}
                duration={500}
                className="cursor-pointer transition hover:opacity-75"
                onClick={() => setMenuOpen(false)}
              >
                Restaurant Menu
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                spy={true}
                smooth={true}
                offset={offsetValue}
                duration={500}
                className="cursor-pointer transition hover:opacity-75"
                onClick={() => setMenuOpen(false)}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                spy={true}
                smooth={true}
                offset={offsetValue}
                duration={500}
                className="cursor-pointer transition hover:opacity-75"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </animated.div>
      )}
    </header>
  );
}
