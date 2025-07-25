import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import latest1 from "../assets/latest1.avif";
import latest2 from "../assets/latest2.avif";
import latest3 from "../assets/latest3.avif";
import latest4 from "../assets/latest4.avif";
import latest5 from "../assets/latest5.avif";
import latest6 from "../assets/latest6.avif";
import latest7 from "../assets/latest7.avif";
import latest8 from "../assets/latest8.avif";
import latest9 from "../assets/latest9.avif";
import latest10 from "../assets/latest10.avif";
import latest11 from "../assets/latest11.avif";
import latest12 from "../assets/latest12.avif";
import latest13 from "../assets/latest13.avif";
import latest14 from "../assets/latest14.avif";
import latest15 from "../assets/latest15.avif";
import latest16 from "../assets/latest16.avif";
import latest17 from "../assets/latest17.avif";
import latest18 from "../assets/latest18.avif";
import latest19 from "../assets/latest19.avif";
import Episode from "./Episode";

const images = [
    latest1,latest2,latest3,latest4,latest5,latest6,latest7,latest8,latest9,latest10,latest11,latest12,latest13,latest14,latest15,latest16,latest17,latest18,latest19,
];

const HeroSlider = () => {
  return (
    <>
    <div className="relative px-4 py-6 bg-[#16181F] text-white">
      <h2 className="text-2xl font-semibold mb-4">Latest Releases</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop={true}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="p-2">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="rounded-lg w-full h-[300px] sm:h-[300px] md:h-[320px] lg:h-[350px] object-cover transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Episode/>
    </div>
    </>
  );
};

export default HeroSlider;
