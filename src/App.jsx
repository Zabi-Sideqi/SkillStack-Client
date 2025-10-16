// client/src/App.jsx

import React, { Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'

const Home = React.lazy(() => import('./pages/Home'))
const Login = React.lazy(() => import('./components/Login'))
const Signup = React.lazy(() => import('./components/Signup'))
const MyResultPage = React.lazy(() => import('./pages/MyResultPage'))

function RequireAuth({ children }) {
  const isLoggedIn = Boolean(localStorage.getItem('authToken'))
  const location = useLocation()
  if (!isLoggedIn) {
    return <Navigate to='/login' state={{ from: location }} replace />
  }
  return children
}

const App = () => (
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route
          path='/result'
          element={
            <RequireAuth>
              <MyResultPage />
            </RequireAuth>
          }
        />
      </Routes>
    </Suspense>
  </ThemeProvider>
)

export default App

