import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Banner data
const banners = [
  {
    image: '/banner1.png',
    title: 'Find Your Perfect Match with Viraag',
    subtitle: 'Join thousands of singles ready to spark a meaningful connection.',
    cta: 'Start Your Journey',
  },
  {
    image: '/banner2.png',
    title: 'Love Awaits You on Viraag',
    subtitle: 'Discover love and companionship with our smart matching system.',
    cta: 'Join Now',
  },
];

const BannerSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative max-w-[1300px] mx-auto h-[25vh] sm:h-[50vh] md:h-[70vh] min-h-[300px] overflow-hidden rounded-2xl md:rounded-3xl shadow-lg">
    <div
      className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
      style={{ transform: `translateX(-${currentSlide * 100}%)` }}
    >
      {banners.map((banner, index) => (
        <div
          key={index}
          className="relative flex justify-center items-center min-w-full h-full"
        >
          {/* Responsive Banner Image */}
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            className="object-cover rounded-2xl md:rounded-3xl brightness-75"
            priority={index === 0}
          />
  
          {/* Heart Icon */}
          <div className="absolute bottom-6 left-6 w-8 h-8 md:w-12 md:h-12 opacity-60 animate-pulse">
            <Image
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ffffff'%3E%3Cpath d='M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z'/%3E%3C/svg%3E"
              alt="heart"
              width={48}
              height={48}
            />
          </div>
        </div>
      ))}
    </div>
  
    {/* Navigation Dots */}
    <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3">
      {banners.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
            currentSlide === index ? "bg-rose-500 scale-125" : "bg-white/50"
          } hover:bg-rose-400 transition-all duration-300`}
        />
      ))}
    </div>
  </section>
  
  
  );
};

export default BannerSlider;