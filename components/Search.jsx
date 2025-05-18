'use client'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { setSearchQuery } from '@/Redux/Search/SearchData'
import { motion } from 'framer-motion'
const Search = () => {

  const [Input, setInput ] = useState('')
  const dispatch = useDispatch()
  const search = ()=>{
    dispatch(setSearchQuery(Input))
    setInput('')
  }
  const container = (delay) => ({
        hidden: {
            opacity: 0,
            y: -20,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration : 0.5,
                delay: delay,
                type: "spring",
                stiffness: 100,
            },
        },
    });
  return (
    <div>
      <div className="w-full px-4 py-10">
  <motion.div className="flex w-full max-w-4xl mx-auto" variants={container(1.5) } initial="hidden" animate="show">
    <input
      type="text"
      placeholder="Search for jobs, companies, or keywords"
      className="w-full px-4 py-2 border border-black-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e)=>setInput(e.target.value)} value={Input}
    />
    <button
      className="px-4 bg-blue-400 text-white rounded-r-md hover:bg-blue-700 cursor-pointer" onClick={search} 
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"
        ></path>
      </svg>
    </button>
  </motion.div>
</div>

    </div>
  )
}

export default Search
