export default function TotalItems(){
    return(
        <div>
            <div className="max-w-6xl bg-green-400 px-4 py-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-around">
                    <div className="flex flex-col text-white border-r border-white px-6">
                        <div className="text-lg">
                            546 +
                        </div>
                        <div className="text-capitalize text-md">
                            registered riders
                        </div>
                    </div>
                    <div className="flex flex-col text-white">
                        <div className="text-lg">
                            789,900 +
                        </div>
                        <div className="text-capitalize text-md">
                            orders delivered
                        </div>
                    </div>
                    <div className="flex flex-col text-white">
                        <div className="text-lg">
                            690 +
                        </div>
                        <div className="text-capitalize text-md">
                            restaurants partners
                        </div>
                    </div>
                    <div className="flex flex-col text-white">
                        <div className="text-lg">
                            17,457 +
                        </div>
                        <div className="text-capitalize text-md">
                            food items
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}