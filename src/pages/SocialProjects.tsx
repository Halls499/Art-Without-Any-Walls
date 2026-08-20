import { Link } from "react-router-dom"
import { Award, MapPin, ExternalLink, HeartHandshake, Palette, Sparkles } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

interface SocialProject {
  id: number
  title: string
  founder: string
  category: string
  image: string
  description: string
  impact: string
  location: string
  externalUrl: string
}

export default function SocialProjects() {
  const projects: SocialProject[] = [
    {
      id: 1,
      title: "Favela Galeria",
      founder: "Criado pelo Coletivo OPNI",
      category: "Arte Urbana & Grafite",
      image: "/projects/favelagaleria.jpg",
      description: "Galeria de arte a céu aberto na Vila Flávia que transforma a periferia através do grafite, oficinas e acolhimento comunitário.",
      impact: "Centenas de murais e formação local",
      location: "São Mateus, São Paulo - SP",
      externalUrl: "https://www.instagram.com/favelagaleria/"
    },
    {
      id: 2,
      title: "Projeto Axé",
      founder: "Fundado por Cesare de Florio La Rocca",
      category: "Arte-Educação",
      image: "/projects/projetoaxe.jpg",
      description: "Referência nacional e internacional em defesa de direitos e transformação de crianças e jovens em vulnerabilidade através da arte e música.",
      impact: "+30.000 jovens acolhidos",
      location: "Pelourinho, Salvador - BA",
      externalUrl: "http://www.projetoaxe.org/"
    },
    {
      id: 3,
      title: "Spectaculu - Escola de Arte e Tecnologia",
      founder: "Fundada por Gringo Cardia e Marisa Orth",
      category: "Capacitação Técnica e Cênica",
      image: "/projects/spetaculu.jpg",
      description: "Formação profissional em técnicas de espetáculo, cenografia, iluminação, figurino e novas mídias para jovens da rede pública.",
      impact: "+2.000 técnicos formados",
      location: "Cais do Porto, Rio de Janeiro - RJ",
      externalUrl: "https://spectaculu.org.br/"
    },
    {
      id: 4,
      title: "Instituto Criar de TV, Cinema e Mídias",
      founder: "Fundado por Luciano Huck",
      category: "Audiovisual & Novas Mídias",
      image: "/projects/instituto.jpg",
      description: "Promove o desenvolvimento profissional, sociocultural e pessoal de jovens por meio do ensino técnico e prático de cinema e audiovisual.",
      impact: "+2.500 jovens inseridos no mercado",
      location: "Bom Retiro, São Paulo - SP",
      externalUrl: "https://www.institutocriar.org/"
    },
    {
      id: 5,
      title: "Rede Daora - Estúdios Criativos",
      founder: "Iniciativa SMC SP",
      category: "Economia Criativa",
      image: "/projects/rededaora.jpg",
      description: "Polos públicos com estúdios profissionais que oferecem cursos gratuitos de produção musical, DJ, games, fotografia e programação web.",
      impact: "Polos nas 4 zonas periféricas",
      location: "São Paulo, SP",
      externalUrl: "https://portadeentrada.prefeitura.sp.gov.br/rede-daora/"
    },
    {
      id: 6,
      title: "PIÁ (Programa de Iniciação Artística)",
      founder: "Rede Pública Cultural de SP",
      category: "Iniciação Infantil & Cidadania",
      image: "/projects/pia.jpg",
      description: "Artistas-educadores promovem encontros semanais em linguagens de artes visuais, dança, circo e literatura para crianças e adolescentes.",
      impact: "Atuação em mais de 100 polos",
      location: "Centros Culturais e CEUs, SP",
      externalUrl: "https://portadeentrada.prefeitura.sp.gov.br/pia/"
    }
  ]

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header no estilo da Home */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 mb-4">
              PROJETOS <span className="text-purple-600">SOCIAIS.</span>
            </h1>
          </div>

          {/* Grid de Projetos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col"
              >
                {/* Imagem / Logo */}
                <div className="h-48 w-full bg-neutral-50 border-b border-neutral-100 flex items-center justify-center p-6 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/1647121/pexels-photo-1647121.jpeg?auto=compress&cs=tinysrgb&w=800"
                    }}
                  />
                  <span className="absolute bottom-3 left-4 px-2.5 py-1 bg-white/90 backdrop-blur-sm border border-neutral-200 text-purple-700 font-semibold text-[11px] rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-neutral-400 font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-1 line-clamp-1" title={project.title}>
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-purple-600 mb-3 line-clamp-1">
                      {project.founder}
                    </p>
                    
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 bg-neutral-50 border border-neutral-200 p-2.5 rounded-xl mb-4">
                      <Award className="w-4 h-4 text-purple-600 shrink-0" />
                      <span className="truncate">{project.impact}</span>
                    </div>

                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 font-semibold text-xs rounded-full flex items-center justify-center gap-1.5 transition-colors"
                    >
                      Conhecer Projeto Oficial
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Seção Como Participar */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 sm:p-12 mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 text-center mb-8">
              Como Você Pode Fazer Parte?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Seja Voluntário</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Ministre oficinas, compartilhe técnicas artísticas e ajude na formação de novos criadores.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Cadastre sua Ação</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Divulgue seu coletivo ou projeto cultural na AWAW para receber visibilidade e apoio.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-sm text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-1">Apoio e Parceria</h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Conecte empresas e investidores diretamente com as necessidades materiais das oficinas.
                </p>
              </div>
            </div>
          </div>

          {/* CTA no padrão da Home */}
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-black text-neutral-900 mb-2">Coordena uma iniciativa cultural?</h3>
            <p className="text-neutral-600 text-sm mb-6">
              Cadastre seu projeto social na plataforma e amplie o alcance das suas oficinas e murais.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/signup?type=social"
                className="px-6 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Cadastrar Projeto Social
              </Link>
              <Link
                to="/signup?type=volunteer"
                className="px-6 py-3 bg-white border border-neutral-300 text-neutral-700 hover:border-purple-600 hover:text-purple-600 font-semibold text-sm rounded-full transition-all"
              >
                Quero ser Voluntário
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}