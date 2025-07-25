import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import images
import anime1 from "../assets/anime1.webp";
import anime2 from "../assets/anime2.webp";
import anime3 from "../assets/anime3.webp";
import anime4 from "../assets/anime4.webp";
import anime5 from "../assets/anime5.webp";
import anime6 from "../assets/anime6.webp";
import anime7 from "../assets/anime7.webp";
import anime8 from "../assets/anime8.webp";
import anime9 from "../assets/anime9.webp";
import anime10 from "../assets/anime10.webp";

const animeImages = [anime1, anime2, anime3, anime4, anime5, anime6, anime7, anime8, anime9, anime10];

const AnimeSlider = () => {
  return (
    <div className="relative px-4 py-6 bg-[#16181F] text-white">
      <h2 className="text-2xl font-semibold mb-4">Tales From Japan</h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        loop={true}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {animeImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="p-2 hover:scale-105 transition-transform">
              <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Anime ${index + 1}`}
                  className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AnimeSlider;
