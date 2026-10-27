import React from 'react'
import { FaArrowLeft } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDFzc2N2MmNzNWc4d3JqZWRxZHh6Y2ZzNnUzd21vNmdtb3owdjBxeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/C21GGDOpKT6Z4VuXyn/giphy.gif"
        alt="Page not found"
        className="absolute inset-0 h-full w-full object-cover"
      />

      
      <div className="relative z-10 min-h-screen flex items-end justify-center pb-12">
        <Link
          to="/"
          className="flex items-center gap-3 bg-white/90 hover:bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow-lg transition-colors"
        >
          <FaArrowLeft /> Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Pnf