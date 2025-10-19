'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import { Users, TrendingUp, Heart } from 'lucide-react'

// TODO: Atualizar esses valores dinamicamente
const currentAmount = 5000 // Valor arrecadado até agora
const goalAmount = 30000 // Meta total
const supportersCount = 23 // Número de apoiadores

const percentage = (currentAmount / goalAmount) * 100

export default function Progress() {
  return (
    <Section id="progresso" background="gray">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Progresso da <span className="text-france-blue-600 dark:text-france-blue-400">Vaquinha</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Acompanhe em tempo real como estamos chegando ao objetivo!
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
          >
            <TrendingUp className="w-8 h-8 mx-auto mb-3 text-france-blue-600 dark:text-france-blue-400" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Arrecadado</p>
            <p className="text-3xl font-bold text-france-blue-600 dark:text-france-blue-400">
              R$ {currentAmount.toLocaleString('pt-BR')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
          >
            <Heart className="w-8 h-8 mx-auto mb-3 text-france-red-600 dark:text-france-red-400 fill-current" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Meta</p>
            <p className="text-3xl font-bold text-france-red-600 dark:text-france-red-400">
              R$ {goalAmount.toLocaleString('pt-BR')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center"
          >
            <Users className="w-8 h-8 mx-auto mb-3 text-gray-600 dark:text-gray-400" />
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Apoiadores</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {supportersCount}
            </p>
          </motion.div>
        </div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8"
        >
          <div className="mb-4 flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Progresso
            </span>
            <span className="text-2xl font-bold text-france-blue-600 dark:text-france-blue-400">
              {percentage.toFixed(1)}%
            </span>
          </div>

          {/* Progress Bar Track */}
          <div className="relative h-6 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${percentage}%` }}
              transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-france-blue-600 to-france-red-600 rounded-full"
            />
          </div>

          {/* Remaining Amount */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Faltam apenas{' '}
              <span className="font-bold text-france-blue-600 dark:text-france-blue-400">
                R$ {(goalAmount - currentAmount).toLocaleString('pt-BR')}
              </span>{' '}
              para alcançar o objetivo! 🎯
            </p>
          </div>
        </motion.div>

        {/* Encouragement Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Cada contribuição, por menor que seja, me aproxima do meu sonho.
            <br />
            <span className="text-france-blue-600 dark:text-france-blue-400 font-semibold">
              Obrigada por acreditar em mim! 💙
            </span>
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
