import { Link } from "react-router-dom"
import {Sparkles, Music, Camera, Users} from 'lucide-react'

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              YOUR ART,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">NO WALLS.</span>
                <span className="absolute inset-0 bg-emerald-300 -rotate-1 rounded-lg -z-0"></span>
              </span>
              <br />
              WHERE TALENT FINDS OPPORTUNITY.
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              A modern platform connecting diverse creators with businesses,
              government partners, and education initiatives.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/signup?type=artist"
                className="px-10 py-4 bg-emerald-300 text-purple-900 font-bold rounded-full hover:bg-emerald-400 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-purple-900 text-center"
              >
                I'M AN ARTIST
              </Link>
              <Link 
                to="/signup?type=company"
                className="px-10 py-4 bg-white text-purple-900 font-bold rounded-full hover:bg-purple-50 hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-purple-900 text-center"
              >
                I'M A COMPANY
              </Link>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-100 to-emerald-100 rounded-3xl p-8 lg:p-12">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-emerald-400 rounded-full opacity-20 animate-pulse delay-75"></div>
              
              {/* Icons Grid */}
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <Sparkles className="w-16 h-16 text-purple-600 mb-4" strokeWidth={2} />
                  <p className="font-bold text-gray-800">Creative Arts</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-8">
                  <Music className="w-16 h-16 text-emerald-600 mb-4" strokeWidth={2} />
                  <p className="font-bold text-gray-800">Music</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow -mt-4">
                  <Camera className="w-16 h-16 text-amber-600 mb-4" strokeWidth={2} />
                  <p className="font-bold text-gray-800">Photography</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow mt-4">
                  <Users className="w-16 h-16 text-purple-600 mb-4" strokeWidth={2} />
                  <p className="font-bold text-gray-800">Community</p>
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
