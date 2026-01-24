import group10 from './assets/images/Group10.png';
import group11 from './assets/images/Group11.png';
import group12 from './assets/images/Group12.png';
import Image from "react-bootstrap/Image";

export default function Deals() {
    return(
        <>
        <div className="my-4 px-4 max-w-7xl mx-auto">
            <div className="flex flex-row justify-between">
                <div className="text-lg font-bold">
               Up to-40%<span className="ml-7">order.uk exclusive deals</span>
                </div>
                <div className="flex flex-row gap-5">
                    <button>
                        vegan
                    </button>
                    <button>
                        sushi
                    </button>
                    <button className=' py-2 px-3 rounded-pill border-1 border-orange-400'>
                        pizza & fast food
                    </button>
                    <button>
                        others
                    </button>
                </div>
            </div>
            <div className='flex flex-row gap-4 my-3'>
                    <Image src={group10} className='w-99 h-70'></Image>
                    <Image src={group11} className='w-99 h-70'></Image>
                    <Image src={group12} className='w-99 h-70'></Image>
                </div>
        </div>
        </>
    )
}