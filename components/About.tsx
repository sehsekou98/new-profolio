import React from 'react'
import { motion } from "framer-motion"
import {  PageInfo } from '../typings';
import { urlFor } from '../sanity'; 




type Props = {
  pageInfo: PageInfo
}

export default function About({pageInfo}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
     transition={{duration:1.5}}
     whileInView={{opacity: 1}}
    className='flex flex-col relative h-screen text-center
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly
    mx-auto items-center'>
    <h3 className='absolute top-12 uppercase tracking-[20px]
    text-blue-500 text-2xl'>
        About
    </h3>
   <motion.img 
   initial={{
      x:-200,
      opacity: 0,
   }}
   transition={{duration:1.2,}}
   whileInView={{opacity: 1, x:0}}
   viewport={{once:false}}
   src={urlFor(pageInfo?.profilePic).url()} 
   className='-mb-20 md:mb-0 flex-sheink-0 w-56 h-56 rounded-full
   object-cover md:rounded-lg md:w-64 md:h-95
   xl:w-[500px] xl:h-[600px]'
   alt='profilePic'
   />

   <div className='space-y-10 px-0 md:px-10'>
    <h4 className='text-4xl font-semibold'>
        Get To{" "} <span className='underline
        decoration-blue-500'>Know</span>{" "}  Me.
    </h4>
    <p className='text-base'>{pageInfo?.backgroundInfomation}</p>
   </div>
   </motion.div>
  );
}


