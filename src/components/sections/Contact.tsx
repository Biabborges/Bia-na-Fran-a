'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { Mail, Linkedin, MessageCircle, HelpCircle } from 'lucide-react'

const contactMethods = [
  {
    icon: Mail,
    title: 'E-mail',
    value: 'seuemail@example.com',
    link: 'mailto:seuemail@example.com',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: '/in/seulinkedin',
    link: 'https://linkedin.com/in/seulinkedin',
  },
  {
    icon: MessageCircle,
    title: 'Instagram',
    value: '@seuusuario',
    link: 'https://instagram.com/seuusuario',
  },
]

const faqs = [
  {
    question: 'Como posso ter certeza de que o dinheiro será usado corretamente?',
    answer: 'Comprometo-me com total transparência! Compartilharei todos os comprovantes de despesas e manterei atualizações constantes sobre o uso dos recursos nas minhas redes sociais.',
  },
  {
    question: 'Posso contribuir com qualquer valor?',
    answer: 'Sim! Qualquer valor é bem-vindo e faz diferença. Não existe valor mínimo ou máximo. Cada real conta para realizar este sonho!',
  },
  {
    question: 'Quando você parte para a França?',
    answer: 'O intercâmbio está previsto para começar em janeiro de 2026, com duração de 6 meses. Compartilharei todos os detalhes da preparação e da viagem.',
  },
  {
    question: 'Como receberei as recompensas?',
    answer: 'Após a contribuição, entre em contato comigo pelo Instagram ou e-mail informando seu nome e endereço. Enviarei as recompensas assim que retornar do intercâmbio.',
  },
  {
    question: 'E se a meta não for atingida?',
    answer: 'Todo valor arrecadado será usado para custear o intercâmbio. Se necessário, complementarei com recursos próprios e bolsas. O importante é realizar este sonho!',
  },
]

export default function Contact() {
  return (
    <Section id="contato" background="gray">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contato & <span className="text-france-blue-600 dark:text-france-blue-400">FAQ</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Dúvidas? Entre em contato! Estou aqui para responder todas as suas perguntas
          </p>
        </motion.div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a href={method.link} target="_blank" rel="noopener noreferrer">
                <Card className="text-center hover:shadow-xl transition-shadow h-full">
                  <div className="inline-flex p-4 rounded-full bg-france-blue-100 dark:bg-france-blue-900/30 text-france-blue-600 dark:text-france-blue-400 mb-4">
                    <method.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{method.title}</h3>
                  <p className="text-sm text-france-blue-600 dark:text-france-blue-400 break-all">
                    {method.value}
                  </p>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <HelpCircle className="w-8 h-8 text-france-blue-600 dark:text-france-blue-400" />
            <h3 className="text-2xl font-bold">Perguntas Frequentes</h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <Card hover={false}>
                  <h4 className="font-bold text-lg mb-3 text-france-blue-600 dark:text-france-blue-400">
                    {faq.question}
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="bg-gradient-to-r from-france-blue-600 to-france-red-600 text-white">
            <h3 className="font-bold text-2xl mb-4">Não encontrou sua dúvida?</h3>
            <p className="mb-6">Entre em contato diretamente comigo. Terei prazer em responder!</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="outline" href="mailto:seuemail@example.com" className="bg-white text-france-blue-600 hover:bg-gray-100 border-white">
                Enviar E-mail
              </Button>
              <Button variant="outline" className="bg-white text-france-blue-600 hover:bg-gray-100 border-white">
                Mensagem no Instagram
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
