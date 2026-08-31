import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, LayoutDashboard, UserPlus } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-3xl font-black text-purple-600 hover:text-purple-700 tracking-tight transition-colors">
              AWAW
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neutral-700 hover:text-purple-600 font-medium text-sm transition-colors">
              Início
            </Link>
            <Link to="/artists" className="text-neutral-700 hover:text-purple-600 font-medium text-sm transition-colors">
              Artistas
            </Link>
            <Link to="/companies" className="text-neutral-700 hover:text-purple-600 font-medium text-sm transition-colors">
              Empresas
            </Link>
            <Link to="/social-projects" className="text-neutral-700 hover:text-purple-600 font-medium text-sm transition-colors">
              Projetos Sociais
            </Link>
            <Link to="/about" className="text-neutral-700 hover:text-purple-600 font-medium text-sm transition-colors">
              Sobre Nós
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link 
                  to="/dashboard"
                  className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2"
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="text-xs font-semibold text-neutral-500 hover:text-red-600 transition-colors px-2 py-1"
                >
                  Sair
                </button>
              </div>
            ) : (
              <Link 
                to="/signup?type=artist"
                className="px-6 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
              >
                <UserPlus className="w-3.5 h-3.5" />
                Comece Agora
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100 px-6 py-6 space-y-4 shadow-lg">
          <Link to="/" className="block text-neutral-700 font-medium py-1.5" onClick={() => setMobileMenuOpen(false)}>Início</Link>
          <Link to="/artists" className="block text-neutral-700 font-medium py-1.5" onClick={() => setMobileMenuOpen(false)}>Artistas</Link>
          <Link to="/companies" className="block text-neutral-700 font-medium py-1.5" onClick={() => setMobileMenuOpen(false)}>Empresas</Link>
          <Link to="/social-projects" className="block text-neutral-700 font-medium py-1.5" onClick={() => setMobileMenuOpen(false)}>Projetos Sociais</Link>
          <Link to="/about" className="block text-neutral-700 font-medium py-1.5" onClick={() => setMobileMenuOpen(false)}>Sobre Nós</Link>
          
          <div className="pt-2">
            <Link 
              to={isAuthenticated ? "/dashboard" : "/signup?type=artist"}
              className="block w-full py-3 bg-purple-600 text-white font-bold text-center text-sm rounded-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isAuthenticated ? "ACESSAR DASHBOARD" : "COMECE AGORA"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar