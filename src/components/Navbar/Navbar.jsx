import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from 'react-router';

const Navbar = () => {
    // ============  useState  + Function ================= 
    const [icon, setIcon] = useState(false);
    const toggleMenu = () => {
        setIcon(!icon);
    }

    return (
        <nav className='bg-green-600 text-white py-4 md:py-6 relative'>
            <div className=' container mx-auto flex   justify-between items-center '>
                <h1 className='text-2xl ml-4 font-bold'>Logo</h1>

                {/* =========================     Mobile Menu Btn   ============================ */}
                <div className='md:hidden mr-4'>
                    <button onClick={toggleMenu}>
                        {
                            icon ? <IoMdCloseCircle /> : <TiThMenu />
                        }

                    </button>
                </div>

                <ul className=' hidden  md:flex  space-x-4  md:space-x-6 hover:cursor-pointer'>
                    <li>Home</li>
                    <Link></Link>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                </ul>
                <button className=' hidden md:block '>Login</button>

                {/*   ========================= Mobile Menu Collapsible ===== */}
                <div className={`bg-green-700 md:hidden w-full absolute top-full left-0 ${icon ? "block" : "hidden"}`}>
                    <ul className='flex flex-col items-center py-4'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blogs</li>
                        <li>Contact</li>
                        <li><button className=''>Login</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar