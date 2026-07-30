import { Link } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export default function Companies() {
  const companies = [
    {
      id: 1,
      name: "Galeria Moderna",
      type: "Galeria de Arte",
      image: "https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Galeria especializada em arte contemporânea e exposições de artistas emergentes",
      projects: "15 exposições por ano"
    },
    {
      id: 2,
      name: "Studio Criativo",
      type: "Agência de Design",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Agência full-service especializada em branding e design visual",
      projects: "Mais de 200 projetos entregues"
    },
    {
      id: 3,
      name: "Editora Visão",
      type: "Editora",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Publicação de livros ilustrados e revistas de arte",
      projects: "50+ títulos publicados anualmente"
    },
    {
      id: 4,
      name: "Eventos & Arte",
      type: "Produtora de Eventos",
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Produção de eventos culturais e festivais de arte",
      projects: "30 eventos culturais por ano"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Empresas <span className="text-amber-400">Parceiras</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conecte-se com empresas que valorizam e investem em arte e cultura
            </p>
          </div>

          {/* Grid de Empresas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400 transition-all duration-300 hover:scale-105 group"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 md:w-3/5">
                    <div className="mb-3">
                      <h3 className="text-2xl font-bold text-white mb-2">{company.name}</h3>
                      <span className="px-3 py-1 bg-amber-500/30 text-amber-300 rounded-full text-sm">
                        {company.type}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{company.description}</p>
                    <p className="text-sm text-amber-400 mb-6">{company.projects}</p>
                   
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Benefícios para Empresas */}
          <div className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-3xl p-8 md:p-12 border border-purple-500/30 mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">
              Por Que Sua Empresa Deveria Se Juntar?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Acesso a Talentos</h3>
                <p className="text-gray-300">Conecte-se com artistas verificados e qualificados</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💼</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Gestão Simplificada</h3>
                <p className="text-gray-300">Ferramentas para gerenciar projetos e colaborações</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visibilidade</h3>
                <p className="text-gray-300">Aumente a presença da sua marca na comunidade artística</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          
        </div>
      </main>

      <Footer />
    </div>
  )
}