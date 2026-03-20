import {Star, Handshake, GraduationCap} from 'lucide-react'

function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* For Artists */}
          <div className="group bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Star className="w-8 h-8 text-white" fill="white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-black text-white mb-4">FOR ARTISTS:</h3>
            <p className="text-purple-100 text-lg leading-relaxed">
              Build your portfolio.
              <br />
              Be seen by the world.
            </p>
          </div>

          {/* For Businesses */}
          <div className="group bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <Handshake className="w-8 h-8 text-gray-800" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-black text-gray-800 mb-4">FOR BUSINESSES:</h3>
            <p className="text-gray-800 text-lg leading-relaxed">
              Find unique talent.
              <br />
              Elevate your brand.
            </p>
          </div>

          {/* For Communities */}
          <div className="group bg-white border-4 border-purple-300 rounded-3xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
              <GraduationCap className="w-8 h-8 text-purple-600" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-black text-purple-900 mb-4">FOR COMMUNITIES:</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Access social projects
              <br />
              and education.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
