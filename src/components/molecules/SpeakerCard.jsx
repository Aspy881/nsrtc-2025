export default function SpeakerCard({ speaker }) {
  const { name, title, affiliation, image } = speaker

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-shadow duration-300 my-3 mx-20">
      {/* Image Section */} 
      <div className="h-80 w-full relative">
        <img
          src={image || "/placeholder.svg?height=300&width=300"}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-lg font-bold text-blue-800 mb-1">{name}</h3>
        <p className="text-sm text-blue-600 font-medium mb-1">{title}</p>
        <p className="text-sm text-gray-600">{affiliation}</p>
      </div>
    </div>
  )
}
