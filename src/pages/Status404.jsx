import React from 'react'
import { Link } from 'react-router-dom'

function Status404() {
  return (
    <section className=' my-20 text-center w-full flex flex-col items-center gap-7'>
  <div className='p-4'>
    <p className=' text-xl'>Welcome to <b>T-Spins</b></p>
    <p>Unfortunately you landed on a broken/inexistent page, please return home.</p>
</div>

<Link to={"/"}><div className='flex gap-2 bg-blue-600 w-60 items-center justify-between rounded-2xl p-1 font-semibold px-1.5'> <p>PLEASE RETURN HOME</p> 
 
 <button className='bg-pink-500 w-6 rounded-2xl cursor-pointer'>
 &#10140;
 </button>

 
 
 </div></Link>

 

    </section>
  )
}

export default Status404