import { Link } from "react-router-dom"
import { Target, Eye, Gem, Users, Sparkles, Building2, HeartHandshake } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import fotoRafinha from "../img/rafinha.jpg"

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
}

export default function About() {
  const team: TeamMember[] = [
    {
      name: "Rafael D'Angelo",
      role: "Fundador & Gestão de Projetos",
      image: fotoRafinha,
      bio: "Planejamento estratégico e articulação do ecossistema institucional da AWAW."
    },
    {
      name: "Raul Mazzone",
      role: "Diretoria de Tecnologia & Backend",
      image: "/projects/raul.jpeg",
      bio: "Arquitetura técnica, segurança de dados e infraestrutura de sistemas."
    },
    {
      name: "Wenvel Kaique Campos Gomes",
      role: "Engenharia de Software & Frontend",
      image: "/projects/wenvel.jpeg",
      bio: "Desenvolvimento da interface web, componentização React e experiência do usuário."
    },
    {
      name: "Cauan Bastos",
      role: "Curadoria Visual & Design de Produto",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Diretrizes de identidade visual, acessibilidade e curadoria artística."
    },
    {
      name: "Danilo Gaspar",
      role: "Relações Institucionais & Parcerias",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Captação de organizações, galerias e integração de projetos sociais."
    },
    {
      name: "Guilherme Figueira",
      role: "Qualidade, Testes & Documentação",
      image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600",
      bio: "Garantia de conformidade, validação de fluxos e documentação do projeto."
    }
  ]

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header no estilo da Home */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 mb-4">
              ARTE SEM <span className="text-purple-600">FRONTEIRAS.</span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              A <strong>AWAW (Art Without Any Walls)</strong> é uma plataforma dedicada a derrubar barreiras entre criadores independentes, empresas e iniciativas de impacto social.
            </p>
          </div>

          {/* Missão, Visão e Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 shadow-sm hover:border-purple-300 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-3">Nossa Missão</h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Democratizar a visibilidade da produção artística e viabilizar conexões profissionais diretas, justas e descentralizadas.
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 shadow-sm hover:border-purple-300 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-3">Nossa Visão</h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Consolidar-se como o ecossistema de referência na união entre cultura independente, economia criativa e formação comunitária.
              </p>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 shadow-sm hover:border-purple-300 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Gem className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-neutral-900 mb-3">Nossos Valores</h2>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Diversidade de linguagens, autonomia criativa, inclusão sociocultural e transparência nas relações profissionais.
              </p>
            </div>
          </div>

          {/* Nossa História / Manifesto */}
          <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8 sm:p-12 mb-20">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-6">
                Por Que a AWAW Existe?
              </h2>
              <div className="space-y-4 text-neutral-600 text-sm sm:text-base leading-relaxed text-left">
                <p>
                  Muitos artistas talentosos enfrentam dificuldades para furar a bolha dos circuitos tradicionais de galerias e alcançar oportunidades no mercado. Ao mesmo tempo, empresas e projetos sociais frequentemente buscam criadores autênticos, mas não possuem um canal direto e estruturado.
                </p>
                <p>
                  A <strong>AWAW</strong> foi desenvolvida para resolver esse gargalo: um ambiente digital unificado onde portfólios visuais encontram demandas reais do mercado e apoio comunitário, valorizando o trabalho autoral de ponta a ponta.
                </p>
              </div>
            </div>
          </div>

          {/* Seção da Equipe com Cards Padronizados */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-3">
                Desenvolvimento & Curadoria
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-neutral-900">
                Quem Faz Acontecer
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="group bg-white rounded-3xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col"
                >
                  {/* Container da Foto sem distorção */}
                  <div className="h-64 w-full bg-neutral-100 relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
                      }}
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-1" title={member.name}>
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-3">
                        {member.role}
                      </p>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}