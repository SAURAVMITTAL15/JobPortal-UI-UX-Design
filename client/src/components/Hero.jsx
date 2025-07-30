import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext.jsx";
import { useContext, useRef } from "react";

function Hero() {
    const { value } = useContext(AppContext)
    const titleRef = useRef(null)
    const locationRef = useRef(null)

    function onSearch(){
        value.setSearchFilter({
            title: titleRef.current.value,
            location: locationRef.current.value
        })
        value.setIsSearched(true)
    }

    return (
        <div className='container 2xl:px-20 mx-auto my-10'>
            <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">Over 10,000+ Jobs to Apply</h2>
                <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">Your Next Big Career Move Starts Right Here  Explain the Best Job Opportunities and Take the First Stop Toward Your Future!</p>
                <div className="flex bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 justify-between items-center sm:mx-auto">
                    <div className="flex items-center gap-2">
                        <img src={assets.search_icon} alt="Search Image" className="h-4 sm:h-5" />
                        <input type="text" placeholder="Search for jobs..."
                            className="max-sm:text-xs p-2 rounded outline-none w-full" ref={titleRef}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <img src={assets.location_icon} alt="Search Image" className="h-4 sm:h-5" />
                        <input type="text" placeholder="Location"
                            className="max-sm:text-xs p-2 rounded outline-none w-full" ref={locationRef}
                        />
                    </div>
                    <button className="bg-blue-600 text-white m-1 py-2 px-6 rounded" onClick={onSearch}>Search</button>
                </div>
            </div>

            <div className="border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex ">
                <div className="flex justify-center gap-15 lg:gap-28 flex-wrap">
                    <p className="font-medium">Trusted by</p>
                    <img className="h-6" src={assets.accenture_logo} alt="Accenture Image" />
                    <img className="h-6" src={assets.adobe_logo} alt="Adobe Image" />
                    <img className="h-6" src={assets.amazon_logo} alt="Amazon Image" />
                    <img className="h-6" src={assets.microsoft_logo} alt="Microsoft Image" />
                    <img className="h-6" src={assets.samsung_logo} alt="Samsung Image" />
                    <img className="h-6" src={assets.walmart_logo} alt="Walmart Image" />
                </div>
            </div>
        </div>
    )
}

export default Hero;