import { Link } from "react-router-dom"
import { Sparkles, ExternalLink, Users, Briefcase, TrendingUp, MapPin } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

interface Company {
  id: number
  name: string
  type: string
  image: string
  description: string
  projects: string
  location: string
  externalUrl: string
}

export default function Companies() {
  const companies: Company[] = [
    {
      id: 1,
      name: "Galeria Luisa Strina",
      type: "Galeria de Arte Contemporânea",
      image: "/projects/galeriastrina.jpg",
      description: "Primeira galeria da América Latina a participar da Art Basel, referência histórica na representação de artistas conceituais.",
      projects: "Exposições internacionais contínuas",
      location: "São Paulo, SP",
      externalUrl: "https://www.galerialuisastrina.com.br/"
    },
    {
      id: 2,
      name: "Fortes D'Aloia & Gabriel",
      type: "Galeria & Curadoria de Arte",
      image: "/projects/gabriel.jpg",
      description: "Polo de projeção artística internacional que promove diálogos entre criadores brasileiros e as principais bienais do mundo.",
      projects: "Presença nas maiores feiras globais",
      location: "São Paulo & Rio de Janeiro",
      externalUrl: "https://fdag.com.br/"
    },
    {
      id: 3,
      name: "Urban Arts",
      type: "Marketplace & Galeria Aberta",
      image: "/projects/urban.jpg",
      description: "Rede pioneira que conecta e viabiliza a venda de ilustrações e arte digital de milhares de criadores independentes.",
      projects: "+9.000 artistas no catálogo",
      location: "Rede Nacional",
      externalUrl: "https://www.urbanarts.com.br/"
    },
    {
      id: 4,
      name: "Vetor Zero / LOBO",
      type: "Estúdio de Animação & Design 3D",
      image: "/projects/vetor.jpg",
      description: "Produtora premiada focada em animação, concept art e tecnologia visual para publicidade e entretenimento global.",
      projects: "+30 Leões no Festival de Cannes",
      location: "São Paulo, SP",
      externalUrl: "https://vetorzero.com.br/"
    },
    {
      id: 5,
      name: "Ubu Editora",
      type: "Editora de Arte & Design",
      image: "/projects/ubu.jpg",
      description: "Publicações voltadas para teoria da arte, ensaios visuais, arquitetura, design e cultura contemporânea.",
      projects: "Catálogo premiado de livros de arte",
      location: "São Paulo, SP",
      externalUrl: "https://www.ubueditora.com.br/"
    },
    {
      id: 6,
      name: "O2 Filmes",
      type: "Produtora Audiovisual & Cultural",
      image: "/projects/02.jpg",
      description: "Maior produtora audiovisual do país, unindo artistas conceituais, cenógrafos e diretores de arte para cinema e séries.",
      projects: "Centenas de produções cinematográficas",
      location: "São Paulo, SP",
      externalUrl: "https://o2filmes.com/"
    }
  ]

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 mb-4">
              MERCADO & <span className="text-purple-600">POLOS CRIATIVOS.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              Conheça as principais referências de galerias, produtoras e estúdios que movimentam a economia criativa no Brasil e representam oportunidades para os criadores da plataforma.
            </p>
          </div>

          {/* Grid de Empresas / Polos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {companies.map((company) => (
              <div
                key={company.id}
                className="group bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col"
              >
                {/* Área da Imagem */}
                <div className="h-48 w-full bg-neutral-50 border-b border-neutral-100 flex items-center justify-center p-6 relative">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                      }}
                    />
                  </div>
                  <span className="absolute bottom-3 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm border border-neutral-200 text-purple-700 font-semibold text-[11px] rounded-full shadow-sm">
                    {company.type}
                  </span>
                </div>

                {/* Conteúdo com Flexbox Alinhado */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span className="truncate">{company.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-1" title={company.name}>
                      {company.name}
                    </h3>
                    
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {company.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 bg-neutral-50 border border-neutral-200 p-2.5 rounded-xl mb-4">
                      <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                      <span className="truncate">{company.projects}</span>
                    </div>

                    <a
                      href={company.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 font-semibold text-xs rounded-full flex items-center justify-center gap-1.5 transition-colors"
                    >
                      Acessar Site Institucional
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Seção de Vantagens */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 sm:p-12 mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 text-center mb-8">
              Por Que Sua Organização Deveria Fazer Parte?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Base Curada</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Acesso facilitado a centenas de artistas independentes em diversas modalidades e linguagens visuais.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Contratação Direta</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Publique editais ou contrate sob demanda sem fricção burocrática entre organização e criador.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 font-bold">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Impacto de Marca</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Associe sua organização ao fomento cultural e ao desenvolvimento sustentável de novos talentos.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-black text-neutral-900 mb-2">Representa uma organização criativa?</h3>
            <p className="text-neutral-600 text-sm mb-6">
              Junte-se à plataforma AWAW e conecte sua equipe com novas visões artísticas independentes.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/signup?type=business"
                className="px-6 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Cadastrar Organização
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 bg-white border border-neutral-300 text-neutral-700 hover:border-purple-600 hover:text-purple-600 font-semibold text-sm rounded-full transition-all"
              >
                Sobre a Plataforma
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}