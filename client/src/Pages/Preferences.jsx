import React, { useState } from 'react'
import { motion } from 'motion/react'
import { CircleCheckBig } from 'lucide-react'
import { Button } from '@mantine/core'

const Preferences = () => {

    const [selectedCatagory, setSelectedCatagory] = useState([])

    const categories = [
        "Technology",
        "Sports",
        "Health",
        "Entertainment",
        "Business",
        "Politics"
    ]

    console.log(selectedCatagory)

    const toggleCatagory = (category) => {
        setSelectedCatagory(
            selectedCatagory.includes(category)
                ? selectedCatagory.filter((c) => c !== category)
                : [...selectedCatagory, category]
        )
    }

    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <div>
                <h1 className='text-gray-800 font-semibold text-2xl'>Select Interest</h1>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 gap-6 mt-6'>
                {categories.map((category) => (

                    <motion.div 
                    whileHover={{ scale: 1.1 }} 
                    whileTap={{ scale: 0.9 }} 
                    transition={{duration:0.5}}
                    onClick={() => toggleCatagory(category)} 
                    className={`shadow-md rounded-2xl px-5 py-4 text-center flex justify-center items-center gap-2
                    ${selectedCatagory.includes(category) ? `bg-blue-800 text-gray-100` : 'bg-white text-black'}`}>
                        {selectedCatagory.includes(category) && <CircleCheckBig size={20}/>}{category}
                    </motion.div>
                    
                ))}
            </div>
            <Button className='my-4' variant="outline">Save Preferences</Button>
        </div>
    )
}

export default Preferences
