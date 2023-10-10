import React from 'react'
import single from '../../assets/single.png'
import double from '../../assets/double.png'
import triple from '../../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 my-16 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 mx-4 rounded-lg hover:scale-105 duration-300 border-t'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt=''/>
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center font-bold text-4xl'>$150</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] mx-auto rounded-md py-2 my-4 font-bold text-black'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 mx-4 rounded-lg hover:scale-105 duration-300 border-t'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={double} alt=''/>
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center font-bold text-4xl'>$150</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#000300] w-[200px] mx-auto rounded-md py-2 my-4 font-bold text-[#00df9a]'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 mx-4 rounded-lg hover:scale-105 duration-300 border-t'>
            <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt=''/>
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center font-bold text-4xl'>$150</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8'>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
            </div>
            <button className='bg-[#00df9a] w-[200px] mx-auto rounded-md py-2 my-4 font-bold text-black'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
