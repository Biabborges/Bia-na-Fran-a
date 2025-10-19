import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Mail, href: 'mailto:seuemail@example.com', label: 'Email' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-france-blue-400">Bia</span>
              <span className="text-white"> na </span>
              <span className="text-france-red-400">França</span>
            </h3>
            <p className="text-sm">
              Estudante de Engenharia de Software em busca do sonho de estudar na França.
              Cada contribuição me aproxima mais desse objetivo!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#historia" className="hover:text-france-blue-400 transition-colors">Minha História</a></li>
              <li><a href="#intercambio" className="hover:text-france-blue-400 transition-colors">Sobre o Intercâmbio</a></li>
              <li><a href="#contribuir" className="hover:text-france-blue-400 transition-colors">Como Contribuir</a></li>
              <li><a href="#contato" className="hover:text-france-blue-400 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Redes Sociais</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-gray-800 hover:bg-france-blue-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p className="flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-france-red-500 fill-current" /> por Bia
            <span className="mx-2">•</span>
            © {currentYear} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}
