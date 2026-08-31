import { useState, useEffect } from "react"

export interface UserProfile {
  id: string
  name: string
  email: string
  role: "ARTIST" | "COMPANY" | "SOCIAL" | "ADMIN"
}

export function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(() => {
    const stored = localStorage.getItem("awaw_user")
    return stored ? JSON.parse(stored) : null
  })

  const isAuthenticated = !!user

  const login = (userData: UserProfile) => {
    localStorage.setItem("awaw_user", JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem("awaw_user")
    setUser(null)
  }

  return {
    user,
    isAuthenticated,
    isAdmin: user?.role === "ADMIN",
    login,
    logout
  }
}