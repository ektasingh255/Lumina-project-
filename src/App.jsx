import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'

const getRoute = () => window.location.pathname.replace('/', '') || 'home'

export default function App() {
  const [route, setRoute] = useState(getRoute)

  const navigate = (page) => {
    window.history.pushState({}, '', page === 'home' ? '/' : `/${page}`)
    setRoute(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const onPopState = () => setRoute(getRoute())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  if (route === 'login') return <LoginPage navigate={navigate} />
  if (route === 'dashboard') return <DashboardPage navigate={navigate} />
  return <HomePage navigate={navigate} />
}
