import React, { useEffect, useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
    // ============  useStates / Hook ================= 
    const [icon, setIcon] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const location = useLocation();
    useEffect(() => {
        setActiveLink(location.pathname || "/");
    }, [location.pathname]);

    // ============  Functions ================= 
    const toggleMenu = () => {
        setIcon(!icon);
    }
    
    const handlePath = (path) => {
        setActiveLink(path);
    }

    return (
        <nav className='bg-green-600 text-white py-4 md:py-6 sticky top-0 z-10 border-b border-red-800'>
            <div className=' container mx-auto flex   justify-between items-center '>
                <h1 className='text-2xl ml-4 font-bold'>Logo</h1>

                {/* =========================     Mobile Menu Btn   ============================ */}
                <div className=' md:hidden'>
                    <button onClick={toggleMenu}>
                        {
                            icon ? <IoMdCloseCircle /> : <TiThMenu />
                        }

                    </button>
                </div>

                <ul className='hidden md:flex space-x-4 md:space-x-6 hover:cursor-pointer'>
                    <Link to="/"
                        onClick={() => handlePath("/")}
                        className={`${activeLink === "/" ? 'text-sky-300' : 'hover:text-green-400 '}`}>
                        Home
                    </Link>
                    <Link to="/About"
                        onClick={() => handlePath("/About")}
                        className={`${activeLink === "/About" ? 'text-sky-300' : 'hover:text-green-400'}`}>
                        About
                    </Link>
                    <Link to="/Blogs"
                        onClick={() => handlePath("/Blogs")}
                        className={`${activeLink === "/Blogs" ? 'text-sky-300' : 'hover:text-green-400'}`}>
                        Blogs
                    </Link>
                    <Link to="/Products"
                        onClick={() => handlePath("/Products")}
                        className={`${activeLink === "/Products" ? 'text-sky-300' : 'hover:text-green-400'}`}>
                        Products
                    </Link>
                    <Link to="/Contact"
                        onClick={() => handlePath("/Contact")}
                        className={`${activeLink === "/Contact" ? 'text-sky-300' : 'hover:text-green-400'}`}>
                        Contact
                    </Link>
                </ul>
                <button className='hidden   cursor-pointer md:block md:mr-5 bg-white  text-black p-2 rounded-[10px]'>Login</button>


                {/*   ========================= Mobile Menu Collapsible ===== */}
                <div className={`bg-green-700 md:hidden w-full absolute top-full left-0 ${icon ? "block" : "hidden"}`}>
                    <ul className='flex flex-col items-center py-4 space-y-4 '>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                        <li><button className=' bg-white  text-black p-2 rounded-[10px]'>Login</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar