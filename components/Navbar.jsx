'use client'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import {motion} from 'framer-motion'

const Navbar = () => {
    const { data: session } = useSession()
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
            <nav>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <motion.div className="flex items-center" variants={container(0.5) } initial="hidden" animate="show">
                            <a href="#" className="text-3xl font-bold text-blue-400">JobIndeed</a>
                        </motion.div>
                        {session ? (
                            <motion.div className="flex items-center space-x-4" variants={container(1) } initial="hidden" animate="show">
                                <span className="text-sm text-gray-700 md:block hidden">Welcome, {session.user.name}</span>
                                <button onClick={() => signOut()} className="px-4 py-2 text-sm text-white bg-red-400 rounded-2xl hover:bg-red-700 cursor-pointer">Logout</button>
                            </motion.div>
                        ) : (
                            <motion.div className="flex items-center space-x-4" variants={container(1) } initial="hidden" animate="show">
                                <button onClick={() => signIn()} className="px-4 py-2 text-sm text-white bg-blue-400 rounded-2xl hover:bg-blue-400 cursor-pointer">Login</button>
                                
                            </motion.div>
                        )}

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
