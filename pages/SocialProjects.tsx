import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function SocialProjects() {
  const projects = [
    {
      id: 1,
      title: "Arte nas Comunidades",
      category: "Educação",
      image: "https://images.pexels.com/photos/8612992/pexels-photo-8612992.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Oficinas de arte gratuitas para crianças e adolescentes em comunidades vulneráveis",
      impact: "500+ jovens atendidos",
      location: "São Paulo, SP"
    },
    {
      id: 2,
      title: "Murais pela Inclusão",
      category: "Arte Urbana",
      image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Transformação de espaços públicos através de murais com mensagens de inclusão",
      impact: "25 murais criados",
      location: "Rio de Janeiro, RJ"
    },
    {
      id: 3,
      title: "Cultura Acessível",
      category: "Inclusão",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Exposições e eventos culturais adaptados para pessoas com deficiência",
      impact: "15 eventos realizados",
      location: "Belo Horizonte, MG"
    },
    {
      id: 4,
      title: "Memória Visual",
      category: "Preservação",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Documentação fotográfica e artística de comunidades tradicionais",
      impact: "10 comunidades documentadas",
      location: "Nacional"
    },
    {
      id: 5,
      title: "Arte e Saúde Mental",
      category: "Saúde",
      image: "https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Terapia através da arte para pessoas em tratamento de saúde mental",
      impact: "200+ participantes",
      location: "Curitiba, PR"
    },
    {
      id: 6,
      title: "Empreendedorismo Criativo",
      category: "Economia",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Capacitação de artistas para transformar talento em renda sustentável",
      impact: "150 artistas capacitados",
      location: "Porto Alegre, RS"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Projetos <span className="text-emerald-400">Sociais</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Arte como ferramenta de transformação social e desenvolvimento comunitário
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/30 text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">1000+</div>
              <div className="text-gray-300">Vidas Impactadas</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Projetos Ativos</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-amber-400/30 text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">200+</div>
              <div className="text-gray-300">Artistas Voluntários</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-pink-400/30 text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">15</div>
              <div className="text-gray-300">Cidades Atendidas</div>
            </div>
          </div>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-emerald-400 transition-all duration-300 hover:scale-105 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-emerald-500/30 text-emerald-300 rounded-full text-sm">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-400">📍 {project.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <p className="text-emerald-400 font-semibold mb-4">✨ {project.impact}</p>
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-400/50 transition-all duration-300">
                    Saiba Mais
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Como Participar */}
          <div className="bg-gradient-to-r from-purple-900/50 to-emerald-900/50 rounded-3xl p-8 md:p-12 border border-emerald-500/30">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Como Você Pode Participar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Seja Voluntário</h3>
                <p className="text-gray-300 mb-4">Compartilhe seu talento e ensine arte para comunidades</p>
                <Link
                  to="/signup?type=volunteer"
                  className="inline-block px-6 py-2 bg-emerald-400 text-slate-900 font-semibold rounded-lg hover:bg-emerald-300 transition-colors"
                >
                  Quero Ser Voluntário
                </Link>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">💰</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Doe</h3>
                <p className="text-gray-300 mb-4">Contribua financeiramente para manter os projetos ativos</p>
                <button className="inline-block px-6 py-2 bg-purple-400 text-slate-900 font-semibold rounded-lg hover:bg-purple-300 transition-colors">
                  Fazer Doação
                </button>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Parceria</h3>
                <p className="text-gray-300 mb-4">Sua empresa pode patrocinar ou apoiar um projeto</p>
                <Link
                  to="/signup?type=partner"
                  className="inline-block px-6 py-2 bg-amber-400 text-slate-900 font-semibold rounded-lg hover:bg-amber-300 transition-colors"
                >
                  Seja Parceiro
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}