import React from 'react'
import { getAuth, signOut } from 'firebase/auth';
import useAuthStore from './authStore';
import { useNavigate } from 'react-router-dom';

function WelcomePage() {

    const isLoggedIn = useAuthStore(state => state.isLoggedIn);
    const navigate = useNavigate();

    if (!isLoggedIn){
      navigate('/login'); //if not logged in navigate back to loginpage
      return null;
    }

    const handleLogout = async () => {
      const auth = getAuth();
      try {
          await signOut(auth); // Log out using Firebase
          useAuthStore.getState().logout(); // Update Zustand store on logout
          alert('you have been logged out')
          navigate('/'); 
      } catch (error) {
          console.error('Error logging out:', error);
      }
    };
  return (
    <div>
      <h1>WELCOME!</h1>
      <h1>YOU HAVE SUCCESFULLY BEEN LOGGED IN!</h1>
      <button onClick={handleLogout} className='px-8 rounded-md mx-4 my-2 bg-red-800 text-white text-xs py-2'>Logout</button>
    </div>
  )
}

export default WelcomePage;