import axios from 'axios';
import React from 'react'
import { Navigate,  useParams } from 'react-router-dom/dist'



function BlogDelete() {
    const {id} = useParams();

    const handleEditBlog = () => {
        // Send a request to update the blog post
        axios.delete(`/articles/${id}`)
    }
    handleEditBlog();
          
  return (
    <Navigate to="/myblogs"/>
  )
    
}

export default BlogDelete;