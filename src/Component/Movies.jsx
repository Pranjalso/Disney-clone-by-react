import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import alladin from "../movies/allladin.webp";
import beutyofbeast from "../movies/beutyofbeast.webp";
import mona from "../movies/mona.avif";
import mufasa from "../movies/mufasa.avif";
import jungle from "../movies/jungle.webp";
import singham from "../movies/singham.webp";
import athrusday from "../movies/athrusday.webp";
import satyabham from "../movies/satyabham.webp";
import cuttputli from "../movies/cuttputli.webp";
import bhuj from "../movies/bhuj.webp";
import bloodydaddy from "../movies/bloodydaddy.webp";
import akelli from "../movies/akelli.webp";


const disneyMovies = [
  { title: "Aladdin", image: alladin },
  { title: "Beauty and the Beast", image: beutyofbeast },
  { title: "Moana", image: mona },
  { title: "Mufasa", image: mufasa },
  { title: "Jungle Cruise", image: jungle },
];

const actionMovies = [
  { title: "Singham Returns", image: singham },
  { title: "A Thursday", image: athrusday },
  { title: "Satyabhama", image: satyabham },
  { title: "Cuttputlli", image: cuttputli },
  { title: "Bhuj", image: bhuj },
  { title: "Bloody Daddy", image: bloodydaddy },
  { title: "Akelli", image: akelli },
];

const MovieRow = ({ title, movies }) => (
  <div className="mb-10 px-4">
    <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay]}
      breakpoints={{
        320: { slidesPerView: 2 },
        640: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
      }}
    >
      {movies.map((movie, index) => (
        <SwiperSlide key={index}>
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-[230px] object-cover rounded-md hover:scale-105 transition duration-300"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const MoviePage = () => {
  return (
    <div className="bg-[#0f1014] min-h-screen text-white">
     
      <MovieRow title="Disney Movies" movies={disneyMovies} />
      <MovieRow title="Action Movies" movies={actionMovies} />
    </div>
  );
};

export default MoviePage;
