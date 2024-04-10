import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import useAuthStore from './authStore';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import firebaseConfig from './firebaseConfig';


function Login() {
const navigate = useNavigate();

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

// // Initialize Firebase Authentication
const auth = getAuth(app); // Initialize Firebase Auth

    //formData to hold state of the input elements
    const [formData, setFormData] = useState({
        email: '',
        password: '', 
      });

      const { email, password } = formData;

      //state to hold the error
      const [ error, setError ] = useState(false)

      const handleInputChange = (e) => {
        e.preventDefault()
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if any required fields are empty
        if ( !email || !password) {
            setError(true);
        } else {
            try {
                const user = await signInWithEmailAndPassword(auth, email, password);
                console.log("user logged in",user);
                alert('user has been logged in')
                useAuthStore.getState().login();  
                console.log("submited")  
                // toast.success('login successful')          
                navigate('/welcome');
            } catch (error) {
                console.log(error)
                // setErrorMessage('Invalid credentials. Please try again!'); // Set error message
            }
        }
      };
  return (
    <div className='flex justify-center items-center h-[100vh] font-vollkorn sm:bg-yellow-800'>
        {/* <ToastContainer className='absolute z-30'/>     */}

            <img
            src='https://images.pexels.com/photos/5381501/pexels-photo-5381501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            className='absolute  sm:hidden t-0 w-full h-full z-10 '
            alt='bg'
            />
        
        <div className='mt-60 sm:mt-0 relative flex flex-col sm:items-center z-20 font-vollkorn w-full sm:w-2/3 h-[80vh] sm:h-[auto] text-xs sm:text-sm  border-none sm:border border-gray-800 sm:shadow-2xl px-6 sm:px-1 z-20 sm:bg-black sm:text-white '>
        <h1 className='text-2xl sm:text-4xl font-semibold mt-2 sm:mt-10 text-white sm:my-2 sm:text-yellow-800'>LOGIN</h1>
        <h2 className='font-semibold text-2xl font-vollkorn text-white sm:text-yellow-800'>Welcome Back!</h2>
        
        <form onSubmit={handleSubmit} className='sm:w-2/5 '>
            

            <div className='relative flex flex-col  my-2 '>
                <label className='text-xs sm:text-sm  px-1 text-white sm:text-yellow-800 sm:font-semibold'>Email</label>
                <input
                name='email'
                autoComplete='off'
                type='email'
                value={email}
                onChange={handleInputChange}
                className='relative border-gray-400 h-10 py-2 sm:py-0 focus:border-green-700 outline-none z-30 bg-white opacity-30 border rounded-md px-2 font-semibold sm:text-white sm:border-yellow-800 sm:bg-transparent'
                />
                {error && !email && <p className='text-red-700 pl-4 text-center'>Field is required</p>}
            </div>

            <div className='relative flex flex-col my-2 b '>
                <label className='text-xs sm:text-sm px-1 text-white sm:text-yellow-800 sm:font-semibold'>Password</label>
                <input
                name='password'
                autoComplete='off'
                type='password'
                value={password}
                onChange={handleInputChange}
                className='relative border-b border-gray-400 h-10 py-2 sm:py-0 focus:border-green-700 outline-none bg-white opacity-30 border rounded-md px-2 font-semibold sm:text-white sm:border-yellow-800 sm:bg-transparent'
                />
                {error && !password && <p className='text-red-700 pl-4 text-center'>Field is required</p>}
            </div>

            <div className='w-full flex justify-center my-4 mt-12 sm:mt-1 '>
            <button className='w-2/3 bg-black text-white rounded-md py-3  text-white font-semibold text-base sm:mt-10 sm:bg-yellow-800 sm:text-white sm:hover:text-green-600 '>SUBMIT</button>
            </div>

            <div className='flex  pb-20 text-white justify-center sm:my-4'>
                <h3 className='mx-2 sm:text-yellow-800 sm:font-semibold'>Dont have an account?</h3>
                <Link className='underline sm:hover:text-blue-700  sm:font-semibold ' to='/signup'>Signup</Link>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login;