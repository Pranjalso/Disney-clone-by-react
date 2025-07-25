import React from 'react'
import banner1 from '../assets/banner1.jpg'
import Footer from './Footer'
import Fun from './Fun'

const Home = () => {
  return (
    <>
     <div className="bg-[#16181F] max-w-[900px] mx-auto  flex flex-col md:flex-row md:items-start  gap-4 rounded-lg shadow-lg  md:p-3">
  {/* Image Section */}
  <div className="w-full md:w-[400px] flex-shrink-0 overflow-hidden">
    <img 
      src={banner1} 
      className="w-full rounded-lg shadow-lg shadow-gray-800/50" 
      alt="banner" 
    />
  </div>

  {/* Content Section */}
  <div className="bg-[#16181F] p-4 md:p-6 rounded-lg w-full text-center md:text-left">
    <h3 className="text-blue-400 font-bold text-xl md:text-2xl">TATA WPL</h3>
    <p className="text-gray-300 text-lg md:text-xl">Starts Feb 14</p>
    <p className="text-gray-200 text-base md:text-lg mt-2">
      Catch the women in action as they take on the best!
    </p>

    <button className="mt-4 bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-md transition-all duration-300">
      Know More
    </button>
  </div>
</div>
 
  
<Fun/>
 <Footer/>
    </>
  )
}

export default Home
