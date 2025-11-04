import React from 'react'

function Footer() {

    const date = new Date().getFullYear()
    
    console.log(date)

  return (
    <footer className='text-center absolute w-full bottom-0 p-5 font-semibold'> &copy;T-spins {date}</footer>
  )
}

export default Footer