import { useState } from "react"
import { Heart, Sparkles } from "lucide-react"

interface Artwork {
  id: number
  title: string
  artistName: string
  category: string
  artworkUrl: string
  artistAvatar: string
  likes: number
}

function ArtistGallery() {
  const [artworks] = useState<Artwork[]>([
    {
      id: 1,
      title: "Nebulosa Líquida",
      artistName: "Sofia Martinez",
      category: "Arte Digital",
      artworkUrl: "https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=800",
      artistAvatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      likes: 142
    },
    {
      id: 2,
      title: "Texturas do Silêncio",
      artistName: "Lucas Santos",
      category: "Pintura a Óleo",
      artworkUrl: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800",
      artistAvatar: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=150",
      likes: 89
    },
    {
      id: 3,
      title: "Reflexos da Metrópole",
      artistName: "Emma Johnson",
      category: "Fotografia Autoral",
      artworkUrl: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=800",
      artistAvatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      likes: 215
    },
    {
      id: 4,
      title: "Forma & Sintonia",
      artistName: "Rafael Costa",
      category: "Modelagem 3D",
      artworkUrl: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=800",
      artistAvatar: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=150",
      likes: 178
    },
    {
      id: 5,
      title: "Geometria Orgânica",
      artistName: "Isabella Lima",
      category: "Escultura",
      artworkUrl: "https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      artistAvatar: "https://images.pexels.com/photos/2272854/pexels-photo-2272854.jpeg?auto=compress&cs=tinysrgb&w=150",
      likes: 95
    },
    {
      id: 6,
      title: "Flora Mística",
      artistName: "Maria Silva",
      category: "Ilustração",
      artworkUrl: "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=800",
      artistAvatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150",
      likes: 310
    },
    {
      id: 7,
      title: "Ruídos e Traços",
      artistName: "Andre Oliveira",
      category: "Técnica Mista",
      artworkUrl: "https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=800",
      artistAvatar: "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&w=150",
      likes: 124
    },
    {
      id: 8,
      title: "Monumento Ancestral",
      artistName: "Classical Heritage",
      category: "Artes Visuais",
      artworkUrl: "https://images.pexels.com/photos/2740954/pexels-photo-2740954.jpeg?auto=compress&cs=tinysrgb&w=800",
      artistAvatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
      likes: 260
    }
  ])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50/50 dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Galeria Comunitária
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
            Obras em Destaque
          </h2>
          <p className="mt-3 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Explore produções independentes de criadores de diversas disciplinas.
          </p>
        </div>

        {/* Galeria de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {artworks.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-800 transition-all duration-300"
            >
              {/* Imagem da Obra */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 relative">
                <img
                  src={item.artworkUrl}
                  alt={item.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-neutral-950/70 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-full">
                  {item.category}
                </span>
              </div>

              {/* Informações da Obra e Artista */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-neutral-900 dark:text-white text-base truncate">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400 shrink-0">
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    <span>{item.likes}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center gap-3">
                  <img
                    src={item.artistAvatar}
                    alt={item.artistName}
                    className="w-7 h-7 rounded-full object-cover border border-neutral-200 dark:border-neutral-700"
                  />
                  <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300 truncate">
                    {item.artistName}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArtistGallery