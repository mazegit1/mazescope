"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BsSearch } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";  // Import Hamburger Icon
import { IoClose } from "react-icons/io5";  // Import Close Icon
import profileimg from '@/images/profile-image.png';

const Index: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);  // State to control the menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`header z-50 text-white fixed w-full flex items-center justify-between px-6 lg:px-36 py-6 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="header-left">
          <Link href="/" className='text-4xl font-bold'>MazeScope</Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden">
          {!isMenuOpen ? (
            <GiHamburgerMenu
              className="text-3xl clicked:hidden cursor-pointer"
              onClick={toggleMenu}  // Toggle the menu when clicked
            />
          ) : (
            <IoClose
              className="text-3xl cursor-pointer"
              onClick={toggleMenu}  // Close the menu when clicked
            />
          )}
        </div>

        {/* Menu items for larger screens */}
        <div className="header-right hidden lg:flex items-center gap-20">
          <div className="links gap-8 flex items-center text-2xl font-semibold">
            <Link className='hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:transition-all hover:underline ease-in-out duration-200' href="/movies">Movies</Link>
            <Link className='hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:transition-all hover:underline ease-in-out duration-200' href="/tv-series">TV Series</Link>
            <Link className='hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:transition-all hover:underline ease-in-out duration-200' href="/documentary">Documentaries</Link>
          </div>
          <div className="settings text-3xl flex items-center gap-8">
            <BsSearch />
            <IoNotificationsOutline />
            <Link href="/profile">
              <Image src={profileimg} alt='profile img' />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all ease-in-out duration-500 ${isMenuOpen ? 'block' : 'hidden'} fixed top-0 left-0 w-full h-full bg-black/50 z-50`}
        onClick={() => setIsMenuOpen(false)}  // Close menu when clicked outside
      >
        <div className="flex flex-col items-center justify-center h-full text-white">
          {/* Close icon inside the mobile menu */}
          <IoClose
            className="absolute top-4 right-4 text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen(false)}  // Close the menu when the close icon is clicked
          />
          <Link href="/movies" className="text-2xl py-4" onClick={() => setIsMenuOpen(false)}>Movies</Link>
          <Link href="/tv-series" className="text-2xl py-4" onClick={() => setIsMenuOpen(false)}>TV Series</Link>
          <Link href="/documentary" className="text-2xl py-4" onClick={() => setIsMenuOpen(false)}>Documentaries</Link>
        </div>
      </div>
    </>
  );
};

export default Index;
