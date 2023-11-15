

import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';






function ForgotPassword() {


    const [email, setEmail] = useState('');
    
   
    

    //const user = useSelector((state) => state.user.user.email)
    



    const submit = async e => {
        e.preventDefault();
        axios.post("http://localhost:3001/password/forgot",{email});
        alert('Email sent successfully..! Kindly check your Inbox and read the intructions which are given below.');

      
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
                        Forgot your Password ?
                    </h2>
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
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Send Mail
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
                <div>
                <p className="mt-10 text-center text-sm text-gray-500">
                        <h4>Instructions</h4>
                        <ul>
                            <li>Enter Your Mail id</li>
                            <li>If the email id is found You will receive a mail with link</li>
                            <li>Make sure the link is only valid 15mins</li>
                            <li>goto the link and reset your password</li>
                        </ul>
                    </p>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword