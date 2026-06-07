import NavBar from './components/NavBar.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthStore } from './store/useAuthStore.js'
import { Loader } from 'lucide-react'


import HomePage from './pages/HomePage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SettingsPage from './pages/Settingspage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'


const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();

  useEffect( () => {
    checkAuth()
  }, [checkAuth] );

  console.log(authUser)

  if( isCheckingAuth && !authUser) return(
    <div className='flex items-center justify-center h-screen'>
      <Loader className='size-10 animate-spin'/>
    </div>
  )
  return (
    <div>
      <NavBar/>

      <Routes>

        <Route path='/' element={ authUser ? < HomePage /> : <Navigate to="/login"/> } />

        <Route path='/signup' element={authUser ? < SignUpPage /> : <Navigate to="/"/> } />

        <Route path='/login' element={ authUser ? < LoginPage /> : <Navigate to="/login"/>} />
        
        <Route path='/settings' element={< SettingsPage />} />
        
        <Route path='/profile' element={authUser ? < ProfilePage /> : <Navigate to="/login"/>} />

      </Routes>
    </div>
  )
}

export default App
