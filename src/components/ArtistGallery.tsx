import { useEffect, useState } from "react"

interface Artist {
  id: number
  name: string
  specialty: string
  imageUrl: string
  color: string
}

function ArtistGallery() {
  const [artists] = useState<Artist[]>([
    {
      id: 1,
      name: "Sofia Martinez",
      specialty: "Digital Artist",
      imageUrl: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 2,
      name: "Lucas Santos",
      specialty: "Painter",
      imageUrl: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-amber-400 to-orange-500"
    },
    {
      id: 3,
      name: "Emma Johnson",
      specialty: "Photographer",
      imageUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-purple-500 to-indigo-600"
    },
    {
      id: 4,
      name: "Rafael Costa",
      specialty: "Musician",
      imageUrl: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-gray-700 to-gray-900"
    },
    {
      id: 5,
      name: "Isabella Lima",
      specialty: "Sculptor",
      imageUrl: "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      name: "Maria Silva",
      specialty: "Illustrator",
      imageUrl: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-teal-400 to-emerald-500"
    },
    {
      id: 7,
      name: "Andre Oliveira",
      specialty: "Performance Artist",
      imageUrl: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-rose-400 to-pink-500"
    },
    {
      id: 8,
      name: "Classical Heritage",
      specialty: "Sculpture",
      imageUrl: "https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&w=600",
      color: "from-gray-500 to-gray-700"
    }
  ])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Featured Artists
          </h2>
          <p className="text-xl text-gray-600">
            Discover talented creators from around the world
          </p>
        </div>

        {/* Artist Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {artists.map((artist, index) => (
            <div
              key={artist.id}
              className="group relative overflow-hidden rounded-2xl aspect-square hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Image */}
              <img
                src={artist.imageUrl}
                alt={artist.name}
                className="w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${artist.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`}></div>
              
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-bold text-lg mb-1">{artist.name}</h3>
                <p className="text-white/90 text-sm">{artist.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArtistGallery
