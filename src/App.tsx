import type { RouteObject } from 'react-router-dom'
import Home from '@/pages/Home'
import Artists from '@/pages/Artists'
import Companies from '@/pages/Companies'
import SocialProjects from '@/pages/SocialProjects'
import About from '@/pages/About'
import SignUp from '@/pages/SingUp'
import { useRoutes } from 'react-router-dom'

// Used in @/prerender.tsx
export const routes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/artists', element: <Artists /> },
  { path: '/companies', element: <Companies /> },
  { path: '/social-projects', element: <SocialProjects /> },
  { path: '/about', element: <About /> },
  { path: '/signup', element: <SignUp /> },
]

function App() {
  return useRoutes(routes)
}

export default App
