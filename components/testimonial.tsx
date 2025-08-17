import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Testimonial data with Indian names and placeholder images
const testimonials = [
  {
    name: "Priya Sharma",
    photo: "https://images.unsplash.com/photo-1622049605334-72e1e4432346?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "I found my soulmate here! The matches were so accurate, and the journey was filled with joy and excitement!",
  },
  {
    name: "Rahul Verma",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "This app made meeting new people effortless. I love how easy it is to connect with someone special!",
  },
  {
    name: "Ananya Patel",
    photo: "https://images.unsplash.com/photo-1706943262117-b35de4ba50b4?q=80&w=701&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "The best dating experience! I met my partner, and every moment on this platform was magical!",
  },
  {
    name: "Vikram Singh",
    photo: "https://plus.unsplash.com/premium_photo-1664303624234-376552c48cfa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quote: "The matching algorithm is incredible. I found someone who truly understands me!",
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000); // Change slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto py-16 px-6 overflow-hidden">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-[36px] font-extrabold tracking-tight">
          Love Stories from Our Users
        </h2>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover how our platform has brought hearts together across India
        </p>
      </div>

      {/* Slider Container */}
      <div className="relative">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {testimonials.map((testimonial, expressiveIndex) => (
            <div key={expressiveIndex} className="min-w-full flex justify-center">
              <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-rose-50 via-[#cc3a4b19] to-pink-50 rounded-2xl  max-w-5xl w-full mx-4 p-8 transform  transition-transform duration-500">
                {/* Left: Photo */}
                <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
                  <div className="relative w-32 h-32 md:w-48 md:h-48">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover border-8 border-pink-200 shadow-lg transform hover:rotate-3 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-full border-4 border-dashed border-pink-300 opacity-50 animate-spin-slow"></div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="md:w-2/3 text-center md:text-left pl-0 md:pl-8">
                  <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <h3 className="text-[20px] font-semibold text-primary">
                    {testimonial.name}
                  </h3>
                  <div className="mt-4 h-[2px] w-24 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto md:mx-0"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary text-white p-4 cursor-pointer rounded-full hover:bg-pink-700 transition-colors shadow-lg"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary cursor-pointer text-white p-4 rounded-full hover:bg-pink-700 transition-colors shadow-lg"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, expressiveIndex) => (
          <button
            key={expressiveIndex}
            onClick={() => goToSlide(expressiveIndex)}
            className={`w-2 h-2 rounded-full ${
              currentSlide === expressiveIndex ? 'bg-primary scale-125' : 'bg-gray-300'
            } hover:bg-pink-500 transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

// Custom animation for spinning border
const tailwindConfig = `
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .animate-spin-slow {
    animation: spin-slow 8s linear infinite;
  }
`;

export default TestimonialSlider;