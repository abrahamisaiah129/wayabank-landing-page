

import HeroRightImage from '../assets/hero-section.png';

function HrBanner() {
    return (
        <div className="w-full px-8 md:px-20 mt-20">
            <div className="bg-blue-50 grid grid-cols-1 md:grid-cols-2 w-full h-96 rounded-3xl">
                <div className="pl-8 md:pl-20 pr-8 md:pr-24 pt-20">
                    <h4 className="text-gray-500 text-4xl font-semibold">Wayapay Web</h4>
                    <p className="mt-4 text-gray-500 text-lg">Sell online with an ecommerce website, Mobile App and more.</p>
                    <div class="btn-container mt-10 flex flex-col md:flex-row rounded">
                        <button class="btn-register2 rounded text-sm shadow">
                            Get started
                            <svg width="10" height="12" viewBox="0 0 10 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.890625 12L6.51563 7L0.890624 2L2.01562 -3.31582e-08L9.89063 7L2.01563 14L0.890625 12Z" fill="white" />
                            </svg>
                        </button>
                        <button class="explore-btn rounded text-sm font-medium rounded shadow">
                            LEARN MORE
                        </button>
                    </div>
                </div>
                <div className="flex justify-end hidden md:flex">
                    <img src={HeroRightImage} alt="" className="-mt-14 -mr-8" width="540px" />
                </div>
            </div>
        </div>
    )
}

export default HrBanner
