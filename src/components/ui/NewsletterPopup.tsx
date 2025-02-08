"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { NewsletterForm } from "./NewsletterForm"

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenNewsletterPopup")
    if (hasSeenPopup) {
      setIsVisible(false)
      // Check if it's been more than 1 hour since the popup was closed
      const lastSeenTime = localStorage.getItem("lastSeenNewsletterPopup")
      if (lastSeenTime && Date.now() - Number.parseInt(lastSeenTime) > 3600000) {
        setIsMinimized(true)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible && !isMinimized) {
      localStorage.setItem("lastSeenNewsletterPopup", Date.now().toString())
    }
  }, [isVisible, isMinimized])

  const handleClose = () => {
    setIsVisible(false)
    setIsMinimized(false)
    localStorage.setItem("hasSeenNewsletterPopup", "true")
    // Set a timeout to show the minimized version after 1 hour
    setTimeout(() => setIsMinimized(true), 3600000)
  }

  const handleMinimizedClick = () => {
    setIsVisible(true)
    setIsMinimized(false)
  }

  if (!isVisible && !isMinimized) return null

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black/70 backdrop-blur-lg p-8 rounded-lg shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
              <button onClick={handleClose} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-300 mb-6">Stay updated with the latest AI insights and news.</p>
            <NewsletterForm onSuccess={handleClose} />
          </div>
        </div>
      )}
      {isMinimized && (
        <div
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full cursor-pointer shadow-lg z-50"
          onClick={handleMinimizedClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        </div>
      )}
    </>
  )
}

