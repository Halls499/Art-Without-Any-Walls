import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Artists() {
  const artists = [
    {
      id: 1,
      name: "Ana Silva",
      category: "Pintora",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Arte contemporânea com foco em natureza e abstração",
      portfolio: "Mais de 50 obras em galerias nacionais"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      category: "Escultor",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Esculturas em metal e materiais reciclados",
      portfolio: "Exposições internacionais em 12 países"
    },
    {
      id: 3,
      name: "Beatriz Costa",
      category: "Fotógrafa",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Fotografia documental e retratos artísticos",
      portfolio: "Prêmios nacionais de fotografia"
    },
    {
      id: 4,
      name: "Diego Alves",
      category: "Ilustrador Digital",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Arte digital, concept art e ilustrações para publicações",
      portfolio: "Trabalhos para grandes editoras e startups"
    },
    {
      id: 5,
      name: "Elena Ferreira",
      category: "Muralista",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Murais urbanos com temática social e cultural",
      portfolio: "Murais em 15 cidades brasileiras"
    },
    {
      id: 6,
      name: "Fernando Lima",
      category: "Designer Gráfico",
      image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Branding, identidade visual e design editorial",
      portfolio: "Mais de 100 projetos de branding"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Conheça Nossos <span className="text-emerald-400">Artistas</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Uma comunidade vibrante de criadores talentosos prontos para dar vida aos seus projetos
            </p>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {["Todos", "Pintores", "Escultores", "Fotógrafos", "Ilustradores", "Muralistas", "Designers"].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full bg-white/10 text-white hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid de Artistas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-400 transition-all duration-300 hover:scale-105 group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white">{artist.name}</h3>
                    <span className="px-3 py-1 bg-purple-500/30 text-purple-300 rounded-full text-sm">
                      {artist.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{artist.description}</p>
                  <p className="text-sm text-emerald-400 mb-4">{artist.portfolio}</p>
                  <Link
                    to={`/artists/${artist.id}`}
                    className="block w-full py-3 px-6 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-400/50 transition-all duration-300 text-center"
                  >
                    Ver Portfólio Completo
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/signup?type=artist"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Você é Artista? Junte-se à Rede
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}