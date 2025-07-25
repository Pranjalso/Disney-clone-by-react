import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaPlay } from "react-icons/fa";
import Episode1 from "../assets/Episode1.avif";
import Episode2 from "../assets/Episode2.webp";
import Episode3 from "../assets/Episode3.avif";
import Episode4 from "../assets/Episode4.avif";
import Episode5 from "../assets/Episode6.avif";
import Episode6 from "../assets/Episode1.avif";
import Episode7 from "../assets/Episode2.webp";
import Episode8 from "../assets/Episode3.avif";
import Episode9 from "../assets/Episode4.avif";
import Episode10 from "../assets/Episode6.avif";
import Episode11 from "../assets/Episode1.avif";
import Episode12 from "../assets/Episode2.webp";
import Episode13 from "../assets/Episode3.avif";
import Episode14 from "../assets/Episode4.avif";
import Episode15 from "../assets/Episode6.avif";
import TopMovies from "./TopMovies";

const episodes = [
  { image: Episode1, title: "Shah's Celebration", season: "S1 E1565", date: "20 Feb", duration: "32m" },
  { image: Episode2, title: "Abhir Marries Kiara!", season: "S68 E1569", date: "20 Feb", duration: "20m" },
  { image: Episode3, title: "Samarth's Journey", season: "S2 E8", date: "16 Feb", duration: "1h 19m" },
  { image: Episode4, title: "Father's Accusation", season: "S3 E1493", date: "20 Feb", duration: "14m" },
  { image: Episode5, title: "Deepika & Chirag", season: "S1 E216", date: "17 Feb", duration: "22m" },
  { image: Episode6, title: "Unexpected Twist", season: "S2 E45", date: "18 Feb", duration: "30m" },
  { image: Episode7, title: "Battle Begins", season: "S5 E12", date: "19 Feb", duration: "45m" },
  { image: Episode8, title: "The Betrayal", season: "S3 E33", date: "20 Feb", duration: "1h 10m" },
  { image: Episode9, title: "Love & Lies", season: "S1 E50", date: "21 Feb", duration: "28m" },
  { image: Episode10, title: "War of Emotions", season: "S7 E29", date: "22 Feb", duration: "35m" },
  { image: Episode11, title: "Hidden Secrets", season: "S8 E12", date: "23 Feb", duration: "40m" },
  { image: Episode12, title: "The Big Twist", season: "S4 E90", date: "24 Feb", duration: "55m" },
  { image: Episode13, title: "Revenge Plot", season: "S9 E22", date: "25 Feb", duration: "50m" },
  { image: Episode14, title: "Lost & Found", season: "S10 E15", date: "26 Feb", duration: "38m" },
  { image: Episode15, title: "Final Showdown", season: "S11 E5", date: "27 Feb", duration: "1h 20m" },
];

const Episode = () => {
  return (
    <>
    <div className="relative px-4 py-6 bg-[#16181F] text-white">
      <h2 className="text-2xl font-semibold mb-4">Latest Episodes Before TV</h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        loop={true}
        autoplay={{ delay: 3500 }}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {episodes.map(({ image, title, season, date, duration }, index) => (
          <SwiperSlide key={index}>
            <div className="p-2 hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="relative group">
                {/* Episode Thumbnail */}
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover"
                />
                {/* Play Button on Left Bottom */}
           <button className=" text-white p-2  rounded-full shadow-lg">
                    <FaPlay size={16} />
                  </button>

                {/* Episode Details */}
                <div className="mt-0">
                  <p className="text-sm font-semibold truncate">{title}</p>
                  <p className="text-xs text-gray-400">{season} • {date}</p>
                  <p className="text-xs text-gray-400">{duration}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <TopMovies/>
    </div>
    </>
  );
};

export default Episode;
