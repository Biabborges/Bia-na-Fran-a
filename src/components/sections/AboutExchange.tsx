'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Image from 'next/image'
import { Plane, School, Calendar, Target, Globe, Heart, MapPin } from 'lucide-react'

const exchangeDetails = [
  {
    icon: Globe,
    title: 'Destino',
    value: 'França 🇫🇷',
    description: 'País da cultura, arte e inovação tecnológica',
  },
  {
    icon: School,
    title: 'Universidade',
    value: 'Universidade Parceira',
    description: 'Instituição de referência em tecnologia',
  },
  {
    icon: Calendar,
    title: 'Duração',
    value: '6 meses',
    description: 'Janeiro a Junho de 2026',
  },
  {
    icon: Target,
    title: 'Objetivo',
    value: 'Crescimento Profissional',
    description: 'Expandir conhecimentos e criar networking global',
  },
]

export default function AboutExchange() {
  return (
    <Section id="intercambio" background="gray">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Sobre o <span className="text-france-blue-600 dark:text-france-blue-400">Intercâmbio</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Uma oportunidade única de estudar em uma das universidades mais prestigiadas da França
        </p>
      </motion.div>

      {/* Details Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {exchangeDetails.map((detail, index) => (
          <motion.div
            key={detail.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="text-center h-full">
              <div className="inline-flex p-4 rounded-full bg-france-blue-100 dark:bg-france-blue-900/30 text-france-blue-600 dark:text-france-blue-400 mb-4">
                <detail.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-sm text-gray-600 dark:text-gray-400 mb-2">
                {detail.title}
              </h3>
              <p className="font-bold text-xl mb-2">{detail.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{detail.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Imagens do Destino */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h3 className="text-2xl font-bold text-center mb-8">
          <MapPin className="inline w-6 h-6 mr-2 text-france-red-600 dark:text-france-red-400" />
          O Destino dos Meus Sonhos
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Imagem 1 - Universidade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-france-blue-100 to-white dark:from-france-blue-900/30 dark:to-gray-800 flex flex-col items-center justify-center gap-2">
              <div className="text-5xl">🏛️</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center px-4">
                Universidade Parceira
              </p>
              <p className="text-xs text-gray-500">
                /public/images/exchange/university.jpg
              </p>
            </div>
            {/* Descomente quando adicionar imagem:
            <Image
              src="/images/exchange/university.jpg"
              alt="Universidade na França"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="font-bold">Campus Universitário</p>
            </div>
            */}
          </motion.div>

          {/* Imagem 2 - Cidade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white to-france-red-100 dark:from-gray-800 dark:to-france-red-900/30 flex flex-col items-center justify-center gap-2">
              <div className="text-5xl">🗼</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center px-4">
                Cidade Francesa
              </p>
              <p className="text-xs text-gray-500">
                /public/images/exchange/city.jpg
              </p>
            </div>
            {/* Descomente quando adicionar imagem:
            <Image
              src="/images/exchange/city.jpg"
              alt="Cidade na França"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="font-bold">Explorando a França</p>
            </div>
            */}
          </motion.div>

          {/* Imagem 3 - Estudos/Cultura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-france-blue-100 to-france-red-100 dark:from-france-blue-900/30 dark:to-france-red-900/30 flex flex-col items-center justify-center gap-2">
              <div className="text-5xl">📚</div>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center px-4">
                Vida Estudantil
              </p>
              <p className="text-xs text-gray-500">
                /public/images/exchange/student-life.jpg
              </p>
            </div>
            {/* Descomente quando adicionar imagem:
            <Image
              src="/images/exchange/student-life.jpg"
              alt="Vida estudantil na França"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <p className="font-bold">Experiência Internacional</p>
            </div>
            */}
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Card className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-lg bg-france-red-100 dark:bg-france-red-900/30">
              <Heart className="w-6 h-6 text-france-red-600 dark:text-france-red-400" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Por que este intercâmbio é importante?</h3>
            </div>
          </div>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Estudar na França representa mais do que uma experiência acadêmica — é uma oportunidade 
              de imersão em uma cultura rica, conhecida por sua excelência em educação e inovação tecnológica.
            </p>
            <p>
              Durante o intercâmbio, terei a chance de:
            </p>
            <ul className="space-y-2 ml-6 list-disc">
              <li>Cursar disciplinas avançadas de Engenharia de Software em uma instituição de renome internacional</li>
              <li>Desenvolver projetos com estudantes de diversos países e culturas</li>
              <li>Aprimorar minha fluência em francês e inglês técnico</li>
              <li>Criar uma rede de contatos global que será valiosa para minha carreira</li>
              <li>Conhecer as tendências e inovações do mercado de tecnologia europeu</li>
            </ul>
            <p className="text-france-blue-600 dark:text-france-blue-400 font-semibold">
              Essa experiência será transformadora para minha formação e contribuirá significativamente 
              para que eu possa, no futuro, devolver à sociedade todo o conhecimento adquirido.
            </p>
          </div>
        </Card>
      </motion.div>
    </Section>
  )
}
