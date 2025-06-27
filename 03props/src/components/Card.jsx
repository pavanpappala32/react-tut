import React from 'react'

export default function Card() {
  return (
     <div className="max-w-sm mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
        alt="Card Example"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">Nature View</h2>
        <p className="text-gray-600 mt-2">
          Experience the serenity of untouched landscapes and peaceful surroundings.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  )
}
