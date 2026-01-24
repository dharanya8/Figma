import Image from "react-bootstrap/Image";
import Rectangle13 from './assets/images/Rectangle13.png';
import Rectangle15 from './assets/images/Rectangle15.png';
import Rectangle19 from './assets/images/Rectangle19.png';
import Rectangle21 from './assets/images/Rectangle21.png';
import Rectangle23 from './assets/images/Rectangle23.png';
import Rectangle17 from './assets/images/Rectangle17.png';

export default function Popularcatagry(){
   return(
    <>
    <div className="my-5 mx-15 max-w-7xl">
        <div className="text-lg font-bold">
            order.uk Popular Categories
                </div>
        <div className="flex flex-row gap-3 my-4">
            <div className="flex flex-col ">
                <Image src={Rectangle13} className="w-51 h-45"></Image>
                <div className="bg-gray-100 border-2 border-gray-200 px-3 py-2 rounded-b-xl h-15">
                    <h6>Burgers&Fast Food</h6>
                    <p className="text-xs text-orange-500 ">21 Restaurants</p>
                </div>
            </div>
            <div className="flex flex-col ">
                <Image src={Rectangle15} className="w-51 h-45"></Image>
                <div className="bg-gray-100 border-2 border-gray-200 px-3 py-2 rounded-b-xl h-15">
                    <h6>Salads</h6>
                    <p className="text-xs text-orange-500 ">32 Restaurants</p>
                </div>
            </div>
            <div className="flex flex-col">
                <Image src={Rectangle17} className="w-51 h-45"></Image>
                <div className="bg-gray-100 border-2 border-gray-200 px-3 py-2 rounded-b-xl h-15">
                    <h6>Pasta&Casuals</h6>
                    <p className="text-xs text-orange-500 ">4 Restaurants</p>
                </div>
            </div>
             <div className="flex flex-col">
                <Image src={Rectangle19} className="w-51 h-45"></Image>
                <div className="bg-gray-100 border-2 border-gray-200 px-3 py-2 rounded-b-xl h-15">
                    <h6>Pizza</h6>
                    <p className="text-xs text-orange-500 ">32 Restaurants</p>
                </div>
            </div>
             <div className="flex flex-col">
                <Image src={Rectangle21} className="w-51 h-45"></Image>
                <div className="bg-gray-100 border-2 border-gray-200 px-3 py-2 rounded-b-xl h-15">
                    <h6>Breakfast</h6>
                    <p className="text-xs text-orange-500 ">4 Restaurants</p>
                </div>
            </div>
             <div className="flex flex-col">
                <Image src={Rectangle23} className="w-51 h-45"></Image>
                <div className="bg-gray-100 border-2 border-gray-200 px-3 py-2 rounded-b-xl h-15">
                    <h6>Soups</h6>
                    <p className="text-xs text-orange-500 ">32 Restaurants</p>
                </div>
            </div>
               

        </div>
    </div>
    </>
   ) 
}