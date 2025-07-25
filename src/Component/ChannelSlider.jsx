import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import channel images
import channel1 from "../assets/channel1.webp";
import channel2 from "../assets/channel2.avif";
import channel3 from "../assets/channel3.webp";
import channel4 from "../assets/channel4.webp";
import channel5 from "../assets/channel5.webp";
import channel6 from "../assets/channel6.webp";
import channel7 from "../assets/channel7.webp";
import channel8 from "../assets/channel8.avif";
import channel9 from "../assets/channel9.webp";
import channel10 from "../assets/channel10.avif";
import channel11 from "../assets/channel11.avif";
import channel12 from "../assets/channel12.avif";
import AnimeSlider from "./AnimeSlider";

// Array of channel images
const channels = [
  channel1,
  channel2,
  channel3,
  channel4,
  channel5,
  channel6,
  channel7,
  channel8,
  channel9,
  channel10,
  channel11,
  channel12,
];

const ChannelSlider = () => {
  return (
    <>
    <div className="relative px-4 py-6 bg-[#16181F] text-white">
      <h2 className="text-2xl font-semibold mb-4">Popular Channels</h2>

      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        loop={true}
        autoplay={{ delay: 3500 }}
        breakpoints={{
          480: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 6 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {channels.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="p-2 hover:scale-105 transition-transform">
              <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Channel ${index + 1}`}
                  className="w-full h-[120px] sm:h-[140px] md:h-[200px] object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <AnimeSlider/>
    </>
  );
};

export default ChannelSlider;
