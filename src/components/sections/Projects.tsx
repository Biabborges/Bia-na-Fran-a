'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Sistema de Gestão Empresarial',
    description: 'Plataforma web para gestão integrada de processos empresariais, desenvolvida com React e Node.js.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'TypeScript'],
    github: '#',
    demo: '#',
    image: '💼',
  },
  {
    title: 'App de Saúde e Bem-estar',
    description: 'Aplicativo mobile para monitoramento de hábitos saudáveis e acompanhamento de rotinas.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
    github: '#',
    demo: '#',
    image: '💚',
  },
  {
    title: 'Dashboard Analytics',
    description: 'Dashboard interativo para visualização de dados e métricas de negócio em tempo real.',
    technologies: ['Next.js', 'Chart.js', 'Tailwind', 'Python'],
    github: '#',
    demo: '#',
    image: '📊',
  },
]

export default function Projects() {
  return (
    <Section id="projetos" background="gray">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Meus <span className="text-france-blue-600 dark:text-france-blue-400">Projetos</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Alguns dos projetos que desenvolvi aplicando conhecimentos técnicos e criatividade
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full flex flex-col">
              {/* Project Image/Icon */}
              <div className="aspect-video rounded-lg bg-gradient-to-br from-france-blue-100 to-france-red-100 dark:from-france-blue-900/30 dark:to-france-red-900/30 flex items-center justify-center text-6xl mb-4">
                {project.image}
              </div>

              {/* Project Info */}
              <h3 className="font-bold text-xl mb-3">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full bg-france-blue-100 dark:bg-france-blue-900/30 text-france-blue-700 dark:text-france-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm flex-1 justify-center"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-france-blue-600 hover:bg-france-blue-700 text-white transition-colors text-sm flex-1 justify-center"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
