import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import movie1 from "../assets/movie1.avif";
import movie2 from "../assets/movie2.avif";
import movie3 from "../assets/movie3.webp";
import movie4 from "../assets/movie4.webp";
import movie5 from "../assets/movie5.avif";
import movie6 from "../assets/movie6.webp";
import movie7 from "../assets/movie7.webp";
import movie8 from "../assets/movie8.avif";
import movie9 from "../assets/movie9.webp";
import movie10 from "../assets/movie10.avif";
import SportsSlider from "./SportsSlider";

const movies = [
  movie1, movie2, movie3, movie4, movie5, movie6, movie7, 
  movie8, movie9, movie10
];

const TopMovies = () => {
  return (
    <>
    <div className="relative px-4 py-6 bg-[#16181F] text-white">
      <h2 className="text-2xl font-semibold mb-4">Top 10 in India Today - Hindi</h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        loop={true}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {movies.map((image, index) => (
          <SwiperSlide key={index} className="relative hover:scale-105 transition-transform">
            {/* Number Badge */}
            <div className="absolute bottom-0 left-0 text-white text-8xl font-bold opacity-90 drop-shadow-md object-cover ">
              {index + 1}
            </div>

            {/* Movie Poster */}
            <div className="p-2">
              <img
                src={image}
                alt={`Movie ${index + 1}`}
                className="rounded-lg w-full h-[280px] sm:h-[290px] md:h-[280px] object-cover transition-transform duration-300 ease-in-out "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <SportsSlider/>
    </>
  );
};

export default TopMovies;
