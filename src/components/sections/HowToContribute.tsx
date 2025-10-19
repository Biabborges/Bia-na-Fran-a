'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { QrCode, Copy, Check } from 'lucide-react'
import { useState } from 'react'

const pixKey = 'seuemail@example.com' // TODO: Substituir pela chave PIX real

export default function HowToContribute() {
  const [copied, setCopied] = useState(false)

  const copyPixKey = () => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Section id="contribuir" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Como <span className="text-france-blue-600 dark:text-france-blue-400">Contribuir</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Sua contribuição, de qualquer valor, faz toda a diferença! ❤️
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* PIX QR Code */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-france-blue-100 dark:bg-france-blue-900/30 text-france-blue-600 dark:text-france-blue-400 mb-4">
                  <QrCode className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl mb-4">Escaneie o QR Code PIX</h3>
                
                {/* QR Code Placeholder */}
                <div className="aspect-square max-w-xs mx-auto bg-gradient-to-br from-france-blue-100 to-france-red-100 dark:from-france-blue-900/30 dark:to-france-red-900/30 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-6xl">📱</div>
                  {/* TODO: Substituir por QR Code real usando uma biblioteca como qrcode.react */}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Use qualquer app bancário para escanear
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Manual Instructions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <h3 className="font-bold text-xl mb-6">Ou use a chave PIX</h3>
              
              {/* PIX Key */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Chave PIX (E-mail):
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={pixKey}
                    readOnly
                    className="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm"
                  />
                  <button
                    onClick={copyPixKey}
                    className="px-4 py-3 bg-france-blue-600 hover:bg-france-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
                    aria-label="Copiar chave PIX"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copiado!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copiar
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Instructions */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-france-blue-600 dark:text-france-blue-400">
                    Passo a passo:
                  </h4>
                  <ol className="space-y-2 text-sm text-gray-700 dark:text-gray-300 list-decimal ml-5">
                    <li>Abra o app do seu banco</li>
                    <li>Escolha a opção PIX</li>
                    <li>Cole a chave PIX acima ou escaneie o QR Code</li>
                    <li>Digite o valor que deseja contribuir</li>
                    <li>Confirme a transferência</li>
                  </ol>
                </div>

                <div className="p-4 bg-france-blue-50 dark:bg-france-blue-900/20 rounded-lg">
                  <p className="text-sm text-france-blue-700 dark:text-france-blue-300">
                    💡 <strong>Dica:</strong> Não esqueça de me marcar nas redes sociais para que eu 
                    possa agradecer pessoalmente pela sua contribuição!
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Card className="bg-gradient-to-r from-france-blue-50 to-france-red-50 dark:from-france-blue-900/20 dark:to-france-red-900/20 border-2 border-france-blue-200 dark:border-france-blue-700">
            <div className="text-center">
              <h4 className="font-bold text-lg mb-3">Outras formas de ajudar</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                Além de contribuições financeiras, você pode me ajudar compartilhando esta vaquinha 
                com seus amigos e familiares. Juntos, podemos fazer esse sonho se tornar realidade!
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button variant="outline" size="sm">
                  Compartilhar no WhatsApp
                </Button>
                <Button variant="outline" size="sm">
                  Compartilhar no Instagram
                </Button>
                <Button variant="outline" size="sm">
                  Copiar Link
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  )
}
