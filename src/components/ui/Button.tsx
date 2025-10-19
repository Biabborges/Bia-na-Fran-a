import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  href,
  ...props 
}: ButtonProps) {
  const baseClasses = 'rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-france-blue-600 hover:bg-france-blue-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-france-red-600 hover:bg-france-red-700 text-white shadow-md hover:shadow-lg',
    outline: 'border-2 border-france-blue-600 text-france-blue-600 hover:bg-france-blue-50 dark:hover:bg-france-blue-900',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
