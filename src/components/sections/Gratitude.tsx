'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import { Heart } from 'lucide-react'

export default function Gratitude() {
  return (
    <Section id="agradecimento" background="gray">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Minha <span className="text-france-blue-600 dark:text-france-blue-400">Gratidão</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Cada apoio recebido é um passo mais perto de realizar este sonho
          </p>
        </motion.div>

        {/* Thank You Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-france-blue-50 to-france-red-50 dark:from-france-blue-900/20 dark:to-france-red-900/20 text-center border-2 border-france-blue-200 dark:border-france-blue-700">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex p-6 rounded-full bg-white dark:bg-gray-800 shadow-lg mb-6">
                <Heart className="w-12 h-12 text-france-red-600 dark:text-france-red-400 fill-current" />
              </div>
              <h3 className="font-bold text-2xl mb-6">
                Muito Obrigada por Acreditar em Mim!
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 text-left">
                <p>
                  Cada contribuição, independente do valor, representa muito mais do que um apoio financeiro. 
                  É um voto de confiança no meu potencial e nos meus sonhos.
                </p>
                <p>
                  Prometo honrar cada real recebido com dedicação, esforço e transparência. 
                  Compartilharei toda a jornada com vocês, desde a preparação até as experiências na França.
                </p>
                <p className="text-center">
                  <span className="text-france-blue-600 dark:text-france-blue-400 font-bold text-lg">
                    Vocês são parte essencial deste sonho!
                  </span>
                </p>
                <div className="text-center text-4xl">
                  💙🤍❤️
                </div>
                <p className="text-center italic text-gray-600 dark:text-gray-400">
                  &ldquo;Sozinhos vamos mais rápido, juntos vamos mais longe.&rdquo;
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
