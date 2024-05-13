"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbMenu } from "react-icons/tb";
import { CiMail, CiInstagram } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

import Logo from "../../../public/logo.png"; // Update the path to your image file
let isScrolled = false;

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <header className="sticky bg-black top-0 z-30 flex w-full py-6 items-center justify-between p-4 navigation ">
      <div className="flex items-center justify-center px-4">
        {/* Hamburger menu */}
        <div className="hamburger-container " onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-[#1b152d] z-40 transition-transform ease-in-out duration-300 ${
          isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center text-white h-screen space-y-8 text-4xl font-bold tracking-wide lg:text-6xl xl:text-7xl">
          <Link href="./">
            <p className="headerLink" onClick={toggleMenu}>
              STARTSEITE
            </p>
          </Link>
          <Link href="./about">
            <p className="headerLink" onClick={toggleMenu}>
              HIGHLIGHTS
            </p>
          </Link>
          <Link href="./projects">
            <p className="headerLink" onClick={toggleMenu}>
              LAGE
            </p>
          </Link>
          <Link href="./contact">
            <p className="headerLink" onClick={toggleMenu}>
              WOHNUNGEN
            </p>
          </Link>
          <Link href="./contact">
            <p className="headerLink" onClick={toggleMenu}>
              KONTAKT
            </p>
          </Link>
          {/* Add more menu items as needed */}
          <RxCross1
            className="h-10 w-10 cursor-pointer absolute text-white  transition-transform ease-in-out duration-300 top-4 left-4"
            onClick={toggleMenu}
          />
        </div>
      </div>
      <div className="flex-1 items-center justify-center flex">
        <Link href="/">
          <div className="relative h-10 cursor-pointer opacity-100 transition">
            <Image
              alt="logo"
              src={Logo}
              width={50}
              height={100}
              objectFit="contain"
            />
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-x-5 md:gap-x=8">
        <div className="text-4xl text-white icon">
          <a href="https://www.instagram.com/mariawaseem_arts/" target="_blank">
            <CiInstagram />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
