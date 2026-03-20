import { useState } from "react"
import { useSearchParams, Link } from "react-router-dom"
import Navbar from "@/components/Navbar"

export default function SignUp() {
  const [searchParams] = useSearchParams()
  const type = searchParams.get("type") || "artist"
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    category: "",
    portfolio: "",
    company: "",
    description: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Cadastro realizado com sucesso! (Demo)")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const getTitle = () => {
    switch(type) {
      case "artist": return "Cadastro de Artista"
      case "company": return "Cadastro de Empresa"
      case "volunteer": return "Cadastro de Voluntário"
      case "partner": return "Cadastro de Parceiro"
      default: return "Cadastro"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {getTitle()}
            </h1>
            <p className="text-gray-300 text-lg">
              {type === "artist" && "Compartilhe seu talento com o mundo"}
              {type === "company" && "Encontre os melhores artistas para seus projetos"}
              {type === "volunteer" && "Faça a diferença através da arte"}
              {type === "partner" && "Apoie projetos que transformam vidas"}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome / Nome da Empresa */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  {type === "company" ? "Nome da Empresa" : "Nome Completo"}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  placeholder={type === "company" ? "Nome da sua empresa" : "Seu nome completo"}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Senha */}
              <div>
                <label className="block text-white font-semibold mb-2">Senha</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  placeholder="Mínimo 8 caracteres"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-white font-semibold mb-2">Telefone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>

              {/* Categoria (apenas para artista) */}
              {type === "artist" && (
                <div>
                  <label className="block text-white font-semibold mb-2">Categoria</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-400 transition-colors"
                  >
                    <option value="" className="bg-slate-800">Selecione uma categoria</option>
                    <option value="painter" className="bg-slate-800">Pintor(a)</option>
                    <option value="sculptor" className="bg-slate-800">Escultor(a)</option>
                    <option value="photographer" className="bg-slate-800">Fotógrafo(a)</option>
                    <option value="illustrator" className="bg-slate-800">Ilustrador(a)</option>
                    <option value="muralist" className="bg-slate-800">Muralista</option>
                    <option value="designer" className="bg-slate-800">Designer</option>
                    <option value="other" className="bg-slate-800">Outro</option>
                  </select>
                </div>
              )}

              {/* Portfolio / Website (para artista) */}
              {type === "artist" && (
                <div>
                  <label className="block text-white font-semibold mb-2">Portfolio / Website</label>
                  <input
                    type="url"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors"
                    placeholder="https://seu-portfolio.com"
                  />
                </div>
              )}

              {/* Tipo de Empresa (para company) */}
              {type === "company" && (
                <div>
                  <label className="block text-white font-semibold mb-2">Tipo de Empresa</label>
                  <select
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-400 transition-colors"
                  >
                    <option value="" className="bg-slate-800">Selecione o tipo</option>
                    <option value="gallery" className="bg-slate-800">Galeria de Arte</option>
                    <option value="agency" className="bg-slate-800">Agência de Design</option>
                    <option value="publisher" className="bg-slate-800">Editora</option>
                    <option value="events" className="bg-slate-800">Produtora de Eventos</option>
                    <option value="marketing" className="bg-slate-800">Agência de Marketing</option>
                    <option value="other" className="bg-slate-800">Outro</option>
                  </select>
                </div>
              )}

              {/* Descrição */}
              <div>
                <label className="block text-white font-semibold mb-2">
                  {type === "artist" ? "Sobre seu Trabalho" : "Sobre sua Empresa"}
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                  placeholder={type === "artist" ? "Conte sobre seu estilo artístico e experiência..." : "Conte sobre sua empresa e o que faz..."}
                />
              </div>

              {/* Botão Submit */}
              <button
                type="submit"
                className="w-full py-4 px-6 bg-gradient-to-r from-emerald-400 to-cyan-400 text-slate-900 font-bold text-lg rounded-xl hover:shadow-lg hover:shadow-emerald-400/50 transition-all duration-300"
              >
                Criar Conta
              </button>

              {/* Link para Login */}
              <div className="text-center">
                <p className="text-gray-300">
                  Já tem uma conta?{" "}
                  <Link to="/" className="text-emerald-400 hover:text-emerald-300 font-semibold">
                    Faça Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}