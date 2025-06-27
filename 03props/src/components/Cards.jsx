// src/components/Cards.jsx

// This component receives props from the parent and displays a styled card.
export default function Cards({ title, description, image, buttonText, onButtonClick }) {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-md overflow-hidden">
      {/* Top image */}
      <img
        src={image}             // image URL passed as prop
        alt={title}             // alt text improves accessibility
        className="w-full h-48 object-cover"
      />

      {/* Card content */}
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>

        {/* Action button */}
        <button
          onClick={onButtonClick}  // function passed from parent
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
