# 🇫🇷 Bia na França - Vaquinha de Intercâmbio

Site pessoal de crowdfunding para intercâmbio na França, desenvolvido com Next.js, TailwindCSS e Framer Motion.

![Banner](https://via.placeholder.com/1200x400/2563eb/ffffff?text=Bia+na+Fran%C3%A7a)

## ✨ Características

- 🎨 Design moderno e responsivo com cores da bandeira francesa
- 🌓 Modo claro/escuro
- ✨ Animações suaves com Framer Motion
- 📱 Mobile-first e totalmente responsivo
- 🎯 12 seções completas com informações sobre o intercâmbio
- 💳 Integração PIX para contribuições
- ⚡ Performance otimizada com Next.js 14

## 🚀 Tecnologias

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **Animações:** [Framer Motion](https://www.framer.com/motion/)
- **Ícones:** [Lucide React](https://lucide.dev/)

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passo a passo

1. **Clone o repositório:**
```bash
git clone https://github.com/Biabborges/Bia-na-Fran-a.git
cd Bia-na-Fran-a
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Abra no navegador:**
```
http://localhost:3000
```

## 🎨 Personalização

### 1. Informações Pessoais

Edite os seguintes arquivos para personalizar seu conteúdo:

#### Header e Footer
- `src/components/Header.tsx` - Logo e navegação
- `src/components/Footer.tsx` - Links de redes sociais

#### Seções
- `src/components/sections/MyStory.tsx` - Sua história pessoal
- `src/components/sections/AcademicJourney.tsx` - Trajetória acadêmica
- `src/components/sections/Projects.tsx` - Seus projetos
- `src/components/sections/Experience.tsx` - Experiência profissional
- `src/components/sections/AboutExchange.tsx` - Detalhes do intercâmbio
- `src/components/sections/Progress.tsx` - Atualizar valores arrecadados

### 2. Chave PIX

Em `src/components/sections/HowToContribute.tsx`, substitua:
```typescript
const pixKey = 'seuemail@example.com' // Sua chave PIX real
```

### 3. Links das Redes Sociais

Atualize os links em vários arquivos:
- `src/components/sections/MyStory.tsx`
- `src/components/sections/FollowJourney.tsx`
- `src/components/sections/Contact.tsx`
- `src/components/Footer.tsx`

### 4. Cores Personalizadas

As cores estão configuradas em `tailwind.config.js`. Você pode ajustar a paleta de cores da bandeira francesa:

```javascript
colors: {
  'france-blue': { /* ... */ },
  'france-red': { /* ... */ },
}
```

### 5. Imagens

Adicione suas fotos na pasta `public/images/` e atualize as referências:
- Foto pessoal em `MyStory.tsx`
- Fotos de projetos em `Projects.tsx`
- QR Code PIX em `HowToContribute.tsx`

## 📱 Estrutura do Site

1. **Hero Section** - Apresentação principal com CTA
2. **Minha História** - Biografia e motivação
3. **Trajetória Acadêmica** - Conquistas educacionais
4. **Projetos** - Portfolio de projetos técnicos
5. **Experiência Profissional** - Histórico de trabalho
6. **Sobre o Intercâmbio** - Detalhes da oportunidade
7. **Orçamento** - Breakdown transparente de despesas
8. **Progresso** - Barra de progresso da vaquinha
9. **Como Contribuir** - Instruções PIX e QR Code
10. **Agradecimento** - Recompensas e gratidão
11. **Acompanhe a Jornada** - Links para redes sociais
12. **Contato/FAQ** - Informações de contato e perguntas frequentes

## 🚀 Deploy no Vercel

### Método 1: Via GitHub (Recomendado)

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Importe o repositório do GitHub
5. Configure (Vercel detectará Next.js automaticamente)
6. Clique em "Deploy"

### Método 2: Via CLI

```bash
# Instale a Vercel CLI
npm i -g vercel

# Execute o deploy
vercel

# Para produção
vercel --prod
```

### Configurações Recomendadas

No Vercel Dashboard:
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`

## 📝 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Verifica código com ESLint
```

## 🎯 TODO - Personalizações Importantes

- [ ] Substituir chave PIX pela real
- [ ] Adicionar QR Code PIX real (use biblioteca `qrcode.react`)
- [ ] Atualizar todos os links de redes sociais
- [ ] Adicionar suas fotos reais
- [ ] Personalizar textos com sua história
- [ ] Atualizar informações do intercâmbio (universidade, datas)
- [ ] Configurar valores reais de orçamento
- [ ] Implementar sistema para atualizar progresso dinamicamente
- [ ] Adicionar Google Analytics (opcional)
- [ ] Configurar domínio personalizado (opcional)

## 🔧 Funcionalidades Avançadas (Opcional)

### Adicionar QR Code PIX Real

```bash
npm install qrcode.react
```

Em `HowToContribute.tsx`:
```typescript
import QRCodeReact from 'qrcode.react'

<QRCodeReact value={pixKey} size={256} />
```

### Backend para Progresso Dinâmico

Considere usar:
- Firebase Realtime Database
- Supabase
- API Routes do Next.js + Banco de dados

### Analytics

```bash
npm install @vercel/analytics
```

## 📄 Licença

Este projeto é de código aberto. Sinta-se livre para usar como template para sua própria vaquinha!

## 💙🤍❤️ Agradecimentos

Obrigada por visitar meu projeto! Cada estrela ⭐ no repositório também me ajuda a alcançar mais pessoas.

---

**Desenvolvido com 💙 por Bia** | [LinkedIn](#) | [Instagram](#) | [GitHub](https://github.com/Biabborges)
