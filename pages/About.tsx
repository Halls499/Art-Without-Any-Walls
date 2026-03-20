import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import fotoRafinha from '../img/rafinha.jpg'

export default function About() {
  const team = [
    {
      name: "Rafael D`Angelo",
      role: "Fundador & CEO",
      image: fotoRafinha,
      bio: "15 anos de experiência em gestão cultural"
    },
    {
      name: "Raul Mazzone",
      role: "Diretor de Tecnologia",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Especialista em plataformas digitais"
    },
    {
      name: "Cauan Bastos",
      role: "Diretora Artística",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Curadora com projetos internacionais"
    },
        {
      name: "Wenvel Kaique Campo Gomes",
      role: "Diretora Artística",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Curadora com projetos internacionais"
    },
        {
      name: "Danilo Gaspar",
      role: "Diretora Artística",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Curadora com projetos internacionais"
    },
        {
      name: "Guilherme Figueira",
      role: "Diretora Artística",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Curadora com projetos internacionais"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Nós</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Conectando arte, cultura e oportunidades para criar um ecossistema criativo vibrante e sustentável
            </p>
          </div>

          {/* Missão, Visão, Valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-3xl p-8 border border-emerald-400/30">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-3xl font-bold text-white mb-4">Nossa Missão</h2>
              <p className="text-gray-300 text-lg">
                Democratizar o acesso à arte e criar pontes entre artistas talentosos e oportunidades reais de crescimento profissional.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-400/30">
              <div className="text-5xl mb-4">👁️</div>
              <h2 className="text-3xl font-bold text-white mb-4">Nossa Visão</h2>
              <p className="text-gray-300 text-lg">
                Ser a maior rede de conexão entre artistas e empresas da América Latina, transformando vidas através da arte.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl p-8 border border-amber-400/30">
              <div className="text-5xl mb-4">💎</div>
              <h2 className="text-3xl font-bold text-white mb-4">Nossos Valores</h2>
              <p className="text-gray-300 text-lg">
                Criatividade, inclusão, transparência, sustentabilidade e compromisso com a excelência artística.
              </p>
            </div>
          </div>

          {/* Nossa História */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Nossa História</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="prose prose-invert prose-lg max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Nascemos em 2020 com um propósito claro: criar uma ponte real entre o talento artístico brasileiro e as oportunidades do mercado. Começamos como um pequeno projeto conectando 10 artistas locais a galerias da região.
                </p>
                <p className="text-gray-300 text-lg mb-6">
                  Hoje, somos uma plataforma nacional que já conectou mais de <span className="text-emerald-400 font-bold">5.000 artistas</span> a <span className="text-purple-400 font-bold">500+ empresas</span>, gerando oportunidades reais de trabalho e crescimento profissional.
                </p>
                <p className="text-gray-300 text-lg">
                  Acreditamos que todo artista merece ser visto, valorizado e remunerado de forma justa pelo seu trabalho. Nossa plataforma não é apenas um diretório - é um ecossistema vivo onde talentos florescem e negócios prosperam através da arte.
                </p>
              </div>
            </div>
          </div>

          {/* Time */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Nosso Time</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-purple-400 transition-all duration-300 hover:scale-105 group text-center"
                >
                  <div className="h-64 overflow-hidden">
             <img
                      src={member.image} // CORREÇÃO AQUI: src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-emerald-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-300">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">5K+</div>
              <div className="text-gray-300 text-lg">Artistas Cadastrados</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300 text-lg">Empresas Parceiras</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-amber-400 mb-2">10K+</div>
              <div className="text-gray-300 text-lg">Conexões Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-400 mb-2">50+</div>
              <div className="text-gray-300 text-lg">Projetos Sociais</div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Faça Parte Dessa História</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de artistas e empresas que já estão transformando o mercado de arte no Brasil
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/signup?type=artist"
                className="px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Sou Artista
              </a>
              <a
                href="/signup?type=company"
                className="px-8 py-4 bg-emerald-400 text-slate-900 font-bold text-lg rounded-xl hover:bg-emerald-300 transition-all duration-300"
              >
                Sou Empresa
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}