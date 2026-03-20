import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from 'lucide-react'
import type { User } from '@lumi.new/sdk'
import { lumi } from '@/lib/lumi'

// 1. Hook de Autenticação (Lógica)
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(lumi.auth.isAuthenticated)
  const [user, setUser] = useState<User | null>(lumi.auth.user)

  useEffect(() => {
    const unsubscribe = lumi.auth.onAuthChange(({ isAuthenticated, user }) => {
      setIsAuthenticated(isAuthenticated)
      setUser(user)
    })
    return () => unsubscribe()
  }, [])

  return {
    user,
    isAuthenticated,
    isAdmin: user?.userRole === 'ADMIN',
  }
}

// 2. Componente Visual (Interface)
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isAuthenticated } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-4xl font-black text-purple-600 hover:text-purple-700 transition-colors">
              AWAW
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/artists" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Artists
            </Link>
            <Link to="/companies" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Companies
            </Link>
            <Link to="/social-projects" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Social Projects
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              About
            </Link>
          </div>

          {/* CTA Button - Muda o texto se estiver logado */}
          <div className="hidden md:block">
            <Link 
              to={isAuthenticated ? "/dashboard" : "/signup?type=artist"}
              className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300 inline-block"
            >
              {isAuthenticated ? "DASHBOARD" : "START NOW"}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-6 space-y-4">
            <Link to="/artists" className="block text-gray-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Artists</Link>
            <Link to="/companies" className="block text-gray-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Companies</Link>
            <Link to="/social-projects" className="block text-gray-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Social Projects</Link>
            <Link to="/about" className="block text-gray-700 font-medium py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link 
              to={isAuthenticated ? "/dashboard" : "/signup?type=artist"}
              className="block w-full px-8 py-3 bg-purple-600 text-white font-semibold rounded-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isAuthenticated ? "DASHBOARD" : "START NOW"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar