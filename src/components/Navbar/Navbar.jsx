    import React, { useState } from 'react'
    import { TiThMenu } from "react-icons/ti";
    import { IoMdCloseCircle } from "react-icons/io";
    import { Link } from 'react-router-dom';


    const Navbar = () => {
        // ============  useStates ================= 
        const [icon, setIcon] = useState(false);
        const [path, setPath] = useState("/")

        // ============  Functions ================= 

        const toggleMenu = () => {
            setIcon(!icon);
        }
        const handlePath = () => {
            setPath(path)
        }

        return (
            <nav className='bg-green-600 text-white py-4 md:py-6 sticky top-0 z-10 border-b border-red-800'>
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

                    <ul className='hidden md:flex space-x-4 md:space-x-6 hover:cursor-pointer'>
                        <Link to="/"
                        onClick={() => handlePath()}
                        className='hover:hover:text-green-400 '>
                        Home
                        </Link>
                            <Link to="About" 
                            onClick={() => handlePath()}
                        className='hover:text-green-400'>
                        About
                        </Link>
                            <Link to="Blogs" 
                            onClick={() => handlePath()}
                        className='hover:text-green-400'>
                        Blogs
                        </Link>
                            <Link to="Products" 
                            onClick={() => handlePath()}
                        className='hover:text-green-400'>
                        Products
                        </Link>
                            <Link to="Contact" 
                            onClick={() => handlePath()}
                        className='hover:text-green-400 '>
                        Contact
                        </Link>
                    </ul>
                    <button className='hidden md:block bg-white  text-black p-2 rounded-[10px]'>Login</button>


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