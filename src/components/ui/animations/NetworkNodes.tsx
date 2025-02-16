"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function NetworkNodes() {
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
        className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl"
      />

      {/* Connected nodes visualization */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Animated connection lines */}
          <motion.path
            d="M20,50 L80,20"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M20,50 L80,80"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: 0.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M80,20 L80,80"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Nodes */}
          <motion.circle
            cx="20"
            cy="50"
            r="8"
            className="fill-purple-500"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 1,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
            }}
          />
          <motion.circle
            cx="80"
            cy="20"
            r="8"
            className="fill-blue-400"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
            }}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="8"
            className="fill-cyan-400"
            animate={{
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 1,
              delay: 0.6,
              repeat: isHovered ? Number.POSITIVE_INFINITY : 0,
            }}
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="stop-purple-500" style={{ stopColor: "#A855F7" }} />
              <stop offset="100%" className="stop-blue-500" style={{ stopColor: "#3B82F6" }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          animate={{
            x: [0, Math.random() * 20 - 10],
            y: [0, Math.random() * 20 - 10],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.2,
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