'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Search from './Search'
import { useSelector, useDispatch } from 'react-redux'
import { setCards } from '@/Redux/Fetch/Fetchdata'
import Link from 'next/link'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { marked } from '@/Redux/Saved/Bookmak'
import Footer from './Footer'
import { motion } from 'framer-motion'
import Spinner from './Spinner'
const JobDesc = () => {
  const cards = useSelector((state) => state.fetch.cards)
  const search = useSelector((state) => state.search.searchQuery)
  const bookmark = useSelector((state) => state.bookmark.bookmarks)
  const dispatch = useDispatch()
  const { data: session } = useSession()
  const [marked1, setmarked] = useState('')
  const [bookmarked, setBookmarked] = useState('')
  const [open, isOpen] = useState(null)
  const [loading, setloading] = useState(false)
  const info = (id) => {
    isOpen(id)
  }
  const closeBox = () => {
    isOpen(null)
  }
  const book = (id) => {
    dispatch(marked(id))
    setmarked('Saved')
    setTimeout(() => {
      setmarked('')
    }, 1500);
  }
  const mark = (id) => {
    dispatch(marked(id))
    setBookmarked('Removed from Saved')
    setTimeout(() => {
      setBookmarked('')
    }, 1500);
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
        duration: 0.5,
        delay: delay,
        type: "spring",
        stiffness: 100,
      },
    },
  });
  useEffect(() => {
    const fetchData = async () => {
      setloading(true)
      const url = 'https://api.apijobs.dev/v1/job/search';
      const options = {
        method: 'POST',
        headers: {
          'apikey': process.env.NEXT_PUBLIC_APIJOBS_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          q: search
        })
      };
      const res = await fetch(url, options);
      const data = await res.json()
      dispatch(setCards(data))
      setloading(false)
    }
    fetchData()
  }, [session, dispatch, search])

  if (!session) {
    return (
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='text-6xl font-bold text-center py-10 text-blue-400'>Please Login to see the Jobs</h1>
      </div>
    )
  }

  return (
    <>
      <div>
        {session?.user?.name && (<motion.h1 className='md:text-6xl font-bold text-center py-10 text-blue-400 display text-2xl' variants={container(0.5)} initial='hidden' animate='show'>Welcome! Back {session.user.name}</motion.h1>)}
        <Search />


        <motion.h1 className='text-center font-bold text-blue-400 text-4xl' variants={container(1)} initial='hidden' animate='show'>Featured Jobs</motion.h1>
        {loading ? (<Spinner />) : (cards?.hits?.map(item => {
          const isBookmarked = bookmark.includes(item.id)
          const isOpen = open === item.id
          return (

            <div>
            <div key={item.id} className='flex flex-col items-center justify-center'>
              <motion.div className='bg-blue-50 shadow-md rounded-lg p-6 m-4 w-full flex flex-col items-center gap-2 hover:scale-105 transition-transform duration-300 cursor-pointer ' whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.2 }}>
                <h2 className='text-2xl font-bold text-blue-400 text-center' onClick={() => info(item.id)}>{item.title}</h2>
                {isOpen && (<>

                  {/* FLOATING DETAIL BOX */}
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white w-96 max-w-full p-6 rounded-lg shadow-xl border border-gray-300 relative">
                      <button
                        onClick={closeBox}
                        className="absolute top-2 right-3 text-gray-500 hover:text-gray-800"
                      >
                        ✕
                      </button>
                      {/* Your detailed content */}
                      <h2 className="text-2xl font-bold text-blue-500 mb-1">{item.title}</h2>
                      <p className="text-sm text-gray-600 mb-4">{item.hiring_organization_name}</p>

                      <div className="space-y-2 text-gray-700 text-sm">
                        <p><span className="font-semibold text-gray-800">City:</span> {item.city}</p>
                        <p><span className="font-semibold text-gray-800">Country:</span> {item.country}</p>
                        <p><span className="font-semibold text-gray-800">Posted On:</span> {item.created_At}</p>
                      </div>
                      <p className="text-sm text-gray-700">

                      </p>
                    </div>
                  </div></>)}
                <p className='text-gray-800 font-bold text-center'>Company Name: {item.hiring_organization_name}</p>
                <p className='text-gray-800 font-bold text-center'>Workplace_Type : {item.workplace_type}</p>

                <p className='text-gray-600 text-center'>{item.employment_type}</p>
                <p className='text-gray-600 text-center'>Location: {item.city}</p>
                <p className='text-gray-600 text-center'>Country: {item.country}</p>
                <button className='bg-blue-400 px-3 py-2 rounded-2xl hover:scale-105 transition-transform duration-150 cursor-pointer'><Link href={item.website}></Link>Apply</button>
                <div className='flex items-center gap-2 justify-end'>
                  {isBookmarked ? (<BsBookmarkFill className=' text-2xl cursor-pointer w-6-h-6' onClick={() => mark(item.id)} />) : (<BsBookmark className='text-gray-400 text-2xl cursor-pointer' onClick={() => book(item.id)} />)}
                </div>
              </motion.div>

            </div>
            </div>




          )

        }))}
        {marked1 && <div className='fixed bottom-0 right-0 left-0 bg-blue-400 text-white text-center py-2 transition-transform duration-200 ease-in-out'>{marked1}</div>}
        {bookmarked && <div className='fixed bottom-0 right-0 left-0 bg-red-400 text-white text-center py-2'>{bookmarked}</div>}

        <Footer />

      </div>
    </>

  )
}

export default JobDesc
