import React, { useState, useEffect } from 'react';
import { Navigate, useParams, useNavigate} from 'react-router-dom';



import axios from 'axios';

const BlogEdit = () => {
  const { id } = useParams(); // Get the blog post ID from the URL

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  
  

  useEffect(() => {
    // Fetch the blog post details from your backend API by the provided ID
    axios.get(`/articles/${id}`)
      .then((response) => {
        const data = response.data;
        setTitle(data.title);
        setBody(data.body);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const handleEditBlog = () => {
    // Send a request to update the blog post
    axios.put(`/articles/${id}`, { title, body })
      .then(() => {
        navigate('/myblogs');
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });

      
      
  };

  
  return (
    // <div>
    //   <h2>Edit Blog Post</h2>
    //   <form>
    //     <div>
    //       <label>Title:</label>
    //       <input
    //         type="text"
    //         value={title}
    //         onChange={(e) => setTitle(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <label>Body:</label>
    //       <textarea
    //         value={body}
    //         onChange={(e) => setBody(e.target.value)}
    //       />
    //     </div>
    //     <button type="button" onClick={handleEditBlog}>
    //       Save
    //     </button>
    //   </form>
    // </div>




<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
<div className="sm:mx-auto sm:w-full sm:max-w-sm">
    {/* <img
        className="mx-auto h-20 w-auto"
        src={logo}
        alt="Your Company"
    /> */}
    
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Edit Your Blog 
    </h2>
</div>

<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6"  method="POST">
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
                    
                     value={title}
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
                    onChange={e => setBody(e.target.value)}
                    id="description"
                    name="description"
                    type="text"
                    value={body}
                    
                    required
                    rows="4"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
        </div>

        <div>
            <button
                type="button"
                onClick={handleEditBlog}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Post
            </button>
        </div>
    </form>

</div>
</div>
  );
};

export default BlogEdit;
