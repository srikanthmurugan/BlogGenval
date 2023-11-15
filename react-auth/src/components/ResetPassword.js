

import axios from 'axios';
import React, { useState } from 'react'


import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';







function ResetPassword() {

    const [npassword, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const { resetToken } = useParams();
    const navigate = useNavigate();
   

    

    const dispatch = useDispatch();
    const err = useSelector((state)=>state.user.error);


    const submit = async e => {
        e.preventDefault();

        if (npassword === cpassword){
            
            axios.post("http://localhost:3001/password/reset",{
                password:npassword,
                token:resetToken});
            navigate("/login")

        }
        else{
            alert("New password and Confirm password should be same");
        }
        

          }
    
  
    
    


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        className="mx-auto h-20 w-auto"
                        src={logo}
                        alt="Your Company"
                    /> */}
                    
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Reset Your Password {resetToken}
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={submit} method="POST">
                        

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                   New Password
                                </label>
                                
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
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                  Confirm  Password
                                </label>
                                
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={e => setCpassword(e.target.value)}
                                    id="cpassword"
                                    name="cpassword"
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
                               Reset
                            </button>
                        </div>
                    </form>

                    
                </div>
            </div>
        </>
    )
                }

export default ResetPassword