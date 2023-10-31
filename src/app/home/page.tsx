'use client'
import Footer from "@/components/footer";
import NavBar from "@/components/navigatoin";
import MAbout from "./about";
import SlideShow from "./slideshow";
import MVideos from "./video";
import MainNews from "./news";
import MEvents from "./events";
import Join from "./join";
import MupcomingTraining from "./upcomingTraining";
import MPublication from "./publication";
export default function HomePage() {
  return (
    <main className=' w-full overflow-hidden'>
     <NavBar/>
     <SlideShow/>
      <hr className='mx-[6%]'/> 
      <MAbout/>
      {/* <MVideos/> */}
      <hr className='mx-[6%]'/>
      <MainNews/>
      <MEvents/>
      <hr className='mx-[6%]'/>
      <Join/>
      <hr className='mx-[6%]'/>
      <MupcomingTraining/>
      <hr className='mx-[6%]'/>
      <MPublication/>
     <Footer/>
    </main>
  )
}
