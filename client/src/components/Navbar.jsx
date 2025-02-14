import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"

const Navbar = () => {
    return (
        <nav className='h-16 p-2'>
            <div className='flex item-center justify-between mx-6'>
                <motion.h1 initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-2xl font-semibold'>NEWS</motion.h1>
                <ul className='flex gap-4'>
                    {
                        ['Home', 'Categories', 'Channels', 'About'].map((item) =>
                        (
                            <motion.li
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: 'spring', stiffness: 100 }}
                                key={item}
                                className='hover:text-gray-700'>
                                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                            </motion.li>
                        ))
                    }
                </ul>
                <div>
                    <button>LogIn</button>
                    <button>Register</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
