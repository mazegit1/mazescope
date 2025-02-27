import home1 from '@/images/Home page/home1.svg';
import home2 from '@/images/Home page/home2.svg';
import home3 from '@/images/Home page/home3.svg';
import home4 from '@/images/Home page/home4.svg';
import home5 from '@/images/Home page/home5.svg';
import home6 from '@/images/Home page/home6.svg';
import home7 from '@/images/Home page/home7.svg';
import home8 from '@/images/Home page/home8.svg';
import home9 from '@/images/Home page/home9.svg';
import home10 from '@/images/Home page/home10.svg';
import home11 from '@/images/Home page/home11.svg';
import home12 from '@/images/Home page/home12.svg';
import home13 from '@/images/Home page/home13.svg';
import home14 from '@/images/Home page/home14.svg';
export interface CardData {
  image: string;
  description: string;
  rating: number;
  name: string;
}

// Mock data for the cards
export const mockData: CardData[] = [
  {
    image: home1,
    description: "A gripping action-packed adventure of a hero fighting against overwhelming odds.",
    rating: 4.5,
    name: "Mad Max: Fury Road"
  },
  {
    image: home2,
    description: "A heartwarming story about the struggles and triumphs of a young artist.",
    rating: 3.8,
    name: "La La Land"
  },
  {
    image: home3,
    description: "A mind-bending thriller that delves into the depths of human consciousness.",
    rating: 4.0,
    name: "Inception"
  },
  {
    image: home4,
    description: "A powerful tale of resilience and hope amidst the horrors of war.",
    rating: 5.0,
    name: "Schindler's List"
  },
  {
    image: home5,
    description: "An epic fantasy adventure about a young wizard's journey to save the world.",
    rating: 4.2,
    name: "Harry Potter and the Sorcerer's Stone"
  },
  {
    image: home6,
    description: "A comedic take on the ups and downs of family life in a fast-paced world.",
    rating: 3.9,
    name: "The Incredibles"
  },
  {
    image: home7,
    description: "A thought-provoking exploration of artificial intelligence and its impact on society.",
    rating: 4.7,
    name: "Ex Machina"
  },
  {
    image: home8,
    description: "A lighthearted romantic comedy about two people finding love in unexpected places.",
    rating: 3.5,
    name: "Notting Hill"
  },
  {
    image: home9,
    description: "A terrifying journey through the supernatural, as a group of friends face their worst fears.",
    rating: 4.1,
    name: "The Conjuring"
  },
  {
    image: home10,
    description: "An emotional rollercoaster about the bond between a father and his daughter.",
    rating: 4.3,
    name: "The Pursuit of Happyness"
  },
  {
    image: home11,
    description: "A fast-paced, action-packed thriller that keeps you on the edge of your seat.",
    rating: 3.7,
    name: "The Dark Knight"
  },
  {
    image: home12,
    description: "A charming animated movie that takes us on a journey through the whimsical world of toys.",
    rating: 4.6,
    name: "Toy Story"
  },
  {
    image: home13,
    description: "A groundbreaking film that redefines the science fiction genre with stunning visual effects.",
    rating: 4.4,
    name: "Avatar"
  },
  {
    image: home14,
    description: "A thrilling detective story about an investigator solving a complex mystery.",
    rating: 4.8,
    name: "Sherlock Holmes"
  }
];



