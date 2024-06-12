import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <>

            <div className="bg-gray-200 mb-5 lg:block hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-5 py-3 items-center justify-end">
                        <p>Track my order</p>
                        <div className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
                                <path d="M7 1L4 4L1 1" stroke="#5B5B5B" />
                            </svg>
                            <p>
                                Language
                            </p>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
                                <path d="M7 1L4 4L1 1" stroke="#5B5B5B" />
                            </svg>
                            <p>
                                USD
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="navbar bg-base-100 max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="text-linear text-3xl font-bold">Tijarah</a>
                </div>
                <div className="navbar-center hidden lg:flex">

                    <div className='flex items-center justify-center'>
                        <div className="flex w-[455px] mx-10 rounded">
                            <input className="w-full bg-gray-200 rounded-l-md border-none px-4 text-#6D6D6D outline-none focus:outline-none" type="search" name="search" placeholder="Search for products" />
                            <button type="submit" className="rounded-r-md button-linear px-4 py-2 text-white">
                                Search
                            </button>
                        </div>
                    </div>


                </div>
                <div className="navbar-end">
                    <div className="flex gap-2 items-center">
                        <IoCartOutline className="text-3xl" />
                        <FaRegUser className="text-2xl" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;