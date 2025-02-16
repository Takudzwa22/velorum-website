"use client"

import { motion } from "framer-motion"

export default function VoiceSphere() {
  return (
    <div className="relative w-24 h-24">
      {/* Base glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Amorphous sphere */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        
        {/* Deforming path */}
        <motion.path
          fill="none"
          stroke="rgba(59, 130, 246, 0.8)"
          strokeWidth="2"
          filter="url(#glow)"
          className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
          animate={{
            d: [
              "M 50,20 C 70,20 70,50 50,80 C 30,80 30,50 50,20",
              "M 50,30 C 80,30 80,50 50,70 C 20,70 20,50 50,30",
              "M 50,20 C 70,20 70,50 50,80 C 30,80 30,50 50,20",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Secondary deforming path */}
        <motion.path
          fill="none"
          stroke="rgba(59, 130, 246, 0.5)"
          strokeWidth="2"
          filter="url(#glow)"
          animate={{
            d: [
              "M 30,50 C 30,30 70,30 70,50 C 70,70 30,70 30,50",
              "M 40,40 C 40,20 60,20 60,40 C 60,60 40,60 40,40",
              "M 30,50 C 30,30 70,30 70,50 C 70,70 30,70 30,50",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Core glow */}
      <motion.div
        className="absolute inset-4 rounded-full bg-gradient-to-r from-blue-400/40 to-blue-500/40 blur-sm"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
} 