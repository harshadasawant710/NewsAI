import { Button } from '@mantine/core'
import { Sparkle } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
   <div className="relative flex justify-center items-center h-screen">
      {/* Centered content */}
      <div className="text-center space-y-6 z-10">
        <h1 className="text-6xl font-bold text-black">AI that <span className='text-cyan-500'>curates</span> News For You</h1>
        <h2 className="text-gray-500 max-w-xl mx-auto">
          Get real-time breaking news, AI-powered summaries, and personalized recommendations.
          Stay informed with deep insights, trending stories, and expert analysis—all in one place.
        </h2>
        <Button className="flex items-center justify-center gap-2" leftSection={<Sparkle />}>
          Explore Now
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
