"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function AIBrain() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative w-24 h-24"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/30 to-blue-500/30 blur-xl"
      />

      {/* AI Brain visualization */}
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Brain outline */}
        <motion.path
          d="M20,50 C20,30 35,20 50,20 C65,20 80,30 80,50 C80,70 65,80 50,80 C35,80 20,70 20,50 Z"
          stroke="url(#brainGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
        />

        {/* Neural pathways */}
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${25 + i * 10},50 Q${50},${30 + i * 10} ${75 - i * 10},50`}
            stroke="url(#pathGradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.5,
              delay: i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        ))}

        {/* Data nodes */}
        {[...Array(8)].map((_, i) => (
          <motion.circle
            key={i}
            cx={25 + (i % 4) * 15}
            cy={40 + Math.floor(i / 4) * 20}
            r="3"
            fill={i % 2 === 0 ? "#22D3EE" : "#60A5FA"}
            animate={{
              scale: isHovered ? [1, 1.5, 1] : 1,
              opacity: isHovered ? [0.5, 1, 0.5] : 0.8,
            }}
            transition={{
              duration: 1,
              delay: i * 0.1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        ))}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className="stop-cyan-500" style={{ stopColor: "#06B6D4" }} />
            <stop offset="100%" className="stop-blue-500" style={{ stopColor: "#3B82F6" }} />
          </linearGradient>
          <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" className="stop-cyan-400" style={{ stopColor: "#22D3EE" }} />
            <stop offset="100%" className="stop-blue-400" style={{ stopColor: "#60A5FA" }} />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          animate={{
            x: [0, Math.random() * 30 - 15],
            y: [0, Math.random() * 30 - 15],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
} 