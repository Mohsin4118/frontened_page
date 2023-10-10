import React from 'react'

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df90] font-bold  p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-3xl font-bold py-3'>Fast, flexible financing for</p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
            <button className='bg-[#00df9a] w-[200px] mx-auto rounded-md py-2 my-4 font-bold text-black' >Get Started</button>
        </div>
    </div>
  )
}

export default Hero
