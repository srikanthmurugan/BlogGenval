
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState,useSelector } from 'react'

import axios from 'axios';



function BlogForm(props) {
    

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [check, setCheck] = useState('');
    const navigate = useNavigate();
    
    // const [navigate, setNavigate] = useState(false);
   // const token = useSelector((state) => state.user.token.token)
   const token = props.token

    

    
    
    const axiosConfig = {
        headers: {
            'Authorization' : `Bearer ${token}`,
        },
    }



    const submit = async e => {
        e.preventDefault();
        
        const postData = {
            article: {
              title: title,
              body: description,
            }
          };
          console.log(postData)
          
        
        axios.post('http://localhost:3001/articles',postData,axiosConfig);
        navigate('/myblogs');
        

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
                        Post Your Blog 
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={submit} method="POST">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                Title
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={e => setTitle(e.target.value)}
                                    id="title"
                                    name="title"
                                    type="text"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                    Description
                                </label>
                                
                            </div>
                            <div className="mt-2">
                                <textarea
                                    onChange={e => setDescription(e.target.value)}
                                    id="description"
                                    name="description"
                                    type="text"
                                    
                                    required
                                    rows="4"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Post
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default BlogForm