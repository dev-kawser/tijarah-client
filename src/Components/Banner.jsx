


const Banner = () => {



    return (
        <div className="mt-5 flex gap-12">


            <div className="w-1/4 banner-linear p-4 rounded-md">
                <div className="flex flex-col gap-3">
                    <a>Men’s Fashion</a>
                    <a>Health & Beauty</a>
                    <a>Women’s Fashion</a>
                    <a>Wearable Accessories</a>
                    <a>Baby & Kids</a>
                    <a>Foods & Drinks</a>
                    <a>Sports & Toys</a>
                    <a>Electronics Devices</a>
                    <a>Electronics Accessories</a>
                    <a>Home Appliance</a>
                </div>
            </div>


            <div className="w-3/4 banner-linear p-7 rounded-md">
                <div className="flex gap-11 items-center">
                    <div className="space-y-6">
                        <h1 className="text-black text-4xl font-bold">
                            30% off on wrist <br /> watches
                        </h1>
                        <p className="max-w-[415px] text-[17px] text-black ">
                            Get 30% off on every watches. This hot summer deal for you from us. Get them quickly cuz offers are limited on this deal.
                        </p>
                        <button className="rounded-md button-linear text-white py-2 px-[10px]">
                            View Watches
                        </button>
                    </div>
                    <div>
                        <img className="" src="https://i.ibb.co/L6p4xP2/pexels-fernando-arcos-190819-1.png" alt="" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="135" height="15" viewBox="0 0 135 15" fill="none">
                        <rect x="0.5" y="0.5" width="14" height="14" rx="7" stroke="url(#paint0_linear_15_54)" />
                        <rect x="30.5" y="0.5" width="14" height="14" rx="7" stroke="url(#paint1_linear_15_54)" />
                        <rect x="60" width="15" height="15" rx="7.5" fill="url(#paint2_linear_15_54)" />
                        <rect x="90.5" y="0.5" width="14" height="14" rx="7" stroke="url(#paint3_linear_15_54)" />
                        <rect x="120.5" y="0.5" width="14" height="14" rx="7" stroke="url(#paint4_linear_15_54)" />
                        <defs>
                            <linearGradient id="paint0_linear_15_54" x1="0" y1="0" x2="15" y2="15" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EB00FF" />
                                <stop offset="1" stopColor="#001AFF" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_15_54" x1="30" y1="0" x2="45" y2="15" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EB00FF" />
                                <stop offset="1" stopColor="#001AFF" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_15_54" x1="60" y1="0" x2="75" y2="15" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#001AFF" />
                                <stop offset="1" stopColor="#EB00FF" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_15_54" x1="90" y1="0" x2="105" y2="15" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EB00FF" />
                                <stop offset="1" stopColor="#001AFF" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_15_54" x1="120" y1="0" x2="135" y2="15" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#EB00FF" />
                                <stop offset="1" stopColor="#001AFF" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Banner;