'use client'

import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { ArrowDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient with French flag colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-france-blue-500/10 via-white to-france-red-500/10 dark:from-france-blue-900/20 dark:via-gray-900 dark:to-france-red-900/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-france-blue-300/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-france-red-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-france-blue-100 dark:bg-france-blue-900/30 text-france-blue-700 dark:text-france-blue-300 text-sm font-medium">
              <span>🇫🇷</span>
              <span>Intercâmbio Janeiro 2026</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Ajude a transformar meu sonho de{' '}
              <span className="bg-gradient-to-r from-france-blue-600 to-france-red-600 bg-clip-text text-transparent">
                estudar na França
              </span>{' '}
              em realidade
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Sou estudante de Engenharia de Software e fui selecionada para um intercâmbio em janeiro de 2026. 
              Sua contribuição pode fazer toda a diferença nessa jornada!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="#contribuir" size="lg">
                Contribuir Agora 💙
              </Button>
              <Button href="#historia" variant="outline" size="lg">
                Conheça Minha História
              </Button>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="mt-16 inline-flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm">Role para saber mais</span>
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
