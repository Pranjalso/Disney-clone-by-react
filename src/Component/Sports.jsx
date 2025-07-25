import React from 'react';
import { FaPlay, FaPlus } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bannerVideo from "../assets/banner1.jpg"; // Replace with your video
import movie1 from "../assets/banner1.jpg"; // Example movie thumbnails
import movie2 from "../assets/banner1.jpg";
import movie3 from "../assets/banner1.jpg";

const Sports  = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={bannerVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-16 text-white max-w-[700px]">
        <img
          src="https://via.placeholder.com/300x100"
          alt="Movie Title"
          className="w-[250px] md:w-[300px] mb-4"
        />
        <p className="text-lg md:text-xl">
          His days as Deadpool behind him, Wade toils away. But a sudden threat
          has him reluctantly suiting up...
        </p>
        <p className="text-gray-300 text-sm md:text-base mt-2">
          <span className="font-bold">2024 • A • 2h 7m • 4 Languages</span>
        </p>
        <div className="mt-4 flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-md flex items-center gap-2">
            <FaPlay /> Subscribe to Watch
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-md flex items-center gap-2">
            <FaPlus /> Add to Watchlist
          </button>
        </div>
      </div>

      {/* Movie Slider */}
      <div className="relative z-10 bottom-0 w-full px-6 md:px-16 mt-16 md:mt-32">
        <Slider {...settings}>
          {[movie1, movie2, movie3, movie1, movie2].map((movie, index) => (
            <div key={index} className="px-2">
              <img
                src={movie}
                alt={`Movie ${index}`}
                className="w-full rounded-lg hover:scale-105 transition"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


export default Sports
