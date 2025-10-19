'use client'

import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Galeria de fotos com legendas
const galleryPhotos = [
  {
    image: '/images/gallery/photo1.jpg',
    caption: 'Apresentação de projeto final no Inteli',
    date: 'Dezembro 2024',
  },
  {
    image: '/images/gallery/photo2.jpg',
    caption: 'Equipe Petlove - Momento de celebração',
    date: 'Outubro 2024',
  },
  {
    image: '/images/gallery/photo3.jpg',
    caption: 'Workshop de tecnologia com a comunidade',
    date: 'Setembro 2024',
  },
  {
    image: '/images/gallery/photo4.jpg',
    caption: 'Hackathon - Desenvolvendo soluções inovadoras',
    date: 'Agosto 2024',
  },
  {
    image: '/images/gallery/photo5.jpg',
    caption: 'Palestra sobre carreira em tech',
    date: 'Julho 2024',
  },
  {
    image: '/images/gallery/photo6.jpg',
    caption: 'Momentos especiais com amigos da faculdade',
    date: 'Junho 2024',
  },
  // Adicione mais fotos aqui
]

export default function PhotoGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryPhotos.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <Section id="galeria" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Galeria de <span className="text-france-blue-600 dark:text-france-blue-400">Momentos</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Alguns registros especiais da minha jornada até aqui
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Carrossel Principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Imagem Principal */}
          <div className="relative aspect-video md:aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-france-blue-100 to-france-red-100 dark:from-france-blue-900/30 dark:to-france-red-900/30 shadow-xl">
            {/* Placeholder - Substitua por imagem real */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-6xl">
              <div className="mb-4">📸</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Adicione suas fotos em /public/images/gallery/
              </p>
            </div>
            {/* Descomente quando adicionar imagens reais:
            <Image
              src={galleryPhotos[currentIndex].image}
              alt={galleryPhotos[currentIndex].caption}
              fill
              className="object-cover"
            />
            */}
            
            {/* Overlay com gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Legenda */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="font-bold text-lg md:text-xl mb-2">
                {galleryPhotos[currentIndex].caption}
              </p>
              <p className="text-sm text-gray-200">
                {galleryPhotos[currentIndex].date}
              </p>
            </div>
          </div>

          {/* Botões de Navegação */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-lg"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-lg"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
          </button>

          {/* Indicadores de slides */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
            {galleryPhotos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Ir para foto ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Thumbnails */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-3"
        >
          {galleryPhotos.map((photo, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all ${
                index === currentIndex
                  ? 'ring-4 ring-france-blue-600 dark:ring-france-blue-400'
                  : 'hover:opacity-75'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-france-blue-100 to-france-red-100 dark:from-france-blue-900/30 dark:to-france-red-900/30 flex items-center justify-center text-2xl">
                📷
              </div>
              {/* Descomente quando adicionar imagens reais:
              <Image
                src={photo.image}
                alt={photo.caption}
                fill
                className="object-cover"
              />
              */}
            </button>
          ))}
        </motion.div>

        {/* Contador */}
        <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          {currentIndex + 1} / {galleryPhotos.length}
        </div>
      </div>
    </Section>
  )
}
