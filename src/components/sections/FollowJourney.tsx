'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import { Instagram, Youtube, Camera, Newspaper } from 'lucide-react'

const socialPlatforms = [
  {
    icon: Instagram,
    name: 'Instagram',
    handle: '@seuusuario',
    description: 'Stories e posts diários da jornada',
    link: '#',
  },
  {
    icon: Youtube,
    name: 'YouTube',
    handle: 'Seu Canal',
    description: 'Vlogs semanais do intercâmbio',
    link: '#',
  },
]

export default function FollowJourney() {
  return (
    <Section id="jornada" background="white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Acompanhe a <span className="text-france-blue-600 dark:text-france-blue-400">Jornada</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Não perca nenhum momento desta aventura! Compartilharei tudo nas redes sociais
          </p>
        </motion.div>

        {/* Social Platforms */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-xl transition-shadow">
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <div className="p-4 rounded-lg bg-france-blue-100 dark:bg-france-blue-900/30 text-france-blue-600 dark:text-france-blue-400">
                    <platform.icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">{platform.name}</h3>
                    <p className="text-france-blue-600 dark:text-france-blue-400 font-semibold mb-1">
                      {platform.handle}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {platform.description}
                    </p>
                  </div>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-france-blue-600 to-france-red-600 text-white">
            <div className="text-center">
              <Camera className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-bold text-2xl mb-4">O que você verá:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-xl">📚</span>
                    <span>Rotina na universidade francesa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">🏛️</span>
                    <span>Passeios e pontos turísticos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">🍽️</span>
                    <span>Culinária e cultura local</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-xl">👥</span>
                    <span>Amigos de vários países</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">💻</span>
                    <span>Projetos e aprendizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-xl">✨</span>
                    <span>Experiências incríveis</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300">
            🔔 <strong>Ative as notificações</strong> para não perder nenhuma atualização da viagem!
          </p>
        </motion.div>
      </div>
    </Section>
  )
}
