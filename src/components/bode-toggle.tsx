import { Moon, Sun } from 'lucide-react'

import { Button } from './ui/button'
import { useTheme } from './theme-provider'

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  // Simple toggle between light and dark
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    console.log('Changing theme to:', newTheme)
    setTheme(newTheme)
    // Force update the document element
    setTimeout(() => {
      const root = document.documentElement
      console.log('Current classes:', root.className)
    }, 100)
  }

  // Determine which icon to show based on current theme
  const isDark = theme === 'dark'

  return (
    <Button variant='outline' size='icon' onClick={toggleTheme}>
      {isDark ? (
        <Moon className='h-[1.2rem] w-[1.2rem] transition-all' />
      ) : (
        <Sun className='h-[1.2rem] w-[1.2rem] transition-all' />
      )}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
