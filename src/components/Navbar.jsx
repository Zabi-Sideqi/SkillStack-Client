// client/src/components/Navbar.jsx

import React, { useState, useEffect } from 'react'
import { navbarStyles } from '../assets/dummyStyles'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Award, LogOut, LogIn, X, Menu } from 'lucide-react'
import { ModeToggle } from './bode-toggle'

const Navbar = () => {
  const navigate = useNavigate()
  const [loggedIn, setLoggedIn] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // useEffect hook to show login state changes
  useEffect(() => {
    try {
      const u = localStorage.getItem('authToken')
      setLoggedIn(!!u)
    } catch {
      setLoggedIn(false)
    }

    const handler = (ev) => {
      const detailUser = ev?.detail?.user ?? null
      setLoggedIn(!!detailUser)
    }
    window.addEventListener('authChanged', handler)

    return () => window.removeEventListener('authChanged', handler)
  }, [])

  // Funktion för att hantera utloggning
  const handleLogout = () => {
    // Ta bort token från localStorage
    try {
      localStorage.removeItem('authToken')
      localStorage.clear()
    } catch {
      // Ignorera fel
    }
    window.dispatchEvent(
      new CustomEvent('authChanged', { detail: { user: null } })
    )
    setMenuOpen(false)

    try {
      navigate('/login')
    } catch {
      window.location.href = '/login'
    }
  }

  return (
    <div className={navbarStyles.nav}>
      <div
        style={{ backgroundImage: navbarStyles.decorativePatternBackground }}
        className={navbarStyles.decorativePattern}
      ></div>

      <div className={navbarStyles.bubble1}></div>
      <div className={navbarStyles.bubble2}></div>
      <div className={navbarStyles.bubble3}></div>

      <div className={navbarStyles.container}>
        <div className={navbarStyles.logoContainer}>
          <Link to='/' className={navbarStyles.logoButton}>
            <img
              src='/LOG2.png'
              alt='Logo'
              className='h-10 w-10 object-contain bg-white/90 rounded-lg p-1 shadow-lg'
            />
          </Link>
        </div>
        <div className={navbarStyles.titleContainer}>
          <div className={navbarStyles.titleBackground}>
            <h1 className={navbarStyles.titleText}>SkillStack</h1>
          </div>
        </div>
        <div className={navbarStyles.desktopButtonsContainer}>
          <div className={navbarStyles.spacer}></div>

          {/* Theme Toggle Button */}
          <ModeToggle />

          <NavLink to='/result' className={navbarStyles.resultsButton}>
            <Award className={navbarStyles.buttonIcon} />
            My Results
          </NavLink>
          {loggedIn ? (
            <button
              onClick={handleLogout}
              className={navbarStyles.logoutButton}
            >
              <LogOut className={navbarStyles.buttonIcon} />
            </button>
          ) : (
            <NavLink to='/login' className={navbarStyles.loginButton}>
              <LogIn className={navbarStyles.buttonIcon} />
              Login
            </NavLink>
          )}
        </div>
        <div className={navbarStyles.mobileMenuContainer}>
          {/* Theme Toggle beside hamburger menu */}
          <div className='md:hidden mr-2'>
            <ModeToggle />
          </div>

          <button
            onClick={() => setMenuOpen((s) => !s)}
            className={navbarStyles.menuToggleButton}
          >
            {menuOpen ? (
              <X className={navbarStyles.menuIcon} />
            ) : (
              <Menu className={navbarStyles.menuIcon} />
            )}
          </button>
          {menuOpen && (
            <div className={navbarStyles.mobileMenuPanel}>
              <ul className={navbarStyles.mobileMenuList}>
                <li>
                  <NavLink
                    to='/result'
                    className={navbarStyles.mobileMenuItem}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Award className={navbarStyles.mobileMenuIcon} />
                    My Results
                  </NavLink>
                </li>
                {loggedIn ? (
                  <li>
                    <button
                      type='button'
                      onClick={handleLogout}
                      className={navbarStyles.mobileMenuItem}
                    >
                      <LogOut className={navbarStyles.mobileMenuIcon} />
                      Logout
                    </button>
                  </li>
                ) : (
                  <li>
                    <NavLink
                      to='/login'
                      className={navbarStyles.mobileMenuItem}
                      onClick={() => setMenuOpen(false)}
                    >
                      <LogIn className={navbarStyles.mobileMenuIcon} />
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>

              <div />
            </div>
          )}
        </div>
      </div>
      <style>{navbarStyles.animations}</style>
    </div>
  )
}

export default Navbar
