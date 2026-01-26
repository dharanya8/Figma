import BannerSection from "./Bannersection";
import Deals from "./Deals";
import Popularcatagry from "./Popularcatagry";
import Popularrestaurant from "./Popularrestaurant";
import Knowmore from "./Knowmore";
import Ordermore from "./Ordermore";
import Partner from "./Partner";
import TotalItems from "./TotalItems";
import Footer from "./Footer";
export default function Homepage(){
    return(
        <>
    <BannerSection/>
    <Deals />
    <Popularcatagry/>
    <Popularrestaurant/>
    <Ordermore/>
    <Partner/> 
    <Knowmore/> 
    <TotalItems /> 
    <Footer /> 
        </>
    )
}