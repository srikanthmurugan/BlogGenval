//import axios from 'axios'
 //import React, { useEffect, useState } from 'react'
// import { Navigate } from 'react-router-dom';
// import { logout } from '../redux/authSlice';
// import { useDispatch } from 'react-redux';

import { useSelector } from "react-redux"
//import { selectUser } from "../redux/authSlice"
// import { selectUser } from "../redux/authSlice"
import logo from '../assests/logo.avif'
import { Link, Navigate } from "react-router-dom";




const Home = (props) => {
    //const[name,setName]=useState('');
    //const dispatch = useDispatch();
  
    

    // useEffect(()=>{
    //     (
    //         async () =>{
    //             const {data} = await axios.get('/users/tokens/info');
    //             setName(data.email);
    //         }
    //     )()

    // },[])
    const name = useSelector((state)=>state.user.user.email);
    const id = useSelector((state)=>state.user.user.id);
    const cre = useSelector((state)=>state.user.user.created_at);
    const upt = useSelector((state)=>state.user.user.updated_at);
    // const name = selectUser.email;

    // const handleLogout =()=>{
    //   dispatch(logout)
    //   return <Navigate to='/login'/>
    // }
  return (
    <>
    
      <body >
      <div class="max-w-lg mx-auto my-10  rounded-lg shadow-md p-5">
        <img class="w-32 h-32 rounded-full mx-auto" src="https://picsum.photos/200" alt="Profile picture"></img>
        <h2 class="text-center text-2xl font-semibold mt-3">{name}</h2>
        <p class="text-center text-gray-600 mt-1">{cre}</p>
        <div class="flex justify-center mt-5">
          <Link to={'/blog'} class="text-blue-500 hover:text-blue-700 mx-3">Blogs</Link>
          
        </div>
        <div class="mt-5">
          <h3 class="text-xl font-semibold">Bio</h3>
          <p class="text-gray-600 mt-2">{name} is a software engineer with over 10 years of experience in developing web and mobile applications. He is skilled in JavaScript, React, and Node.js.</p>
        </div>
      </div>
    </body>
    
    </>
    
  )
}

export default Home