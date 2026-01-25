import Image from "react-bootstrap/Image";
import Rectangle1 from './assets/images/Rectangle1.png';
import Rectangle2 from './assets/images/Rectangle2.png';
import Rectangle3 from './assets/images/Rectangle3.png';
import Rectangle4 from './assets/images/Rectangle4.png';
import Rectangle5 from './assets/images/Rectangle5.png';
import Rectangle6 from './assets/images/Rectangle6.png';
export default function  Popularrestaurant(){
    return(
        <>
        <div className="my-5 mx-15 max-w-7xl">
        <div className="text-lg font-bold">
            Popular Restaurants
                </div>
        <div className="flex flex-col md:flex-row gap-3 my-4">
            <div className="flex flex-col ">
                <Image src={Rectangle1} className="w-51 h-45"></Image>
                <div className="bg-gray-100 border-2 border-orange-500 bg-orange-500 text-center py-3 rounded-b-xl h-15">
                    <h6 className="text-light text-md">McDonald's London</h6>
                </div>
            </div>
            <div className="flex flex-col ">
                <Image src={Rectangle2} className="w-51 h-45"></Image>
                <div className="bg-gray-100 border-2 border-orange-500 bg-orange-500  py-3 text-center rounded-b-xl h-15">
                    <h6 className="text-light">Papa Jonson</h6>
                </div>
            </div>
            <div className="flex flex-col">
                <Image src={Rectangle3} className="w-51 h-45"></Image>
                <div className="bg-gray-100 border-2 border-orange-500 bg-orange-500 px-3 py-3 text-center rounded-b-xl h-15">
                    <h6 className="text-light">KFC West London</h6>
                </div>
            </div>
             <div className="flex flex-col">
                <Image src={Rectangle4} className="w-51 h-45"></Image>
                <div className="bg-gray-100 border-2 border-orange-500 bg-orange-500 px-3 py-3 text-center rounded-b-xl h-15">
                    <h6 className="text-light">Texas Chicken</h6>
                </div>
            </div>
             <div className="flex flex-col">
                <Image src={Rectangle5} className="w-51 h-45"></Image>
                <div className="bg-gray-100 border-2 border-orange-500 bg-orange-500 px-3 py-3 text-center rounded-b-xl h-15">
                    <h6 className="text-light">Burger King</h6>
                </div>
            </div>
             <div className="flex flex-col">
                <Image src={Rectangle6} className="w-51 h-45"></Image>
                <div className="bg-gray-100 border-2 border-orange-500 bg-orange-500 px-3 py-3 text-center rounded-b-xl h-15">
                    <h6 className="text-light">Shaurma 1</h6>
                </div>
            </div>
               

        </div>
    </div>
        </>
    )

}