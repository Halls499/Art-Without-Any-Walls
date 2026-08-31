import { Link } from "react-router-dom"
import { Sparkles, ArrowUpRight } from "lucide-react"

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/60 via-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Lado Esquerdo: Mensagem e Ação */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 leading-[1.1] tracking-tight">
              ARTE{" "}
              <span className="relative inline-block text-neutral-900">
                <span className="relative z-10 px-1">SEM PAREDES.</span>
                <span className="absolute inset-0 bg-emerald-300 -rotate-1 rounded-lg -z-0"></span>
              </span>
              <br />
              ONDE SUA PAIXÃO ENCONTRA OPORTUNIDADES
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
              A arte além de limites e padrões. Um espaço digital para valorizar a diversidade cultural brasileira, conectar portfólios a empresas e fortalecer projetos sociais.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/signup?type=artist"
                className="px-8 py-3.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold rounded-full shadow-md hover:shadow-lg transition-all text-center text-sm"
              >
                SOU ARTISTA
              </Link>
              <Link
                to="/signup?type=company"
                className="px-8 py-3.5 bg-white text-neutral-800 border-2 border-neutral-300 hover:border-purple-600 hover:text-purple-600 font-bold rounded-full shadow-sm hover:shadow-md transition-all text-center text-sm"
              >
                SOU UMA EMPRESA
              </Link>
            </div>
          </div>

          {/* Lado Direito: Cards Flutuantes de Destaque da Arte Nacional */}
          <div className="lg:col-span-6 relative">
            <div className="relative bg-gradient-to-br from-purple-100/70 to-emerald-100/60 rounded-3xl p-6 sm:p-8">
              {/* Efeitos de Fundo */}
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-purple-400/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-emerald-400/20 rounded-full blur-2xl pointer-events-none" />

              <div className="grid grid-cols-2 gap-4 relative z-10">
                {/* Card 1: Modernismo */}
                <div className="group bg-white p-3.5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200/80">
                  <div className="h-32 rounded-xl overflow-hidden mb-3 relative bg-neutral-100">
                    <img
                      src="/public/projects/abaporu.jpg"
                      alt="Abaporu - Tarsila do Amaral"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-semibold rounded-full">
                      Modernismo
                    </span>
                  </div>
                  <h4 className="font-bold text-neutral-900 text-sm truncate">Abaporu</h4>
                  <p className="text-xs text-purple-600 font-medium">Tarsila do Amaral</p>
                </div>

                {/* Card 2: Muralismo */}
                <div className="group bg-white p-3.5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200/80 mt-6">
                  <div className="h-32 rounded-xl overflow-hidden mb-3 relative bg-neutral-100">
                    <img
                      src="/public/projects/etnias.jpg"
                      alt="Eduardo Kobra"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-semibold rounded-full">
                      Muralismo
                    </span>
                  </div>
                  <h4 className="font-bold text-neutral-900 text-sm truncate">Etnias & Paz</h4>
                  <p className="text-xs text-purple-600 font-medium">Eduardo Kobra</p>
                </div>

                {/* Card 3: Arte Urbana */}
                <div className="group bg-white p-3.5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200/80 -mt-2">
                  <div className="h-32 rounded-xl overflow-hidden mb-3 relative bg-neutral-100">
                    <img
                      src="/public/projects/sonho.jpg"
                      alt="OSGEMEOS"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-semibold rounded-full">
                      Arte Urbana
                    </span>
                  </div>
                  <h4 className="font-bold text-neutral-900 text-sm truncate">O Sonho Coletivo</h4>
                  <p className="text-xs text-purple-600 font-medium">OSGEMEOS</p>
                </div>

                {/* Card 4: Fotografia */}
                <div className="group bg-white p-3.5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200/80 mt-4">
                  <div className="h-32 rounded-xl overflow-hidden mb-3 relative bg-neutral-100">
                    <img
                      src="/public/projects/sebastiao.jpg"
                      alt="Sebastião Salgado"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-neutral-950/80 backdrop-blur-md text-white text-[10px] font-semibold rounded-full">
                      Fotografia
                    </span>
                  </div>
                  <h4 className="font-bold text-neutral-900 text-sm truncate">Gênesis & Amazônia</h4>
                  <p className="text-xs text-purple-600 font-medium">Sebastião Salgado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero