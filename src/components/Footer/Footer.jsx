import React from 'react'

const Footer = () => {
  return (
    <div className='bg-green-500 h-[10vh] md:h-[10vh]  flex justify-center items-center'>
      <p className="text-lg font-medium">
        © {new Date().getFullYear()} Hasib Hasan. All rights reserved.
      </p>


    </div>
  )
}

export default Footer