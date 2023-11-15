import axios from 'axios';
import React, { useState, useEffect, useSelector } from 'react'
import { Link, Navigate } from 'react-router-dom';









function Index() {

  
  const [apidata, setApidata] = useState([]);
  //const token = useSelector((state) => state.user.token.token)




  const callGetapi = async () => {
    // const resp = await axios.get('http://localhost:3002/api/v1/articles');
    const resp = await axios.get('http://localhost:3001/articles');
    setApidata(resp.data)
    console.log(apidata)

  }

  useEffect(() => {
    callGetapi();
  }, []);
  return (
    <>

     (
       <section class="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
       <div class="container mx-auto">
         
         <div class="-mx-4 flex flex-wrap">

           {apidata.map((person) => (

             <div class="w-full px-4 md:w-1/2 lg:w-1/3">
               <div class="mx-auto mb-10 max-w-[370px]">
                 <div class="mb-8 overflow-hidden rounded">
                   <Link to={'#'}>
                     <img
                       src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                       alt="image"
                       class="w-full"
                     />
                   </Link>
                 </div>
                 <div>

                   <h3>
                     <a
                       href="javascript:void(0)"
                       class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                     >
                       {person.title}
                     </a>
                   </h3>
                   <span
                     class="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-orange-500"
                   >
                     Author    {person.author}
                   </span>

                 </div>

               </div>

             </div>
           ))}

         </div>
       </div>
     </section>
     )
     
    </>


  )
}

export default Index