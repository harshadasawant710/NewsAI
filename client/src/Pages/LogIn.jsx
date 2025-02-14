import React,{useState} from 'react'
import { motion } from 'motion/react'
import { Mail, Lock, Unlock } from 'lucide-react'
import {Button} from '@mantine/core'


const LogIn = () => {

    const[isLock,setIsLock]=useState(false)
    const[changeInput,setChangeInput]=useState(false)

    const handleChange = () =>{
        setIsLock(!isLock)
        setChangeInput(!changeInput)
    }
    return (
        <div className='bg-gray-200 h-screen flex justify-center items-center'>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='w-96 rounded-xl p-4 shadow-md bg-white'>
                <h1 className='text-center mb-4 font-bold'>Welcome back</h1>

                <form className='w-full'>
                    <div className='flex gap-2 my-4'><Mail className='text-gray-600' />
                        <input type='email' className='focus:outline-none borber-b border-gray w-full' placeholder='Enter email' />
                    </div>

                    <div className='flex gap-2 my-4'><span onClick={handleChange} className='text-gray-600'>{isLock ? <Unlock/> : <Lock/> }</span>
                        <input type={changeInput ? "text" : "password"} className='focus:outline-none borber-b border-gray w-full' placeholder='Enter password'/>
                    </div>
                    <Button>LogIn</Button>
                </form>
            </motion.div>
        </div>
    )
}

export default LogIn
