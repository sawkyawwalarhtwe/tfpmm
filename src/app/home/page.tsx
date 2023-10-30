import Footer from "@/components/footer";
import NavBar from "@/components/navigatoin";
import SlideShow from "./slideshow";

export default function HomePage() {
  return (
    <main className=' w-full overflow-hidden'>
     <NavBar/>
     <SlideShow/>
      <hr className='mx-[6%]'/> 
     <Footer/>
    </main>
  )
}
