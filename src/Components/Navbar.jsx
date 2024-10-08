import React from 'react'
import { IoCart } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const {cart} = useSelector((state)=>state);
  return (
    <div >
        <div className="flex justify-between items-center h-20 max-w-6xl mx-auto">

            <NavLink to="/">
              <div className='ml-10 flex justify-center items-center gap-x-3'>
              <img src="/logo1.png" alt="logo" className='h-14'/>
              {/* <div className='font-bold text-green-700 text-[35px]'>Shopsy</div> */}
              </div>
            </NavLink>
            <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>

              <NavLink to="/">
                <p>Home</p>
              </NavLink>


                <NavLink to="/cart">
                <div className='relative'>
                  <IoCart className='text-2xl' />
                  {
                    cart.length>0 &&
                    <span  className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                  }
                  
                </div>
                 
                </NavLink>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar
