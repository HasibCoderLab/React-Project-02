import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = () => {
    // ============  useState  + Function ================= 
    const [icon, setIcon] = useState(false);
    const toggleMenu = () =>{
        setIcon(!icon);
    }
    
    return (
        <nav className='bg-green-600 text-white py-4 md:py-6'>
            <div className=' container mx-auto flex   justify-between items-center '>
                <h1 className='text-2xl'>Logo</h1>

                {/* =========================     Mobile Menu Btn   ============================ */}
                <div>
                    <button onClick={toggleMenu}>
                        {
                            icon ? <IoMdCloseCircle /> :   <TiThMenu /> 
                        }                      
                        
                    </button>
                </div>

                <ul className=' flex  space-x-4  md:space-x-6 hover:cursor-pointer'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                </ul>
                <button>Login</button>
            </div>

        </nav>
    )
}

export default Navbar