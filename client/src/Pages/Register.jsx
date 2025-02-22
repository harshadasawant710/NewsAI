import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Mail, Lock, Unlock, SquareUserRound } from 'lucide-react'
import { Button, Loader } from '@mantine/core'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { registerUser } from '../Redux/slice/authSlice.js'
import { useDispatch, useSelector } from 'react-redux'


const Register = () => {
    const dispatch = useDispatch()
    const { loading } = useSelector((state) => state.auth)

    const { register, handleSubmit } = useForm();
    //console.log(loading)

    onsubmit = (data,e) => {
        e.preventDefault();
        dispatch(registerUser(data))
        console.log(data);
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
                <h1 className='text-center mb-4 font-bold'>Create your account</h1>

                <form className='w-full' onSubmit={handleSubmit(onsubmit)}>
                    <div className='flex items-center gap-2 my-4'><SquareUserRound className='text-gray-600' size={20} />
                        <input type='Text'
                            className='focus:outline-none borber-b border-gray w-full'
                            placeholder='Enter Name'
                            {...register("name")} />
                    </div>
                    <div className='flex items-center gap-2 my-4'><Mail className='text-gray-600' size={20} />
                        <input type='email'
                            className='focus:outline-none borber-b border-gray w-full'
                            placeholder='Enter Email'
                            {...register("email")} />
                    </div>

                    <div className='flex items-center gap-2 my-4'><span onClick={handleChange} className='text-gray-600' >{isLock ? <Unlock size={20} /> : <Lock size={20} />}</span>
                        <input type={changeInput ? "text" : "password"}
                            className='focus:outline-none borber-b border-gray w-full'
                            placeholder='Enter password'
                            {...register("password")} />
                    </div>
                    <div className='flex items-center gap-2 my-4'><span onClick={handleChange} className='text-gray-600'>{isLockC ? <Unlock size={20} /> : <Lock size={20} />}</span>
                        <input type={changeInput ? "text" : "password"}
                            className='focus:outline-none borber-b border-gray w-full'
                            placeholder='Confirm password'
                            {...register("checkPassword")} />
                    </div>
                    <Button fullWidth className='w-full font-semibold rounded-lg shadow-md hover:scale-105' type='submit'>{loading ? <Loader size={16} color='white'/> : "SignUp"}</Button>
                    <p className='text-center text-gray-500'>Already have an account? <Link to='/login' className='text-blue-500 text-bold'>LogIn</Link></p>
                </form>
            </motion.div>
        </div>
    )
}

export default Register
