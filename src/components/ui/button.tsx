import * as React from 'react'

const buttonVariants = {
  variant: {
    default:
      'bg-gradient-to-r from-cyan-500 to-violet-500 text-white shadow hover:opacity-90',
    destructive:
      'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-sm hover:opacity-90',
    outline:
      'border border-cyan-500/30 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-900/70 text-cyan-100',
    secondary: 'bg-slate-900/50 text-cyan-100 shadow-sm hover:bg-slate-900/70',
    ghost: 'hover:bg-slate-900/50 hover:text-cyan-100',
    link: 'text-cyan-400 underline-offset-4 hover:underline',
  },
  size: {
    default: 'h-9 px-4 py-2',
    sm: 'h-8 rounded-md px-3 text-xs',
    lg: 'h-10 rounded-md px-8',
    icon: 'h-9 w-9',
  },
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants.variant
  size?: keyof typeof buttonVariants.size
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50'
    const variantClass = buttonVariants.variant[variant]
    const sizeClass = buttonVariants.size[size]

    return (
      <button
        className={`${baseClasses} ${variantClass} ${sizeClass} ${
          className || ''
        }`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
