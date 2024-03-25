import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='relative w-full h-full z-20 bg-transparent sm:flex sm:justify-center sm:bg-yellow-800 sm:h-[100vh] '>
        <img
        src='https://images.pexels.com/photos/20218462/pexels-photo-20218462/free-photo-of-bmw-m5-competition.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='bg '
        className='absolute z-10 h-[100vh] w-full sm:hidden'
        />
        <div className='relative z-20 w-full sm:bg-black sm:text-white sm:my-20 sm:w-2/3 sm:rounded-md sm:shadow-2xl'>
            <h1 className=' py-20 text-white text-6xl font-semibold mx-4 sm:ml-60'>Hello!</h1>
            <h2 className=' mt-40 mx-4 font-semibold text-white text-lg sm:ml-60'>Welcome, login if you already have an account or <br/>signup to create an account</h2>
            <div className=' z-20 flex flex-col items-center my-8 sm:flex sm:flex-col sm:items-start sm:ml-60 '>
                <Link className=' text-xs w-60 text-center rounded-md py-2 bg-gray-700 font-semibold' to='/signup'>SIGNUP</Link>            
                <Link className=' text-xs w-60 text-center rounded-md bg-slate-900  text-white font-semibold py-2 mt-2 sm:mb-10' to='/login'>LOGIN</Link>
            </div>
        </div>
    </div>
  )
}

export default Home