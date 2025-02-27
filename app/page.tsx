import React from 'react';
import { mockData } from '@/app/mockdata'; // Adjust the path based on your actual file structure
import Image from 'next/image';
import { FaStar, FaPlay } from "react-icons/fa"; // Added FaPlay icon for play button
import Link from 'next/link'; // For navigation
import poster from '@/images/poster.jpg'
import { FaRegPlayCircle } from "react-icons/fa";
import sponsor1 from '@/images/Sponsors/sponsor1.png'
import sponsor2 from '@/images/Sponsors/sponsor2.png'
import sponsor3 from '@/images/Sponsors/sponsor3.png'
import sponsor4 from '@/images/Sponsors/sponsor4.png'
import sponsor5 from '@/images/Sponsors/sponsor5.png'
import News from '@/components/parts/News';
import Permission from '@/components/parts/Permission';
interface Item {
  name: string;
  description: string;
  image: string;
  rating: number;
}

const shuffleArray = (array: Item[]): Item[] => { // Specify the type for the array parameter
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
};

const Page = () => {  
  return (
    <>
      <div className="home">
      <div className="home-main h-screen text-white py-20 sm:py-32 md:py-44 px-8 sm:px-12 md:px-24 lg:px-44 relative">
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${poster.src})` }} // Using Next.js image path
  />
  <div className="relative flex flex-col items-start gap-6 z-10">
    <h3 className='bg-[#0B2868] px-8 rounded-md py-2 text-xl font-semibold sm:text-lg'>
      Live
    </h3>
    <h1 className='text-4xl font-semibold sm:text-6xl md:text-7xl lg:text-8xl'>
      Squid Game 1 Season
    </h1>
    <div className="info flex items-center md:gap-3 gap-2 xl:gap-4 text-lg sm:text-base">
      <p>September 17, 2021</p>
      <p>|</p>
      <p>Hwang Dong-hyuk</p>
      <p>|</p>
      <p>9 episodes</p>
    </div>
    <h3 className='text-lg sm:text-base md:text-lg text-gray-300'>
      It revolves around a secret contest where 456 players, all of whom are in deep financial hardship, risk their lives to play a series
      <br />
      of deadly children's games for the chance to win a ₩45.6 billion cash prize, ₩100 million per contestant.
    </h3>
    <div className="navigation flex items-center gap-6 sm:gap-4 py-4 xl:py-6">
      <Link
        href="/movies"
        className="flex items-center gap-3 bg-red-600 text-white text-xl sm:text-lg md:text-2xl w-fit px-4 md:py-2 xl:px-8 rounded-md shadow-xl py-1 md:px-6 xl:py-3 hover:bg-white hover:text-red-500 transition-all ease-in-out duration-200 border border-red-500"
      >
        <FaRegPlayCircle className="mt-1" />
        Watch
      </Link>
      <Link
        href="/"
        className="flex items-center gap-3 bg-gray-500 text-white text-xl sm:text-lg md:text-2xl w-fit px-4 md:py-2 xl:px-8 rounded-md shadow-xl py-1 md:px-6 xl:py-3 hover:bg-white hover:text-gray-500 transition-all ease-in-out duration-200 border border-gray-500"
      >
        <FaRegPlayCircle className="mt-1" />
        Watch
      </Link>
    </div>
    <div className="sponsors  hidden mt-20 xl:flex md:flex  justify-center gap-8">
  <Image src={sponsor1} alt="sponsor 1" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
  <Image src={sponsor2} alt="sponsor 2" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
  <Image src={sponsor5} alt="sponsor 5" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
  <Image src={sponsor3} alt="sponsor 3" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
  <Image src={sponsor4} alt="sponsor 4" className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" />
</div>

  </div>
</div>

      <News/>
        <div className="films-wrapper">
        <div className="films bg-[#010F29] pt-48">
          <div className="title text-white text-start flex flex-col px-36 items-start gap-4 mb-8">
            <h1 className="text-4xl font-semibold">TRENDING CONTENT</h1>
            <div className="line w-20 h-[5px]  bg-red-500"></div>
          </div>
          <div className="cards px-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shuffleArray(mockData).map((item, index) => (
              <div key={index} className="card bg-transparent text-white border border-purple-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative">
                <Image
                  src={item.image}
                  alt={`Home ${index + 1}`}
                  className="card-image w-full h-96 object-cover"
                />
                <Link href="/video-player" className="card-overlay absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  
                    <FaPlay className="text-7xl text-purple-500 transition-colors" />
                  
                </Link>
                <div className="card-content p-4">
                  <h1 className='text-3xl font-semibold'>{item.name}</h1>
                  <p className="description text-sm text-gray-300">{item.description}</p>
                  <div className="rating mt-2">
                    <span className="text-yellow-500 flex items-center text-xl gap-4 font-semibold">
                      <FaStar /> Rating: {item.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="films bg-[#010F29] pt-48">
          <div className="title text-white text-start flex flex-col px-36 items-start gap-4 mb-8">
            <h1 className="text-4xl font-semibold">FEATURED BY SYSTEM</h1>
            <div className="line w-20 h-[5px]  bg-red-500"></div>
          </div>
          <div className="cards px-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shuffleArray(mockData).map((item, index) => (
              <div key={index} className="card bg-transparent text-white border border-purple-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative">
                <Image
                  src={item.image}
                  alt={`Home ${index + 1}`}
                  className="card-image w-full h-96 object-cover"
                />
                <Link href="/video-player" className="card-overlay absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  
                    <FaPlay className="text-7xl text-purple-500 transition-colors" />
                  
                </Link>
                <div className="card-content p-4">
                  <h1 className='text-3xl font-semibold'>{item.name}</h1>
                  <p className="description text-sm text-gray-300">{item.description}</p>
                  <div className="rating mt-2">
                    <span className="text-yellow-500 flex items-center text-xl gap-4 font-semibold">
                      <FaStar /> Rating: {item.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="films bg-[#010F29] pt-48">
          <div className="title text-white text-start flex flex-col px-36 items-start gap-4 mb-8">
            <h1 className="text-4xl font-semibold">MOST WATCHED</h1>
            <div className="line w-20 h-[5px]  bg-red-500"></div>
          </div>
          <div className="cards px-36 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {shuffleArray(mockData).map((item, index) => (
              <div key={index} className="card bg-transparent text-white border border-purple-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative">
                <Image
                  src={item.image}
                  alt={`Home ${index + 1}`}
                  className="card-image w-full h-96 object-cover"
                />
                <Link href="/video-player" className="card-overlay absolute inset-0 bg-black bg-opacity-80 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <FaPlay className="text-7xl text-purple-500 transition-colors" />
                </Link>
                <div className="card-content p-4">
                  <h1 className='text-3xl font-semibold'>{item.name}</h1>
                  <p className="description text-sm text-gray-300">{item.description}</p>
                  <div className="rating mt-2">
                    <span className="text-yellow-500 flex items-center text-xl gap-4 font-semibold">
                      <FaStar /> Rating: {item.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
      <Permission/>
    </>
  );
};

export default Page;
