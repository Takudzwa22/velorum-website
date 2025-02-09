"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface Client {
  name: string
  logo: string
  industry: string
}

interface CarouselWrapperProps {
  clients: Client[]
}

export default function CarouselWrapper({ clients }: CarouselWrapperProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === clients.length - 4 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [clients.length])

  return (
    <div className="relative overflow-hidden w-full">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ 
          transform: `translateX(-${currentIndex * 25}%)`,
        }}
      >
        {clients.map((client, index) => (
          <div 
            key={index}
            className="w-1/4 flex-shrink-0 px-4"
          >
            <div className="bg-black/30 rounded-lg p-4 h-[180px] flex flex-col items-center justify-center">
              <div className="relative h-24 w-full mb-4">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-sm text-gray-400">{client.industry}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 