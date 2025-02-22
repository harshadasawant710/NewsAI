import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { motion } from "motion/react"
import {Button} from '@mantine/core'
import {X, Menu} from 'lucide-react'

const Navbar = () => {
    //console.log(import.meta.env.VITE_API_URL)
    const [isOpen, setIsOpen]= useState(false)

    const handleClick = () =>{
        setIsOpen(!isOpen)
    }
    return (
        <nav className='h-16 p-2 sticky top-0 z-50 bg-white opacity-70'>
            <div className='flex item-center justify-between mx-6'>
                <motion.h1 initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='text-2xl font-semibold'>NEWS</motion.h1>
                <ul className='hidden md:flex gap-4'>
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
                <div className='flex space-x-4 items-center justify-center'>
                    <Link to='/login' className='hidden md:block'>
                    <Button className='mx-1' variant="outline">LogIn</Button>
                    </Link>
                    <Link to='register' className='hidden md:block'>
                    <Button className='mx-1' variant="outline">Register</Button>
                    </Link>
                    <button className='md:hidden' onClick={handleClick}>{isOpen ? <X/> : <Menu/>}</button>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className='absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden'
                >
                    {['Home', 'Categories', 'Channels', 'About'].map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase()}`}
                            className='text-lg hover:text-gray-700'
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </Link>
                    ))}
                    <Link to='/login' className='w-full text-center' onClick={() => setIsOpen(false)}>
                        <Button className='w-3/4' variant="outline">LogIn</Button>
                    </Link>
                    <Link to='/register' className='w-full text-center' onClick={() => setIsOpen(false)}>
                        <Button className='w-3/4' variant="outline">Register</Button>
                    </Link>
                </motion.div>
            )}
        </nav>
    )
}

export default Navbar
