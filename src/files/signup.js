import React,{useState} from 'react'
import { Link } from 'react-router-dom';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; 
import firebaseConfig from './firebaseConfig';

function Signup() {
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// // Initialize Firebase Authentication
const auth = getAuth(app);
  

    //formData to hold state of the input elements
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '', 
        confirmPassword: '',
      });

      const { name, email, password, confirmPassword } = formData;

      //state to hold the error
      const [ error, setError ] = useState(false)

      const handleInputChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
      }

      const handleSubmit = async  (e) => {
        e.preventDefault();
        // Check if any required fields are empty
        if (!name || !email || !password || !confirmPassword) {
            setError(true);
        } else {
            // console.log(data)
            try {
                const user = await createUserWithEmailAndPassword(auth,  email, password);
                console.log(user)
            } catch (error) {
                console.log(error)
            }
            
            setError(false);       
        }
        console.log("submited")
      };


  return (
    <div className='flex justify-center items-center h-[100vh] font-vollkorn sm:bg-yellow-800 '>
        
            <img
            alt='bg'
            // src='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            src='https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=600'
            className='absolute sm:hidden  t-0 w-full h-full z-10'
            />
        
        <div className='relative flex flex-col z-20 font-vollkorn w-full sm:w-2/3  h-[80vh] sm:h-[auto] text-xs sm:text-sm sm:bg-black sm:text-yellow-800 sm:rounded-md border-none sm:border border-gray-800 sm:shadow-2xl px-6 sm:px-1 z-20 m:bg-black sm:text-white'>
        <h1 className='text-2xl sm:text-4xl font-semibold  sm:mt-10 sm:text-white sm:ml-80 sm:pl-10 sm:text-yellow-800'>SIGN UP</h1>
        <h2 className='font-semibold text-2xl font-vollkorn sm:ml-80 sm:pl-10'>Welcome</h2>
        <h2 className='font-semibold text-2xl pb-2 sm:pb-8 sm:ml-80 sm:pl-10'>Signup to create an Account!</h2>
        <form onSubmit={handleSubmit} className='sm:flex sm:flex-col sm:items-center sm:w-full sm:font-semibold '>
            <div className='relative flex  flex-col my-2 font-vollkorn sm:w-2/5 '>
                <label className='text-xs sm:text-sm text-white px-1 sm:text-yellow-800 '>Name</label>
                <input
                name='name'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}
                className='relative border-b border-gray-400 h-10 sm:py-0 focus:border-green-700 outline-none bg-white opacity-40 border rounded-lg px-2 sm:bg-black sm:border-yellow-800 sm:text-white'
                />
                {error && !name && <p className='text-red-700 pl-4 text-center font-semibold'>Field is required</p>}
            </div>

            <div className='relative flex flex-col  my-2 sm:w-2/5'>
                <label className='text-xs sm:text-sm text-white px-1 font-semibold sm:text-yellow-800'>Email</label>
                <input
                name='email'
                autoComplete='off'
                type='email'
                value={email}
                onChange={handleInputChange}
                className='relative   border-gray-400 h-10 py-2 sm:py-0 focus:border-green-700 outline-none z-30 bg-white opacity-40 border rounded-md px-2 sm:bg-black sm:border-yellow-800 sm:text-white'
                />
                {error && !email && <p className='text-red-700 pl-4 text-center font-semibold'>Field is required</p>}
            </div>

            <div className='relative flex flex-col my-2 b sm:w-2/5'>
                <label className='text-xs sm:text-sm  text-white px-1 font-semibold sm:text-yellow-800'>Password</label>
                <input
                name='password'
                autoComplete='off'
                type='password'
                value={password}
                onChange={handleInputChange}
                className='relative border-b border-gray-400 h-10 py-2 sm:py-0 focus:border-green-700 outline-none bg-white opacity-40 border rounded-md px-2 sm:bg-black sm:border-yellow-800 sm:text-white'
                />
                {error && !password && <p className='text-red-700 pl-4 text-center font-semibold'>Field is required</p>}
            </div>

            <div className='relative flex flex-col py-2 sm:w-2/5'>
                <label className='text-xs sm:text-sm text-white px-1 font-semibold sm:text-yellow-800'>Confirm Password</label>
                <input
                name='confirmPassword'
                autoComplete='off'
                type='password'
                value={confirmPassword}
                onChange={handleInputChange}
                className='relative border-b border-gray-400 h-10 py-1 sm:py-0 focus:border-green-700 outline-none bg-white opacity-40 border rounded-md px-2 sm:bg-black sm:border-yellow-800 sm:text-white'
                />
                {error && !confirmPassword && <p className='text-red-700 text-center font-semibold'>Field is required</p>}
                {/* {error && !confirmPassword && <p className='text-red-700 text-center font-semibold'>Field is required</p>} */}
            </div>

            <div className='w-full flex justify-center my-4 mt-20 sm:mt-1 '>
            <button className='w-2/3 bg-black text-white rounded-md py-1 sm:hover:text-green-600 text-white font-semibold text-base sm:w-1/3 sm:bg-white sm:text-white sm:my-6 sm:bg-yellow-800'>SUBMIT</button>
            </div>

            <div className='flex  pb-20 text-white justify-center'>
                <h3 className='mx-2 sm:text-yellow-800'>ALready have an account?</h3>
                <Link className='underline  sm:hover:text-blue-900' to='/login'>Login</Link>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Signup;