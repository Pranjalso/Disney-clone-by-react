import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import disney2 from '../assets/disney2.avif';
import disney3 from '../assets/disney3.avif';
import disney4 from '../assets/disney4.avif';
import HeroSlider from "./HeroSlider";

const images = [
  {
    src: disney2,
    title: "Thukra Ke Mera Pyaar",
    description:
      "Two families clash over societal and caste differences, spurring a saga of revenge. All this happens when a love story goes wrong.",
    tags: ["Drama", "Betrayal", "Revenge", "Common-Man Struggles"],
  },
  {
    src: disney3,
    title: "Crime Thriller",
    description:
      "A gripping thriller showcasing the battle between justice and crime.",
    tags: ["Action", "Mystery", "Suspense"],
  },
  {
    src: disney4,
    title: "Love and War",
    description:
      "A story of love entangled in the midst of war and political conflicts.",
    tags: ["Romance", "Drama", "Historical"],
  },
];

const Fun = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Background changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Background Section */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <img
          src={images[currentIndex].src}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-900 z-34"
        />

        {/* Content on Left Bottom */}
        <div className="absolute bottom-10 left-10 text-white max-w-lg z-40 px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            {images[currentIndex].title}
          </h1>
          <p className="text-lg mt-3">{images[currentIndex].description}</p>
          <div className="mt-4 flex gap-2 flex-wrap">
            {images[currentIndex].tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-700 px-3 py-1 rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="mt-5 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
            ▶ Watch Now
          </button>
        </div>

        {/* Bottom-Right Image Slider (No Arrows) */}
        <div className="absolute bottom-4 right-6 w-[250px] md:w-[350px] z-20">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            slidesPerView={3}
            spaceBetween={10}
            className="rounded-lg"
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  className={`rounded-lg w-full cursor-pointer ${
                    index === currentIndex ? "border-4 border-blue-500" : ""
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Hero Slider Below */}
      <div className="bg-[#16181F] min-h-screen text-white">
        <HeroSlider />
      </div>
    </>
  );
};

export default Fun;
