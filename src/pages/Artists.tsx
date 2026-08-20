import { useState } from "react"
import { Link } from "react-router-dom"
import { MapPin, Sparkles, ExternalLink } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

interface Artist {
  id: number
  name: string
  category: string
  image: string
  description: string
  portfolio: string
  location: string
  externalUrl: string
}

export default function Artists() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const artists: Artist[] = [
    {
      id: 1,
      name: "Eduardo Kobra",
      category: "Muralismo",
      image: "/projects/eduardokobra.jpg",
      description: "Muralista brasileiro famoso por murais hiper-realistas coloridos com padrões caleidoscópicos e temas de memória e paz.",
      portfolio: "+3.000 murais em cerca de 40 países",
      location: "São Paulo, Brasil",
      externalUrl: "https://www.eduardokobra.com/"
    },
    {
      id: 2,
      name: "Banksy",
      category: "Arte Urbana",
      image: "/projects/banksy.jpg",
      description: "Artista anônimo e ativista britânico conhecido pelo uso de estêncil e sátiras político-sociais em espaços urbanos.",
      portfolio: "Obras em leilões mundiais e intervenções de rua",
      location: "Bristol / Londres, Reino Unido",
      externalUrl: "https://www.banksy.co.uk/"
    },
    {
      id: 3,
      name: "Yayoi Kusama",
      category: "Escultura & Instalação",
      image: "/projects/yayoi.jpg",
      description: "Pioneira japonesa da arte contemporânea, reconhecida pelas 'Infinity Mirror Rooms' e esculturas com padrões de bolinhas.",
      portfolio: "Exposições nos maiores museus de arte do mundo",
      location: "Tóquio, Japão",
      externalUrl: "http://yayoi-kusama.jp/"
    },
    {
      id: 4,
      name: "Sebastião Salgado",
      category: "Fotografia",
      image: "/projects/salgado.jpg",
      description: "Fotógrafo documental com registros em preto e branco sobre a condição humana e preservação ambiental.",
      portfolio: "+100 países documentados e acervos globais",
      location: "Minas Gerais, Brasil / Paris",
      externalUrl: "https://institutoterra.org/"
    },
    {
      id: 5,
      name: "Ai Weiwei",
      category: "Arte Conceitual",
      image: "/projects/ai.jpg",
      description: "Artista plástico, escultor e ativista chinês que aborda direitos humanos, liberdade de expressão e patrimônio.",
      portfolio: "Instalações na Tate Modern e bienais internacionais",
      location: "Pequim, China / Lisboa",
      externalUrl: "https://www.aiweiwei.com/"
    },
    {
      id: 6,
      name: "Takashi Murakami",
      category: "Artes Visuais & Pop",
      image: "/projects/takashi.jpg",
      description: "Criador do estilo 'Superflat', mesclando iconografia tradicional japonesa com anime, mangá e cultura pop.",
      portfolio: "Acervos no MoMA, Versalhes e marcas globais",
      location: "Tóquio, Japão",
      externalUrl: "https://www.kaikaikiki.co.jp/"
    },
    {
      id: 7,
      name: "Vik Muniz",
      category: "Artes Visuais & Pop",
      image: "/projects/muniz.jpg",
      description: "Artista visual e fotógrafo brasileiro que recria obras clássicas a partir de materiais inusitados como lixo e poeira.",
      portfolio: "Obras no MET, MoMA e filme 'Lixo Extraordinário'",
      location: "São Paulo / Nova York",
      externalUrl: "http://vikmuniz.net/"
    },
    {
      id: 8,
      name: "OSGEMEOS",
      category: "Arte Urbana",
      image: "/projects/OSGEMEOS.jpg",
      description: "Dupla de irmãos gêmeos grafiteiros de São Paulo cujos personagens amarelos tornaram-se ícones da arte mundial.",
      portfolio: "Murais e instalações em fachadas monumentais pelo mundo",
      location: "São Paulo, Brasil",
      externalUrl: "https://osgemeos.com.br/"
    },
    {
      id: 9,
      name: "Jean-Michel Basquiat",
      category: "Pintura",
      image: "/projects/jean.jpg",
      description: "Pintor neoexpressionista norte-americano que levou o grafite de rua e a crítica social às principais galerias mundiais.",
      portfolio: "Obras históricas em acervos e leilões de prestígio",
      location: "Nova York, EUA",
      externalUrl: "http://basquiat.com/"
    },
    {
      id: 10,
      name: "Keith Haring",
      category: "Arte Urbana",
      image: "/projects/keite.jpg",
      description: "Artista e ativista da cena pop dos anos 80, criador de figuras delineadas icônicas ligadas a causas sociais.",
      portfolio: "Murais públicos e fundação artística de impacto",
      location: "Pensilvânia / Nova York, EUA",
      externalUrl: "https://www.haring.com/"
    },
    {
      id: 11,
      name: "Frida Kahlo",
      category: "Pintura",
      image: "/projects/frida.jpg",
      description: "Uma das pintoras mais influentes da história da arte, célebre por autorretratos viscerais e simbolismo da identidade mexicana.",
      portfolio: "Acervo e Museu Frida Kahlo (Casa Azul)",
      location: "Coyoacán, México",
      externalUrl: "https://www.museofridakahlo.org.mx/"
    },
    {
      id: 12,
      name: "Marina Abramović",
      category: "Arte Conceitual",
      image: "/projects/marina.jpg",
      description: "Considerada a 'avó da performance arte', explora a resistência corporal e a relação viva entre público e criador.",
      portfolio: "Performances históricas no MoMA e bienais mundiais",
      location: "Belgrado, Sérvia / Nova York",
      externalUrl: "https://mai.art/"
    },
    {
      id: 13,
      name: "Adriana Varejão",
      category: "Escultura & Instalação",
      image: "/projects/adriana.jpg",
      description: "Artista plástica brasileira cujas obras dialogam com a história colonial, azulejaria e a miscigenação cultural.",
      portfolio: "Pavilhão permanente no Instituto Inhotim",
      location: "Rio de Janeiro, Brasil",
      externalUrl: "https://adrianavarejao.net/"
    },
    {
      id: 14,
      name: "Anish Kapoor",
      category: "Escultura & Instalação",
      image: "/projects/anish.jpg",
      description: "Escultor britânico-indiano autor de megaestruturas públicas espelhadas e monumentais como o 'Cloud Gate' em Chicago.",
      portfolio: "Vencedor do Prêmio Turner e monumentos globais",
      location: "Mumbai, Índia / Londres",
      externalUrl: "https://anishkapoor.com/"
    }
  ]

  const categories = [
    "Todos",
    "Muralismo",
    "Arte Urbana",
    "Pintura",
    "Escultura & Instalação",
    "Fotografia",
    "Arte Conceitual",
    "Artes Visuais & Pop"
  ]

  const filteredArtists = selectedCategory === "Todos"
    ? artists
    : artists.filter(artist => artist.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-neutral-900 mb-4">
              CRIADORES EM <span className="text-purple-600">DESTAQUE.</span>
            </h1>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 justify-center mb-14">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-[#8b5cf6] text-white shadow-sm"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid de Artistas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredArtists.map((artist) => (
              <div
                key={artist.id}
                className="group bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col"
              >
                {/* Box da Imagem Alinhada */}
                <div className="h-56 w-full bg-neutral-100 border-b border-neutral-100 relative overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800"
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-4 px-3 py-1 bg-white/95 backdrop-blur-md border border-neutral-200 text-purple-700 font-semibold text-[11px] rounded-full shadow-sm">
                    {artist.category}
                  </span>
                </div>

                {/* Informações */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-1 text-xs text-neutral-400 font-medium mb-2">
                      <MapPin className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                      <span>{artist.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-2 line-clamp-1" title={artist.name}>
                      {artist.name}
                    </h3>
                    
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {artist.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700 bg-neutral-50 border border-neutral-200 p-2.5 rounded-xl mb-4">
                      <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                      <span className="truncate">{artist.portfolio}</span>
                    </div>

                    <a
                      href={artist.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 font-semibold text-xs rounded-full flex items-center justify-center gap-1.5 transition-colors"
                    >
                      Acessar Portfólio / Acervo
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mb-3">
              Você também é criador?
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Monte sua galeria na plataforma AWAW, exponha suas obras e construa conexões diretas com empresas e iniciativas culturais.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/signup?type=artist"
                className="px-6 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all"
              >
                Cadastrar Meu Portfólio
              </Link>
              <Link
                to="/social-projects"
                className="px-6 py-3 bg-white border border-neutral-300 text-neutral-700 hover:border-purple-600 hover:text-purple-600 font-semibold text-sm rounded-full transition-all"
              >
                Ver Projetos Sociais
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}