import { ReactNode } from 'react'

interface SectionProps {
  id: string
  children: ReactNode
  className?: string
  background?: 'white' | 'gray' | 'gradient'
}

export default function Section({ 
  id, 
  children, 
  className = '', 
  background = 'white' 
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    gradient: 'gradient-france bg-opacity-5',
  }

  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}
