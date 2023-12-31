import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
const [nav, setNav] = useState(true)

const handleNav = () => {
    setNav(!nav)
}

  return (
    <div className='flex text-white items-center h-24 max-w-[1640px] mx-auto'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>React.</h1>
      <ul className='md:flex hidden'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Reosurces</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div onClick={handleNav} className='m-4 block md:hidden'>
        {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
     </div>
      <div className={!nav? 'fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>React.</h1>
      <ul className='uppercase p-4'>
        <li className='p-4 border-b border-gray-600'>Home</li>
        <li className='p-4 border-b border-gray-600'>Company</li>
        <li className='p-4 border-b border-gray-600'>Reosurces</li>
        <li className='p-4 border-b border-gray-600'>About</li>
        <li className='p-4 border-b border-gray-600'>Contact</li>
      </ul>
      </div>
        
      
    </div>
  )
}

export default Navbar
