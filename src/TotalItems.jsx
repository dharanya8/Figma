export default function TotalItems(){
    return(
        <div>
            <div className=" mx-15 mt-8 bg-orange-400 rounded-xl  py-4 ">
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="flex flex-col text-white border-white">
                        <div className="text-4xl">
                            546 +
                        </div>
                        <div className="text-capitalize text-sm font-bold ">
                            registered riders
                        </div>
                    </div>
                     <div className="border-r text-white "></div>
                    <div className="flex flex-col text-white ">
                        <div className="text-4xl">
                            789,900 +
                        </div>
                        <div className="text-capitalize text-sm font-bold">
                            orders delivered
                        </div>
                    </div>
                    <div className="border-r text-white "></div>
                    <div className="flex flex-col text-white">
                        <div className="text-4xl ">
                            690 +
                        </div>
                        <div className="text-capitalize text-sm font-bold">
                            restaurants partners
                        </div>
                    </div>
                     <div className="border-r text-white "></div>
                    <div className="flex flex-col text-white">
                        <div className="text-4xl">
                            17,457 +
                        </div>
                        <div className="text-capitalize text-sm font-bold">
                            food items
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}