import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Lock, Unlock, SquareUserRound,TriangleAlert  } from 'lucide-react'
import { Button } from '@mantine/core'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'


const LogIn = () => {

    const LoginSchema = z.object({
        email:z 
        .string()
        .min(1,{message:"This field has to be filled"})
        .email("This is not a valid email."),
        password:z.string()
        .min(1,{message:"Password is required"})
    })

    const { register, handleSubmit, formState:{errors} } = useForm({
        resolver:zodResolver(LoginSchema)
    });

    const onsubmit= (data) =>{
        console.log(data)
    }

    const [isLock, setIsLock] = useState(false)
    const [isLockC, setIsLockC] = useState(false)
    const [changeInput, setChangeInput] = useState(false)

    const handleChange = () => {
        setIsLock(!isLock)
        setIsLockC(!isLockC)
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

                <form className='w-full' onSubmit={handleSubmit(onsubmit)}>
                    <div className='flex gap-2 my-4'><Mail className='text-gray-600' size={20}/>
                        <input type='email' 
                        className={errors.email ? 'border-red-700 border-b focus:outline-none' : 'focus:outline-none borber-b border-gray w-full' } 
                        placeholder='Enter Email' 
                        {...register("email")}/>
                    </div>

                    {errors.email && <p className='text-red-700 flex gap-1'><TriangleAlert size={20}/> {errors.email.message}</p>}

                    <div className='flex gap-2 my-4'><span onClick={handleChange} className='text-gray-600' >{isLock ? <Unlock size={20} /> : <Lock size={20} />}</span>
                        <input type={changeInput ? "text" : "password"} 
                        className='focus:outline-none borber-b border-gray w-full' 
                        placeholder='Enter password' 
                        {...register("password")}/>
                    </div>

                    {errors.password && <p className='text-red-700 flex gap-1'><TriangleAlert size={20}/> {errors.password.message}</p>}

                    <Button type='submit'>LogIn</Button>
                    <p className='text-center text-gray-500'>Don't have an account? <Link to='/register' className='text-blue-500 text-bold'>Register</Link></p>
                </form>
            </motion.div>
        </div>
    )
}

export default LogIn
