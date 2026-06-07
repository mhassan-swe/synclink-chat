import React from 'react'
import NavBar from './components/NavBar.jsx'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthStore } from './store/useAuthStore.js'
import { Loader } from 'lucide-react'


import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SettingsPage from './pages/Settingspage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'


const App = () => {
  const { authUser, checkAuth } = useAuthStore();

  useEffect( () => {
    checkAuth()
  }, [checkAuth] );

  console.log(authUser)

  if( isCheckingAuth && !authUser) return
  return (
    <div>
      <NavBar/>

      <Routes>

        <Route path='/' element={< HomePage />} />
        <Route path='/signup' element={< SignUpPage />} />
        <Route path='/login' element={< LoginPage />} />
        <Route path='/settings' element={< SettingsPage />} />
        <Route path='/profile' element={< ProfilePage />} />

      </Routes>
    </div>
  )
}

export default App
