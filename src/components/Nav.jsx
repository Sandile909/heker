import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
  const [isOpen, setIsOpen] = useState("closed")

 
function toggleModal() {
      setIsOpen(isOpen === "closed" ? "open" : "closed")
      console.log(isOpen)
    }

useEffect(() => {
  document.getElementById("btn").onclick = () => {
      setIsOpen("closed")
    }
}, [])

    
    
  return (
    <header className=' flex w-full md:px-8'>

       {/* TITLE */}

    <nav className='flex justify-between items-center w-full p-3 md:p-4 z-50 '>
    <Link to={"/"}><h2 className='font-semibold text-1xl'>T-Spins</h2></Link>
    

       {/** main navigation */}

  <div className={`md:flex items-center justify-center md:gap-3 ${isOpen === "closed" ? "hidden" : "flex" } absolute md:static flex-col md:flex-row bg-teal-900 top-0 p-3 left-0 rounded md:p-0 w-full md:w-auto md:bg-transparent text-xl md:text-sm gap-3`} id='btn'>

        {/* button to close modal */}

        <div className='w-full text-right md:hidden '>
          <button className='text-xl cursor-pointer' onClick={() => {toggleModal()}}>&#10006;</button>
        </div>

    {/** NAV BAR */}
        <NavLink to={"/strike-frenzy"}>
        <button className='cursor-pointer'>Strike Frenzy</button>
        </NavLink>

        <NavLink to={"/hot-betway"}>
        <button className='cursor-pointer'>Hot Hot Betway</button>
        </NavLink>

        <NavLink to={"/hothotfruits"}>
         <button className='cursor-pointer'>Hot Hot Fruits</button>
         </NavLink>

        <NavLink to={"/wealthin"}>
        <button className='cursor-pointer'>Wealth In</button>
        </NavLink>

   
  </div>

  <div className='md:hidden'>
    <button className='text-xl cursor-pointer' onClick={() => {toggleModal()}}>&#9776;</button>
  </div>
   
    </nav>
   </header>
  
)
}

export default Nav