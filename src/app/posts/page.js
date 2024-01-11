"use client";
import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';
import Image from 'next/image';

const Posts = () => {
    const [posts, SetPosts] = useState([]);

    const viewPost = async () => {
      try {
        const res = await axios.get(
          (`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs?populate=*`)
        );
        if (res?.data) {
          console.log(res);
          SetPosts(res.data.data);
        }
        console.log(res);
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    };
  
    useEffect(() => {
      viewPost();
    }, []);
    return (
      <div className='main'>
  <section className="text-gray-600 body-font">
  {posts.map((item) => (
  <div  key={item.id} className="container justify-items-center items-center px-5 py-24 mx-auto">
    <div className="px-[8rem] -mx-4 -mb-10 text-center">
      <div className="mb-10 px-4">
        <div className="rounded-lg h-64 overflow-hidden">
          <Image width={1500} height={1500} alt="content" className="object-cover object-center h-full w-full" src={`http://127.0.0.1:1337${item?.attributes?.Image?.data?.attributes?.url}`}/>
        </div>
        <h3 className="text-left mt-5 font-medium">Published On : {item?.attributes?.Date}</h3>
        <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{item?.attributes?.Title}</h2>
        <p className="leading-relaxed text-base text-justify">{item?.attributes?.Description}</p>
        <button className="flex mx-auto mt-6 text-white bg-blue-500 border-0 py-2 px-5 focus:outline-none hover:bg-blue-600 rounded">Read More..</button>
      </div>
    </div>
  </div>
  ))}
  </section>
      </div>
    
    )
}

export default Posts
