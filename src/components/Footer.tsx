import {Instagram, Twitter, Linkedin, Mail} from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-3xl font-black text-purple-400 mb-4">AWAW</h3>
            <p className="text-gray-400 leading-relaxed">
              Conectando talentos com oportunidades. Quebrando paredes da industria criativa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#artists" className="text-gray-400 hover:text-purple-400 transition-colors">Artistas</a></li>
              <li><a href="#companies" className="text-gray-400 hover:text-purple-400 transition-colors">Empresas</a></li>
              <li><a href="#social-projects" className="text-gray-400 hover:text-purple-400 transition-colors">Projetos Sociais</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">Sobre</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Histórias de sucesso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Central  de Ajuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-bold mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 AWAW. Todos os Direitos Reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Politicas de Privacidade</a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">Termos e Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
