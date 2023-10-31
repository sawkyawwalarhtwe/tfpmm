'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import { Pagination } from 'swiper/modules';
import { Paper} from '@mui/material';
import SwiperCore from "swiper";

SwiperCore.use([Pagination]);

export default function SlideShow() {

    const items = [
        {
            name: "Probably the most",
            description: "David Joe",
            img:"https://i.pinimg.com/originals/c5/34/44/c53444987b6fb2fc8549608881445f29.png",
            content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            name: "Lorem ipsum dolor ",
            description: "Hello World!",
            img:"https://wallpapercrafter.com/sizes/2560x1440/239242-palmyra-black-and-white-package-and-printing-shop-.jpg",
            content:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire"
        },
        {
            name: "Consectetur",
            description: "John Doe,",
            img:"https://hannalawfirms.com/wp-content/uploads/2020/07/702861-1.jpg",
            content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
        }
    ]

  return (
    <div className=''>
            <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
            "delay": 250,
            "disableOnInteraction": false
          }} 
          pagination={{
            "clickable": true
          }} 
          navigation={true}
        className="mySwiper mt-20 h-[700px] z-20"
      >
            {
                items.map( (item, i) =><SwiperSlide key={i}> <Item key={i} item={item} /></SwiperSlide> )
            }
        
    </Swiper>
    </div>
    
  );
};

function Item(props: { item:any})
{
    return (
       
        <div className=''>
             <div style={{backgroundImage:`url(${props.item.img})`}} className='h-[370px]  text-white bg-cover bg-no-repeat bg-center font-sans pt-[10%]'>
           
           
           </div>
           <div className="flex justify-evenly pl-4">
                <div className='bg-white   md:px-[8%] pt-[50px] transition duration-300'>
                    <div>
                    <h1  className='text-black text-xl md:text-3xl font-bold mb-4'>
                        {props.item.name}
                    </h1>
                    <h1  className='text-gray-700 text-base mb-4'>
                        {props.item.description}
                    </h1>
                    </div>
                    <div >
                        <button  className='rounded-md md:w-[200px] md:h-[50px] text-xs md:text-base p-2 bg-blue-500 text-white'>Learn More</button>
                    </div>
                </div>
                <div className='md:text-base text-xs font-sans font-bold md:pt-[5%] h-[200px]  md:h-[250px] w-[60%] md:w-[40%] mx-[4%] p-4 md:px-[4%] mt-[-100px] border shadow-md bg-slate-100 opacity-70 rounded-lg'>
                    <p>
                    {props.item.content}
                    </p>
                </div>
           </div>
            
        </div>
        
    )
}