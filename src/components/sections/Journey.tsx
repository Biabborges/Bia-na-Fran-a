'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Image from 'next/image'
import { GraduationCap, Briefcase, Heart, Calendar, MapPin, Award } from 'lucide-react'

// Conquistas Acadêmicas
const academicAchievements = [
  {
    title: 'Engenharia de Software',
    institution: 'Instituto de Tecnologia e Liderança (Inteli)',
    period: '2023 - 2026',
    location: 'São Paulo, SP',
    description: 'Formação focada em tecnologia, inovação e liderança com projetos práticos integrados ao mercado.',
    image: '/images/journey/inteli.jpg', // Adicione sua foto do Inteli
    type: 'education',
  },
  {
    title: 'Aprovação para Intercâmbio na França',
    institution: 'Universidade Parceira',
    period: 'Janeiro 2026',
    location: 'França',
    description: 'Selecionada em processo competitivo para estudar 6 meses em uma universidade francesa de referência em tecnologia.',
    image: '/images/journey/france-acceptance.jpg', // Foto da aprovação
    type: 'achievement',
  },
]

// Experiências Profissionais
const professionalExperiences = [
  {
    title: 'Estagiária de Desenvolvimento de Software',
    company: 'Petlove',
    period: '2024 - Atual',
    location: 'São Paulo, SP (Remoto)',
    description: 'Desenvolvimento de soluções web para o maior ecossistema de saúde e bem-estar pet da América Latina.',
    highlights: [
      'Desenvolvimento com React e TypeScript',
      'Colaboração em equipe ágil',
      'Code reviews e boas práticas',
      'Projetos de alto impacto',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Git', 'Agile'],
    image: '/images/journey/petlove.jpg', // Foto no trabalho
    type: 'work',
  },
  // Adicione mais experiências profissionais aqui
]

// Trabalhos Voluntários
const volunteerWork = [
  {
    title: 'Voluntária em Educação Tecnológica',
    organization: 'Nome da Organização',
    period: '2023 - 2024',
    location: 'São Paulo, SP',
    description: 'Ensino de programação básica para jovens de comunidades carentes, promovendo inclusão digital.',
    image: '/images/journey/volunteer1.jpg', // Foto do trabalho voluntário
    type: 'volunteer',
  },
  // Adicione mais trabalhos voluntários aqui
]

const allJourneyItems = [
  ...academicAchievements,
  ...professionalExperiences,
  ...volunteerWork,
]

export default function Journey() {
  return (
    <Section id="trajetoria" background="gray">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Minha <span className="text-france-blue-600 dark:text-france-blue-400">Trajetória</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Uma jornada de aprendizado, dedicação e contribuição que me trouxeram até aqui
        </p>
      </motion.div>

      {/* Timeline vertical */}
      <div className="max-w-5xl mx-auto">
        {allJourneyItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-12 last:mb-0"
          >
            <div className={`flex flex-col md:flex-row gap-6 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-france-blue-100 to-france-red-100 dark:from-france-blue-900/30 dark:to-france-red-900/30">
                  {/* Placeholder - Substitua por imagem real */}
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    {item.type === 'education' && '🎓'}
                    {item.type === 'achievement' && '🏆'}
                    {item.type === 'work' && '💼'}
                    {item.type === 'volunteer' && '❤️'}
                  </div>
                  {/* Descomente quando adicionar imagens reais:
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <Card>
                  {/* Icon & Type Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-france-blue-100 dark:bg-france-blue-900/30">
                      {item.type === 'education' && <GraduationCap className="w-5 h-5 text-france-blue-600 dark:text-france-blue-400" />}
                      {item.type === 'achievement' && <Award className="w-5 h-5 text-france-blue-600 dark:text-france-blue-400" />}
                      {item.type === 'work' && <Briefcase className="w-5 h-5 text-france-blue-600 dark:text-france-blue-400" />}
                      {item.type === 'volunteer' && <Heart className="w-5 h-5 text-france-red-600 dark:text-france-red-400" />}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {item.type === 'education' && 'Formação'}
                      {item.type === 'achievement' && 'Conquista'}
                      {item.type === 'work' && 'Experiência Profissional'}
                      {item.type === 'volunteer' && 'Trabalho Voluntário'}
                    </span>
                  </div>

                  <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-france-blue-600 dark:text-france-blue-400 font-semibold mb-2">
                    {'company' in item ? item.company : 'institution' in item ? item.institution : item.organization}
                  </p>

                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {item.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>

                  {/* Highlights (apenas para experiências profissionais) */}
                  {'highlights' in item && item.highlights && (
                    <ul className="space-y-1 mb-4">
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-france-blue-600 dark:text-france-blue-400 mt-1">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies (apenas para experiências profissionais) */}
                  {'technologies' in item && item.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-france-blue-100 dark:bg-france-blue-900/30 text-france-blue-700 dark:text-france-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
