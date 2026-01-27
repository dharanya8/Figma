import Restaurant from './Restaurant.jsx';
import London from './London.jsx';
import Burgers from './Burgers.jsx';
import Fries from './Fries.jsx';
import Colddrinks from './Colddrinks.jsx';
import Deliverinformation from './Deliverinformation.jsx'; 
import Restaurantlocation from './Restaurantlocation.jsx';
import Customarreviews from './Customarreview.jsx';
import Popularrestaurant from './Popularrestaurant.jsx';
import Footer from './Footer.jsx'
export default function Innerpage(){
    return(
        <>
        <Restaurant/>
    <London/>
    <Burgers/>
    <Fries/>
    <Colddrinks/>
    <Deliverinformation/>
    <Restaurantlocation/>
    <Customarreviews/>
    <Popularrestaurant/>
    <Footer/>
        </>
    )
}