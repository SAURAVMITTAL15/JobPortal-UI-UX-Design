import { assets } from "../assets/assets";

function AppDownload() {
    return (
        <div className='container px-4 2xl:px-20 mx-auto my-20'>
            <div className='relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:-p-32 rounded-lg'>
                <div>
                    <h1 className='text-2xl font-bold mb-8 sm:text-4xl max-w-md'>Download Mobile App For Better Experience</h1>
                    <div className='flex gap-4'>
                        <a href="#" className='inline-block'>
                            <img src={assets.play_store} alt="Play Store" className="h-12"/>
                        </a>
                        <a href="#" className="inline-block">
                            <img src={assets.app_store} alt="App Store" className="h-12" />
                        </a>
                    </div>
                </div>
                <img className="absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden" src={assets.app_main_img} alt="Girl Image" />
            </div>
        </div>
    );
}

export default AppDownload;