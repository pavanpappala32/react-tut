// src/components/CardsGallery.jsx

import Cards from './Cards'; // Updated import (was Card)

export default function CardsGallery() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex gap-6 justify-center flex-wrap">
      
      {/* First card */}
      <Cards
        title="Mountain Retreat"
        description="Escape to the tranquility of the mountains and enjoy breathtaking views."
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
        buttonText="Book Now"
        onButtonClick={() => alert('Booking Mountain Retreat...')}
      />

      {/* Second card */}
      <Cards
        title="Beach Paradise"
        description="Relax on the sunny shores of this tropical getaway."
        image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        buttonText="Explore"
        onButtonClick={() => alert('Exploring Beach Paradise...')}
      />
    </div>
  );
}
