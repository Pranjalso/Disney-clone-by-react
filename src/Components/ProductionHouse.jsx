import React from 'react'
import disney from '../assets/images/disney.png';
import marvel from '../assets/images/marvel.png';
import nationalG from '../assets/images/nationalG.png';
import pixar from '../assets/images/pixar.png';
import starwar from '../assets/images/starwar.png';

import disneyV from '../assets/videos/disney.mp4';
import marvelV from '../assets/videos/marvel.mp4';

import nationalV from '../assets/videos/national-geographic.mp4';
import pixarV from '../assets/videos/pixar.mp4';
import starV  from '../assets/videos/star-wars.mp4';


function ProductionHouse() {
    const productionHouseList=[
        {
            id:1,
            image:disney,
            video:disneyV
        },
        {
            id:2,
            image:pixar,
            video:pixarV
        },
        {
            id:3,
            image:marvel,
            video:marvelV
        },
        {
            id:4,
            image:starwar,
            video:starV
        },
        {
            id:5,
            image:nationalG,
            video:nationalV
        },

    ]
  return (
    <div className='flex gap-2 md:gap-5 p-2 px-5 md:px-16 '>
        {productionHouseList.map((item)=>(
            <div className='border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out cursor-pointer relative shadow-xl 
            shadow-gray-800
            '>
                 <video src={item.video} autoPlay loop playsInline muted 
            className='absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-70'/> 
                <img src={item.image} className='w-full z-[1] opacity-100' /> 
               
            </div>
        ))}
    </div>
  )
}

export default ProductionHouse;