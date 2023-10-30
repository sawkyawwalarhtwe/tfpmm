import NavBar from "@/components/navigatoin";
import Footer from "@/components/footer";
import Publication from "./publication";
export default function Publica(){
    return(
        <div className="overflow-hidden">
            <NavBar></NavBar>
                <Publication/>
            <Footer></Footer>
        </div>
    )
}