import create from 'zustand';

const useAuthStore = create((set) => ({
    //initial state : user is not logged in
    isLoggedIn : false,

    //function to update authentication state to indicate the user is logged in
    login : () => set( {isLoggedIn : true} ),

    //function to update the authentication state to indicate that the user is logged out 
    logout : () => set( {isLoggedIn : false} )
}));

export default useAuthStore;