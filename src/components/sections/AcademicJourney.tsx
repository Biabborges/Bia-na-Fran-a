'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import { GraduationCap, Award, BookOpen, Trophy } from 'lucide-react'

const achievements = [
  {
    icon: GraduationCap,
    title: 'Engenharia de Software',
    description: 'Instituto de Tecnologia e Liderança (Inteli)',
    highlight: 'Formação focada em tecnologia, inovação e liderança',
  },
  {
    icon: Trophy,
    title: 'Selecionada para Intercâmbio',
    description: 'França - Janeiro 2026',
    highlight: 'Aprovação em processo seletivo competitivo',
  },
  {
    icon: BookOpen,
    title: 'Projetos Acadêmicos',
    description: 'Desenvolvimento de soluções inovadoras',
    highlight: 'Projetos práticos integrando teoria e mercado',
  },
  {
    icon: Award,
    title: 'Experiência Profissional',
    description: 'Estágio na Petlove',
    highlight: 'Aplicação prática de conhecimentos em software',
  },
]

export default function AcademicJourney() {
  return (
    <Section id="trajetoria" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Minha Trajetória <span className="text-france-blue-600 dark:text-france-blue-400">Acadêmica</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Uma jornada de aprendizado contínuo, dedicação e conquistas que me trouxeram até aqui
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full text-center">
              <div className="inline-flex p-4 rounded-full bg-france-blue-100 dark:bg-france-blue-900/30 text-france-blue-600 dark:text-france-blue-400 mb-4">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.description}</p>
              <p className="text-sm text-france-blue-600 dark:text-france-blue-400 font-medium">
                {item.highlight}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
