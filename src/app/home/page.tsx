import Footer from "@/components/footer";
import NavBar from "@/components/navigatoin";
import MAbout from "./about";
export default function HomePage() {
  return (
    <main className=' w-full overflow-hidden'>
     <NavBar/>
      <hr className='mx-[6%]'/> 
      <MAbout/>
     <Footer/>
    </main>
  )
}
