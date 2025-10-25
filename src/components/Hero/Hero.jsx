import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col bg-green-500  text-white px-4 items-center text-center justify-center h-[81vh]' style={{
        backgroundImage: "url('favicon.jpeg')",
      backgroundPosition:"center",
      backgroundSize:"cover"
    }} >
        <h1 className='font-bold text-4xl mb-4 md:text-6xl '>Welcome My Website</h1>
        <p className=' text-lg  md:text-xl   mb-4'> Start</p>
        <button className=' bg-white text-violet-600  font-bold px-6 py-2 hover:bg-gray-200 rounded-md cursor-pointer '>Buy Now</button>
    </div>
  )
}

export default Hero