import React, { useState, useEffect } from "react";
import { IoIosSearch } from "react-icons/io";
import { VscTriangleRight } from "react-icons/vsc";
import show1 from "../assets/yeh rista.webp";
import show2 from "../assets/laufterchef.avif";
import show3 from "../assets/anupma.avif";
import show4 from "../assets/roadies.avif";
import show5 from "../assets/anupma.avif";
import show6 from "../assets/ghumh.avif";
import show7 from "../assets/laxmi.webp";
import show8 from "../assets/mannat.avif";
import show9 from "../assets/jadu.avif";
import show10 from "../assets/thukra.webp";
import show11 from "../assets/engaged.avif";
import show12 from "../assets/power of.avif";
import show13 from "../assets/jhanak.webp";
import show14 from "../assets/mm.webp";
import show15 from "../assets/sanam.avif";
import show16 from "../assets/parineeti.webp";
import show17 from "../assets/doreamon.webp";
import show18 from "../assets/mahabahrat.webp";
import show19 from "../assets/game.avif";
import show20 from "../assets/tanah.webp";


const HoverCard = ({ image, detail, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[11rem] h-[15rem] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt="Show Poster" className="w-full h-full object-cover rounded-lg" />

      {isHovered && (
        <div className="absolute inset-0 bg-black/80 rounded-lg text-white flex flex-col justify-end transition-all duration-300 z-20">
          <img src={image} alt="Preview" className="w-full h-full object-cover absolute top-0 left-0 opacity-30 rounded-lg" />
          <div className="z-10 p-2">
            <button className="mt-3 bg-white text-black px-4 py-2 rounded-md font-semibold flex items-center justify-center">
              <VscTriangleRight /> Watch Now
            </button>
            <p className="text-sm mt-2">{detail}</p>
            <p className="text-xs mt-1">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

  const shows = [
    {
      title: "Yeh Rishta Kya Kehlata Hai",
      image: show1,  // 
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Laughter Chef",
      image:show2,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Anupama",
      image:show3,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Roadies",
      image:show4,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Anupama",
      image:show5,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Ghum Hai Kisikey Pyaar Meiin",
      image:show6,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    { 
      title:"Laxmi Ghar Aayi",
      image:show7,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Mannat",
      image:show8,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Jadoo",
      image:show9,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Thukra Ke Mera Pyaar",
      image:show10,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Engaged",
      image:show11,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Power of Love",
      image:show12,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Jhanak Jhanak Payal Baaje",
      image:show13,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "udaan ki aashayein",
      image:show14,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "sanam teri kasam",
      image:show15,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Parineeti",
      image:show16,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Doreamon",
      image:show17,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Mahabharat",
      image:show18,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Game of greed",
      image:show19,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
    {
      title: "Tanahji",
      image:show20,
      detail: "2025 • Hindi • StarPlus • U/A 13+",
      description: "A thrilling journey of love and ambition...",
    },
  ];

  const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchHistory, setSearchHistory] = useState([]);

    useEffect(() => {
      const history = JSON.parse(localStorage.getItem("searchHistory")) || [];
      setSearchHistory(history);
    }, []);

    useEffect(() => {
      localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }, [searchHistory]);

    const handleInputChange = (e) => {
      setSearchTerm(e.target.value);
    };
    
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && searchTerm.trim() !== "") {
        setSearchHistory((prev) => [searchTerm, ...prev.filter((item) => item !== searchTerm)]);
        setSearchTerm("");
      }
    };

    const handleDelete = (index) => {
      setSearchHistory((prev) => prev.filter((_, i) => i !== index));
    };

    const filteredShows = shows.filter((show) =>
      show.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.detail.toLowerCase().includes(searchTerm.toLowerCase())
    );
      
  
    return (
      <div className="p-4">
        <div className="bg-[#252833] rounded-2xl p-6 flex items-center">
          <IoIosSearch className="text-2xl text-[#95A3AF]" />
          <input
  type="text"
  value={searchTerm}
  onChange={handleInputChange}
  onKeyDown={handleKeyPress}
  className="bg-[#252833] w-full border-none outline-none font-bold text-xl"
  placeholder="Movies, Shows and more"
/>

        </div>
  
        {searchHistory.length > 0 && (
  <div className="mt-4 text-white">
    <p className="text-lg font-semibold mb-2">Recent Searches</p>
    <div className="flex flex-wrap gap-2">
      {searchHistory.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-1 border border-gray-500 rounded-full bg-[#2f2f2f] text-[#aaa] hover:text-white"
        >
          <span className="text-sm">🕒</span>
          <span>{item}</span>
          <button
            onClick={() => handleDelete(index)}
            className="text-red-400 hover:text-red-200"
          >
            ✖️
          </button>
        </div>
      ))}
    </div>
  </div>
)}
        <div className="mt-6">
          <p className="font-semibold text-xl text-[#E1E6F0] mb-4">Trending in India</p>
          <div className="flex flex-wrap gap-4">
          {filteredShows.length > 0 ? (
  filteredShows.map((show, index) => (
    <HoverCard key={index} {...show} />
  ))
) : (
  <p className="text-white mt-4">No results found for "{searchTerm}"</p>
)}
          </div>
        </div>
      </div>
    );
  };
  
  export default Search;
