import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'
import type { User } from '@lumi.new/sdk'
import { lumi } from '@/lib/lumi'

// 1. Mantemos a lógica de autenticação que você já tinha
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

// 2. ADICIONAMOS o componente visual que o Home.tsx está procurando
export default function JoinNetwork() {
  const { isAuthenticated } = useAuth();

  return (
    <section className="py-20 bg-emerald-400">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 uppercase">
          Ready to break down the walls?
        </h2>
        
        <p className="text-xl text-gray-800 mb-10 font-medium">
          {isAuthenticated 
            ? "Welcome back! Explore the latest opportunities in the network." 
            : "Join a global community where talent meets opportunity."}
        </p>

        <Link 
          to="/signup" 
          className="inline-block bg-white text-gray-900 px-10 py-4 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-xl"
        >
          {isAuthenticated ? "GO TO DASHBOARD" : "JOIN THE NETWORK"}
        </Link>
      </div>
    </section>
  )
}