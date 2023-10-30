"use client"
import {motion, useInView} from "framer-motion"
import { useRef } from "react"
export default function MAbout(){
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return(
        <div
        className=" z-20 bg-white font-serif mt-20 ">

            <p className="font-sans font-bold text-center tracking-wide mt-8 text-xl md:text-4xl text-[#382e5a]">
                About The Fifth Pillar
            </p>
            <motion.div
        ref={ref}
        style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
          }}>

<div className="text-center mt-8 md:mt-16 text-xs md:text-xl text-[#382e5a] w-[80%] md:w-[50%] mx-auto">
            “ The Fifth Pillar is emerged as a non-profit, rights and legal based organization with a mission of strengthening democratic institutions in Myanmar. The organization seeks to grantee that every citizens are enjoyed their rights without any kind of discrimination. The organization’s main area of focus include:
            <div className='flex mt-16 text-xs md:text-base font-bold mb-4 text-[#382e5a]'>
                <div className='md:mx-4'>
                    <img src="4.png" alt="Democracy" className='w-[100px] md:w-[250px] mb-4 mx-auto '/>
                </div>
                <div className='md:mx-4'>
                <img src="5.png" alt="Democracy" className='w-[100px] md:w-[250px] mb-4 mx-auto'/>
                </div>
                <div className='md:mx-4'>
                <img src="6.png" alt="Democracy" className='w-[100px] md:w-[250px] mb-4 mx-auto'/>
                </div>
                
                
            </div>          
            
            </div>
          </motion.div>
            
            <p className="text-center text-xs md:text-base mt-8 md:mt-16 mb-8 text-blue-800 underline cursor-pointer">Read More</p>
        </div>
    )
}