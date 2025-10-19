'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'

const experiences = [
  {
    company: 'Petlove',
    role: 'Estagiária de Desenvolvimento de Software',
    period: '2024 - Atual',
    location: 'São Paulo, SP (Remoto)',
    description: 'Atuando no desenvolvimento de soluções web para o maior ecossistema de saúde e bem-estar pet da América Latina.',
    achievements: [
      'Desenvolvimento de features usando React e TypeScript',
      'Colaboração com equipe ágil em projetos de impacto',
      'Aprendizado contínuo com profissionais sêniores',
      'Participação em code reviews e boas práticas de desenvolvimento',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Git', 'Agile'],
  },
  // Adicione mais experiências aqui se necessário
]

export default function Experience() {
  return (
    <Section id="experiencia" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Experiência <span className="text-france-blue-600 dark:text-france-blue-400">Profissional</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Aplicando conhecimentos acadêmicos em projetos reais e aprendendo com os melhores
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-lg bg-france-blue-100 dark:bg-france-blue-900/30">
                  <Briefcase className="w-6 h-6 text-france-blue-600 dark:text-france-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-1">{exp.company}</h3>
                  <p className="text-france-blue-600 dark:text-france-blue-400 font-semibold mb-2">
                    {exp.role}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-4">
                <h4 className="font-semibold mb-3 text-sm text-gray-700 dark:text-gray-300">
                  Principais atividades e aprendizados:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircle className="w-4 h-4 text-france-blue-600 dark:text-france-blue-400 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
