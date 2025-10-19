'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import { Plane, Home, FileText, UtensilsCrossed, Backpack, Calculator } from 'lucide-react'

const expenses = [
  {
    icon: Plane,
    category: 'Passagens Aéreas',
    amount: 'R$ 6.000',
    description: 'Voo ida e volta Brasil - França',
  },
  {
    icon: Home,
    category: 'Acomodação',
    amount: 'R$ 12.000',
    description: 'Moradia por 6 meses (R$ 2.000/mês)',
  },
  {
    icon: FileText,
    category: 'Documentação',
    amount: 'R$ 3.000',
    description: 'Visto, seguro saúde e taxas',
  },
  {
    icon: UtensilsCrossed,
    category: 'Alimentação',
    amount: 'R$ 6.000',
    description: 'Custo estimado de alimentação (R$ 1.000/mês)',
  },
  {
    icon: Backpack,
    category: 'Material e Transporte',
    amount: 'R$ 3.000',
    description: 'Material acadêmico e transporte local',
  },
]

const total = 30000

export default function BudgetBreakdown() {
  return (
    <Section id="orcamento" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Como o Dinheiro Será <span className="text-france-blue-600 dark:text-france-blue-400">Usado</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Transparência total: veja para onde cada real arrecadado será destinado
        </p>
      </motion.div>

      {/* Expenses List */}
      <div className="max-w-4xl mx-auto space-y-4 mb-8">
        {expenses.map((expense, index) => (
          <motion.div
            key={expense.category}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card hover={false}>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-france-blue-100 dark:bg-france-blue-900/30 text-france-blue-600 dark:text-france-blue-400">
                  <expense.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{expense.category}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{expense.description}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-xl text-france-blue-600 dark:text-france-blue-400">
                    {expense.amount}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Total */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <Card className="bg-gradient-to-r from-france-blue-600 to-france-red-600 text-white border-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calculator className="w-8 h-8" />
              <h3 className="font-bold text-2xl">Total Necessário</h3>
            </div>
            <p className="font-bold text-4xl">
              R$ {total.toLocaleString('pt-BR')}
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-8"
      >
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          💙 <strong>Compromisso de transparência:</strong> Manterei todos os apoiadores atualizados sobre 
          o uso dos recursos através das minhas redes sociais. Toda contribuição, independente do valor, 
          faz a diferença e será usada com responsabilidade e gratidão.
        </p>
      </motion.div>
    </Section>
  )
}
