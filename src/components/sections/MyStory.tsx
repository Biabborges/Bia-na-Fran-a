'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Image from 'next/image'
import { Github, Linkedin, Instagram, Mail, Users } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/Biabborges', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/biancablins/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/biaalinz/', label: 'Instagram' },
  { icon: Mail, href: 'mailto:contato.biancalins@gmail.com', label: 'Email' },
]

export default function MyStory() {
  return (
    <Section id="historia" background="gray">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-france-blue-200 to-france-red-200 dark:from-france-blue-900 dark:to-france-red-900">
            <Image
              src="/images/IMG_8235.jpg"
              alt="Foto de perfil"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -z-10 top-4 -right-4 w-full h-full rounded-2xl bg-france-blue-300/30 dark:bg-france-blue-700/30" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Olá, eu sou a <span className="text-france-blue-600 dark:text-france-blue-400">Bia</span>! 👋
          </h2>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              Sou estudante de <strong>Engenharia de Software</strong> no Inteli (Instituto de Tecnologia e Liderança), 
              apaixonada por tecnologia e inovação. Durante minha jornada acadêmica, desenvolvi diversos projetos 
              que me permitiram crescer tanto profissionalmente quanto pessoalmente.
            </p>
            
            <p>
              Ter a oportunidade de estudar na França é um sonho que cultivo há muito tempo. 
              Acredito que essa experiência internacional será fundamental para expandir minha visão de mundo, 
              aprimorar minhas habilidades técnicas e criar conexões globais que enriquecerão minha carreira.
            </p>
            
            <p>
              Além dos estudos, tive a oportunidade de estagiar na <strong>Petlove</strong>, onde apliquei 
              conhecimentos de desenvolvimento de software em projetos reais, aprendendo com profissionais 
              incríveis e contribuindo para soluções que impactam milhares de pessoas.
            </p>

            <p className="text-france-blue-600 dark:text-france-blue-400 font-semibold">
              Cada contribuição me aproxima mais de realizar esse sonho. Obrigada por fazer parte dessa jornada! ✨
            </p>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Conecte-se comigo:</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-white dark:bg-gray-800 hover:bg-france-blue-50 dark:hover:bg-france-blue-900/30 border border-gray-200 dark:border-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Seção da Família */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-france-red-100 dark:bg-france-red-900/30 text-france-red-700 dark:text-france-red-300 mb-4">
            <Users className="w-5 h-5" />
            <span className="font-semibold">Minha Família</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            O Apoio que Me Trouxe Até Aqui
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Nada disso seria possível sem o amor, apoio e incentivo da minha família, 
            que sempre acreditou nos meus sonhos e me deu forças para seguir em frente.
          </p>
        </div>

        {/* Grid de fotos da família */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Foto da família toda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-france-blue-100 to-france-red-100 dark:from-france-blue-900/30 dark:to-france-red-900/30 shadow-lg">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="text-6xl">👨‍👩‍👧‍👦</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Foto da família completa
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  /public/images/family/family-full.jpg
                </p>
              </div>
              <Image
                src="/images/família.jpg"
                alt="Minha família"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Foto individual ou com pais/irmãos */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-france-red-100 to-france-blue-100 dark:from-france-red-900/30 dark:to-france-blue-900/30 shadow-lg">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <div className="text-5xl">❤️</div>
                <p className="text-sm text-gray-600 dark:text-gray-400 text-center px-4">
                  Momento especial
                </p>
              </div>
              <Image
                src="/images/Pai e eu.jpg"
                alt="Momento em família"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Mensagem sobre a família */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto italic">
            "Cada passo que dou em direção aos meus sonhos é motivado pelo amor e apoio incondicional 
            da minha família. Eles são minha base, minha inspiração e minha maior torcida. 
            Este intercâmbio não é só meu sonho, é o sonho de toda a minha família! 💙"
          </p>
        </motion.div>
      </motion.div>
    </Section>
  )
}
