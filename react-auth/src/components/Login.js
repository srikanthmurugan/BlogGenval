
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { signInUser } from '../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import MyBlogs from './MyBlogs';
import About from './About';



function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
   
    

    //const user = useSelector((state) => state.user.user.email)
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const err = useSelector((state)=>state.user.error);
    const user = useSelector((state)=>state.user.user.email);


    const submit = async e => {
        e.preventDefault();

       const {data} = await axios.post('/users/sign_in', {
            email, password})
        


        // axios.defaults.headers.common['Authorization'] = `Bearer ${data['token']}`;

        dispatch(signInUser({ email, password }))

        navigate("/profile")
       
        
        
        
    }
   
    
    
    
    


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    
                    
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-red-900">
                                {err}
                    </label>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={submit} method="POST">
                        
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={e => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link to={"/forgot_password"} className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={e => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to={'/signup'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Register ?
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login