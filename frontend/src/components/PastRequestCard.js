function PastRequestCard(props) {
    return (
        <div className="flex shadow rounded-lg m-3">
            <div className="h-50 bg-blue-600 rounded-lg w-4/12 py-4 ">
                <div className="text-center tracking-wide">
                    <div className="text-white font-bold text-4xl ">24</div>
                    <div className="text-white font-normal text-2xl">Sept</div>
                    <div className="text-white font-normal text-2xl ">1:30 PM</div>
                </div>
            </div>
            <div className="bg-white py-5 w-8/12 h-50">

                <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
                    You were donated
                </div>

                <div className="text-gray-600 font-medium pt-1 px-2 text-4xl">
                    100 lbs!
                </div>
            </div>
        </div>
    )
}

export default PastRequestCard;