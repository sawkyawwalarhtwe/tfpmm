"use client"
import { Button } from "@mui/material";
import 'swiper/css';
import { useRef } from "react";
import { useInView } from "framer-motion";
import AboutFifthPillar from "./about";
import { Swiper, SwiperSlide } from 'swiper/react';
import NavBar from "@/components/navigatoin";
import Footer from "@/components/footer";
import SwiperCore from "swiper";
SwiperCore.use([Pagination]);

import { Pagination } from 'swiper/modules';


export default function WWA(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const part = useRef(null);
    const isPartView = useInView(part, {once: true})

    const qs = useRef(null)
    const isQsView = useInView(qs, {once: true})
    

    return(
        <div>
            <NavBar/>
            <div className="mt-20 overflow-hidden">
            <div style={{backgroundImage:`url(https://images.squarespace-cdn.com/content/v1/538e6312e4b03cefc2a8a0c3/1680743697809-8NM891F7HEMBIXSCD1N9/GettyImages-1324905385.jpg?format=2500w)`}}
             className="px-2 lg:px-24 py-12 bg-contain md:bg-cover h-[200px] lg:h-[400px]">
                <div className="bg-[#787468af] w-[50%] lg:w-[30%]  mx-auto p-4 lg:p-10 mt-[10%] lg:mt-[22%]" 
                ref={ref} 
                style={{
                transform: isInView ? "none" : "translateY(50px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    <h1 className="text-center text-xl lg:text-4xl text-white">Who we are</h1>
                </div>
            
            </div>
           <AboutFifthPillar/>
            <hr className='mx-[6%]  '/>

            <Swiper
            id="vision"
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
        className="mySwiper mt-20 h-[230px] z-20 text-center"
      >
                <SwiperSlide>
                    <h1 className="text-lg lg:text-2xl bold mb-4 font-bold">Our Mission</h1>
                    <p className=" text-gray-600 mb-4 font-sans tracking-wide text-xs lg:text-base">Promoting rule of law and increasing A2J<br/>
                        Strengthening social harmony and social equality<br/>
                        Enlightening people about federal norms and democratic culture<br/>
                        Conducting evidence base advocacy<br/>
                        Strengthening state institution<br/>
                        Cooperating with national, regional and international actors</p>
                </SwiperSlide>

                
                <SwiperSlide>
                    <h1 className="text-lg lg:text-2xl bold mb-4 font-bold">Our Vision</h1>
                    <p className=" text-gray-600 mb-4 font-sans tracking-wide text-xs lg:text-base">
                        Human dignity and diversity<br/>

                        Transparency and accountability<br/>

                        Institutional independence<br/>

                        Equality<br/>

                        Integrity<br/>
                    </p>
                    
                </SwiperSlide>

                <SwiperSlide>
                    <h1 className="text-lg lg:text-2xl bold mb-4 font-bold">Our Values</h1>
                    <p className=" text-gray-600 mb-4 font-sans tracking-wide text-xs lg:text-base">To promote access to all forms of justice, federal norms and democratic culture</p>
                </SwiperSlide>

            </Swiper>

            <div className="my-10 lg:my-20 mx-12 lg:mx-24" id="report">
                <h1 className="text-xl lg:text-2xl mb-16 font-bold">Organization Chart</h1>
                <iframe src='https://flo.uri.sh/visualisation/11597006/embed' title='Interactive or visual content' className='flourish-embed-iframe w-[80%] h-[500px]'  scrolling='no' sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
            </div>
            
           
            <div className="px-24 mt-24 mb-24 " id="partner">
                <h1 className="text-lg lg:text-2xl mb-6 lg:mb-10 text-center font-bold">Our Partners</h1>
                <div className="flex justify-between mt-[12] lg:mt-24">
                    <img src="taf.png" className="w-[20%]" alt=""
                    ref={part} 
                    style={{
                    opacity: isPartView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                    }}
                    />
                    <img src="ndi.png" className="w-[15%]" alt=""
                    ref={part} 
                    style={{
                    opacity: isPartView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
                    }}
                    />
                    <img src="fnf.jpg" className="w-[17%]" alt=""
                    ref={part} 
                    style={{
                    opacity: isPartView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    />

                </div>
                <div className="flex justify-between mx-[20%] mt-24">
                    <img src="usaid.png" className="w-[30%]" alt=""
                    ref={part} 
                    style={{
                    opacity: isPartView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s"
                    }}
                    />
                    <img src="labour.png" className="w-[15%]" alt=""
                    ref={part} 
                    style={{
                    opacity: isPartView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
                    }}
                    />

                </div>
            </div>
            <hr className='mx-[6%]  '/>
            <div className=" pb-36 border"
            ref={qs} 
            style={{
            transform: isQsView ? "none" : "translateY(50px)",
            opacity: isQsView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            >
                <h1 className="text-lg lg:text-2xl text-center mt-12 lg:mt-24 mb-10">Have a question?</h1>
                <p className="text-center mx-[20%] font-sans mb-10 text-xs lg:text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className=' rounded-lg shadow-md bg-blue-700 mx-[35%] lg:mx-[47%] w-[100px]'>Mail Us</button>
            </div>
        </div>
        <Footer/>
        </div>
        
    )
}