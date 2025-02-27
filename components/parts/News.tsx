'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import news1 from '@/images/News/news1.svg';
import news2 from '@/images/News/news2.svg';
import news3 from '@/images/News/news3.svg';
import news4 from '@/images/News/news4.svg';
import news5 from '@/images/News/news5.svg';
import news6 from '@/images/News/news6.svg';

// Define the type for a news item
interface NewsItem {
  image: string;
  name: string;
  description: string;
  category: string;
}

// News data array with categories
const newsData: NewsItem[] = [
  { image: news1, name: 'AI Revolution', description: 'How AI is changing the tech world.', category: 'Tech' },
  { image: news2, name: 'SpaceX Updates', description: 'Latest developments in space technology.', category: 'Tech' },
  { image: news3, name: 'Stock Market Surge', description: 'Business trends and market insights.', category: 'Business' },
  { image: news4, name: 'Cultural Shifts', description: 'How culture is evolving in the modern age.', category: 'Culture' },
  { image: news5, name: 'Tech Innovations', description: 'New gadgets and breakthroughs in tech.', category: 'Tech' },
  { image: news6, name: 'Green Energy', description: 'The rise of renewable energy solutions.', category: 'Business' },
];

// Function to shuffle an array
const shuffleArray = (array: NewsItem[]): NewsItem[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

// NewsCard component
const NewsCard: React.FC<NewsItem> = ({ image, name, description }) => {
  return (
    <div className="bg-transparent cursor-pointer border border-purple-500 rounded-md hover:scale-105 transition-all ease-in-out duration-200">
      <Image src={image} alt={name} className="w-full h-56 object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-4 text-purple-300 px-4 py-2">{name}</h2>
      <p className="text-gray-300 mt-2 px-4 py-2">{description}</p>
    </div>
  );
};

// Main News Component
const News: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Related News');
  const [shuffledNews, setShuffledNews] = useState<NewsItem[]>(newsData);

  // Run randomization only on the client
  useEffect(() => {
    setShuffledNews(shuffleArray(newsData));
  }, []);

  // Update the news when the category is changed
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setShuffledNews(
      shuffleArray(category === 'Related News' ? newsData : newsData.filter((news) => news.category === category))
    );
  };

  return (
    <div className="news py-14 px-32 text-white text-xl font-semibold bg-[#031641]">
      {/* Category Selection */}
      <div className="news-changing flex flex-col gap-8">
        <div className="text flex items-center gap-6">
          {['Related News', 'Tech', 'Business', 'Culture'].map((category) => (
            <h1
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`text-3xl cursor-pointer transition-colors duration-200 ${
                selectedCategory === category ? 'text-purple-500' : 'hover:text-gray-300'
              }`}
            >
              {category}
            </h1>
          ))}
        </div>
        <hr />
      </div>

      {/* News Cards Section */}
      <div className="news-cards grid grid-cols-6 gap-6 mt-8">
        {shuffledNews.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
  );
};

export default News;
