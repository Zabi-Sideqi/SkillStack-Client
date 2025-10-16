import * as React from 'react'

interface DropdownMenuContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const DropdownMenuContext = React.createContext<
  DropdownMenuContextValue | undefined
>(undefined)

const DropdownMenu = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false)

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen }}>
      <div className='relative inline-block'>{children}</div>
    </DropdownMenuContext.Provider>
  )
}

const DropdownMenuTrigger = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; asChild?: boolean }
>(({ children }, ref) => {
  const context = React.useContext(DropdownMenuContext)
  if (!context)
    throw new Error('DropdownMenuTrigger must be used within DropdownMenu')

  return (
    <div
      ref={ref}
      className='inline-flex cursor-pointer dropdown-trigger'
      onClick={() => context.setOpen(!context.open)}
    >
      {children}
    </div>
  )
})
DropdownMenuTrigger.displayName = 'DropdownMenuTrigger'

const DropdownMenuContent = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; align?: 'start' | 'center' | 'end' }
>(({ children, align = 'center' }, ref) => {
  const context = React.useContext(DropdownMenuContext)
  if (!context)
    throw new Error('DropdownMenuContent must be used within DropdownMenu')

  const alignClass =
    align === 'end'
      ? 'right-0'
      : align === 'start'
      ? 'left-0'
      : 'left-1/2 -translate-x-1/2'

  React.useEffect(() => {
    if (!context.open) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        !target.closest('.dropdown-content') &&
        !target.closest('.dropdown-trigger')
      ) {
        context.setOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [context])

  if (!context.open) return null

  return (
    <div
      ref={ref}
      className={`dropdown-content absolute ${alignClass} top-full mt-2 w-48 rounded-xl bg-slate-950/95 dark:bg-white/95 backdrop-blur-xl border border-cyan-500/30 dark:border-cyan-400/40 shadow-2xl shadow-cyan-500/30 dark:shadow-cyan-400/30 z-50 overflow-hidden`}
    >
      <div className='py-1'>{children}</div>
    </div>
  )
})
DropdownMenuContent.displayName = 'DropdownMenuContent'

const DropdownMenuItem = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, onClick, ...props }, ref) => {
  const context = React.useContext(DropdownMenuContext)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
    context?.setOpen(false)
  }

  return (
    <button
      ref={ref}
      className={`w-full text-left px-4 py-2 text-sm text-cyan-100 dark:text-cyan-800 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-violet-500/20 dark:hover:from-cyan-400/20 dark:hover:to-violet-400/20 transition-colors cursor-pointer ${
        className || ''
      }`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
})
DropdownMenuItem.displayName = 'DropdownMenuItem'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
}
