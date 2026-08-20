import { Star, Handshake, GraduationCap } from 'lucide-react'

function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">
            Como a AWAW Conecta Você
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            Uma plataforma aberta para criar, colaborar e gerar impacto cultural.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Para Artistas */}
          <div className="group bg-white dark:bg-neutral-900 border-2 border-purple-200 dark:border-purple-900/50 rounded-3xl p-8 hover:shadow-xl hover:border-purple-500 transition-all duration-300">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-950/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Star className="w-7 h-7 text-purple-600 dark:text-purple-400" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Para Artistas</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
              Monte seu portfólio digital sem barreiras técnicas e exponha suas produções para um público global.
            </p>
          </div>

          {/* Para Negócios */}
          <div className="group bg-white dark:bg-neutral-900 border-2 border-purple-200 dark:border-purple-900/50 rounded-3xl p-8 hover:shadow-xl hover:border-purple-500 transition-all duration-300">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-950/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <Handshake className="w-7 h-7 text-purple-600 dark:text-purple-400" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Para Negócios</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
              Encontre talentos criativos autênticos, feche parcerias comerciais e eleve a identidade visual da sua marca.
            </p>
          </div>

          {/* Para Comunidades */}
          <div className="group bg-white dark:bg-neutral-900 border-2 border-purple-200 dark:border-purple-900/50 rounded-3xl p-8 hover:shadow-xl hover:border-purple-500 transition-all duration-300">
            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-950/60 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <GraduationCap className="w-7 h-7 text-purple-600 dark:text-purple-400" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">Para Comunidades</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
              Descubra projetos sociais locais, participe de iniciativas culturais ou crie seu próprio movimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features