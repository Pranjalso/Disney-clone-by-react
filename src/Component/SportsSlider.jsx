import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaPlay } from "react-icons/fa";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.avif";
import img4 from "../assets/img4.avif";
import img5 from "../assets/img5.avif";
import img6 from "../assets/img6.avif";
import img7 from "../assets/img7.avif";
import img8 from "../assets/img8.avif";
import img9 from "../assets/img9.avif";
import img10 from "../assets/img10.avif";
import img11 from "../assets/img11.avif";
import img12 from "../assets/img12.avif";
import ChannelSlider from './ChannelSlider';


// Array of slider data
const videos = [
    { image: img1, title: "Efficient IND Brush Aside BAN" },
    { image: img2, title: "ICC CT: Bangladesh vs India" }, 
    { image: img3, title: "Gill's 101* vs BAN" },
    { image: img4, title: "Rohit's 41 vs BAN" },
    { image: img5, title: "200 ODI Wickets! Shami's New Record" },
    { image: img6, title: "Epic Finish: India vs AUS" },
    { image: img7, title: "Dhoni's Winning Six" },
    { image: img8, title: "Virat's Best Knock" },
    { image: img9, title: "Bumrah's Deadly Spells" },
    { image: img10, title: "Rahul's Match-Winning 50" },
    { image: img11, title: "Hardik's Power Hitting" },
    { image: img12, title: "Ashwin's Magical Bowling" },
  ];

const SportsSlider = () => {
  return (
    <>
    <div className="relative px-4 py-6 bg-[#16181F] text-white">
      <h2 className="text-2xl font-semibold mb-4">Non-Stop Sports</h2>

      <Swiper
        slidesPerView={2}
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
        {videos.map(({ image, title }, index) => (
          <SwiperSlide key={index}>
            <div className="p-2 hover:scale-105 transition-transform">
              <div className="relative group">
                {/* Thumbnail */}
                <img
                  src={image}
                  alt={title}
                  className="rounded-lg w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover transition-transform duration-300 ease-in-out"
                />

                {/* Play Button Overlay */}
                <div className="absolute bottom-3 left-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-black p-2 rounded-full">
                    <FaPlay size={12} />
                  </button>
                </div>
              </div>

              {/* Video Details */}
              <div className="mt-2">
                <p className="text-xl font-semibold truncate">{title}</p>
               
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <ChannelSlider/>
    </>
  );
};

export default SportsSlider;
