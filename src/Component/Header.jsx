import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaHome, FaSearch, FaTv, FaFilm, FaTrophy, FaThLarge, FaUser } from "react-icons/fa";
import { useState } from "react";
import Home from "./Home";
import Search from "./Search";
import TV from "./TV";
import Movies from "./Movies";
import Sports from "./Sports";
import Categories from "./Categories";
import MySpace from "./MySpace";
import logo from '../assets/Imagesss-Photoroom.png'

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
    className={`fixed top-0 left-0 h-full text-white py-6 transition-all duration-300 flex flex-col items-center 
      ${isExpanded ? "w-48" : "w-16 md:w-20"} 
      bg-gray/40 backdrop-blur-md`}
    style={{ zIndex: 90 }}
    onMouseEnter={() => setIsExpanded(true)}
    onMouseLeave={() => setIsExpanded(false)}
  >
  
      {/* Logo */}
      <div className="mb-6">
        <img src={logo} alt="Disney+ Hotstar" className="w-12 md:w-16" />
      </div>

      {/* Navigation */}
      <nav className="relative mt-6 space-y-2 w-full z-10 px-3">
        {[
          { icon: <FaHome className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"/>, label: "Home", path: "/home" },
          { icon: <FaSearch />, label: "Search", path: "/search" },
          { icon: <FaTv />, label: "TV", path: "/tv" },
          { icon: <FaFilm />, label: "Movies", path: "/movies" },
          { icon: <FaTrophy />, label: "Sports", path: "/sports" },
          { icon: <FaThLarge />, label: "Categories", path: "/categories" },
          { icon: <FaUser />, label: "My Space", path: "/myspace" },
        ].map(({ icon, label, path }, index) => (
          <Link
            key={index}
            to={path}
            className=" flex items-center gap-3 p-2 cursor-pointer transition-all  duration-300 ease-in-out hover:scale-105 "
          >
            <span className="w-6 h-6 text-lg ">{icon}</span>
            <span className={`text-white text-xl px-2 py-1 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] hover:drop-shadow-[0_0_12px_rgba(255,255,255,1)] ${isExpanded ? "opacity-100" : "opacity-0 hidden md:block "}`}>
              {label}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};


function App() {
  return (
    <Router>
      <div className="flex">
        <Header />
        <div className="ml-16 md:ml-20 p-4 w-full bg-[#16181F] text-white min-h-screen">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/tv" element={<TV />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/myspace" element={<MySpace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
