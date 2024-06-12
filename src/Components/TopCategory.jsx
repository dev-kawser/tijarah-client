

const TopCategory = () => {
    return (
        <div className="mt-20">
            <div>
                <h1 className="text-[25px] font-semibold">
                    Top Categories
                </h1>
            </div>
            <div className=" mt-10 grid grid-cols-3 gap-5">
                <div className="relative bg-[url('https://i.ibb.co/GsM2Bpf/header-blog-post.jpg')] bg-no-repeat bg-cover bg-center h-[170px] rounded-md">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
                    <h1 className="relative text-[30px] font-semibold text-white px-[77px] py-[68px]">
                        Men’s Fashion
                    </h1>
                </div>
                <div className="relative bg-[url('https://i.ibb.co/Q6pWhSv/47955063506-9ee4337660-b.jpg')] bg-no-repeat bg-cover bg-center h-[170px] rounded-md">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
                    <h1 className="relative text-[30px] font-semibold text-white px-[77px] py-[68px]">
                        Women’s Fashion
                    </h1>
                </div>
                <div className="relative bg-[url('https://i.ibb.co/F8cDFcH/Whats-App-Image-2021-09-23-at-1-32-11-AM.jpg')] bg-no-repeat bg-cover bg-center h-[170px] rounded-md">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
                    <h1 className="relative text-[30px] font-semibold text-white px-[77px] py-[68px]">
                        Baby & Kids
                    </h1>
                </div>
                <div className="relative bg-[url('https://i.ibb.co/ry6N4Gs/04-FF-gold-129-ab.jpg')] bg-no-repeat bg-cover bg-center h-[170px] rounded-md">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
                    <h1 className="relative text-[30px] font-semibold text-white px-[77px] py-[68px]">
                        jewelries
                    </h1>
                </div>
                <div className="relative bg-[url('https://i.ibb.co/K60n68j/09-group-bags.webp')] bg-no-repeat bg-cover bg-center h-[170px] rounded-md">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
                    <h1 className="relative text-[30px] font-semibold text-white px-[77px] py-[68px]">
                        Travel & Bags
                    </h1>
                </div>
                <div className="relative bg-[url('https://i.ibb.co/nmdWf03/watches-fix.webp')] bg-no-repeat bg-cover bg-center h-[170px] rounded-md">
                    <div className="absolute inset-0 bg-black bg-opacity-50 rounded-md"></div>
                    <h1 className="relative text-[30px] font-semibold text-white px-[77px] py-[68px]">
                        Watches
                    </h1>
                </div>

            </div>
        </div>
    );
};

export default TopCategory;