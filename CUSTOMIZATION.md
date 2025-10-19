# Guia de Customização Rápida

## 🎯 Checklist de Personalização

### 1. Informações Básicas (OBRIGATÓRIO)

#### Chave PIX
📁 `src/components/sections/HowToContribute.tsx`
```typescript
const pixKey = 'SUBSTITUA_PELA_SUA_CHAVE_PIX'
```

#### Redes Sociais
📁 Atualizar em múltiplos arquivos:
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/sections/MyStory.tsx`
- `src/components/sections/FollowJourney.tsx`
- `src/components/sections/Contact.tsx`

Buscar e substituir:
- `seuemail@example.com` → seu e-mail real
- `@seuusuario` → seu Instagram
- `/in/seulinkedin` → seu LinkedIn
- Links do GitHub

### 2. Conteúdo Textual

#### Minha História
📁 `src/components/sections/MyStory.tsx`
- Foto pessoal (substitua o emoji por `<Image>`)
- Texto da biografia
- Motivação do intercâmbio

#### Trajetória Acadêmica
📁 `src/components/sections/AcademicJourney.tsx`
- Instituição de ensino
- Conquistas específicas

#### Projetos
📁 `src/components/sections/Projects.tsx`
```typescript
const projects = [
  {
    title: 'Nome do Projeto',
    description: 'Descrição',
    technologies: ['Tech1', 'Tech2'],
    github: 'URL_GITHUB',
    demo: 'URL_DEMO',
    image: '📁', // Substitua por URL de imagem real
  },
]
```

#### Experiência
📁 `src/components/sections/Experience.tsx`
- Empresa, cargo, período
- Descrição das atividades
- Tecnologias utilizadas

### 3. Detalhes do Intercâmbio

#### Informações Básicas
📁 `src/components/sections/AboutExchange.tsx`
- Nome da universidade
- Cidade/país
- Duração exata
- Datas específicas

#### Orçamento
📁 `src/components/sections/BudgetBreakdown.tsx`
```typescript
const expenses = [
  {
    category: 'Categoria',
    amount: 'R$ VALOR',
    description: 'Descrição',
  },
]
const total = VALOR_TOTAL // Atualizar!
```

### 4. Progresso da Vaquinha

📁 `src/components/sections/Progress.tsx`
```typescript
const currentAmount = 0 // ATUALIZAR REGULARMENTE
const goalAmount = 30000 // Meta total
const supportersCount = 0 // Número de contribuidores
```

**💡 Dica:** Configure um backend simples para atualizar isso automaticamente!

### 5. Imagens

#### Estrutura sugerida:
```
public/
  images/
    profile.jpg          # Sua foto
    projects/
      project1.jpg
      project2.jpg
    qr-code-pix.png     # QR Code PIX
```

#### Usar imagens:
```typescript
import Image from 'next/image'

<Image 
  src="/images/profile.jpg" 
  alt="Foto de perfil"
  width={400}
  height={400}
/>
```

### 6. FAQ
📁 `src/components/sections/Contact.tsx`
- Personalize perguntas e respostas conforme sua situação

### 7. Metadados SEO
📁 `src/app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: 'Seu Nome - Vaquinha de Intercâmbio',
  description: 'Sua descrição...',
  // Adicione mais metadados
}
```

## 🎨 Personalizações Visuais

### Cores
📁 `tailwind.config.js`
- Ajuste `france-blue` e `france-red` se desejar

### Fontes
📁 `src/app/layout.tsx`
```typescript
import { Inter, Poppins } from 'next/font/google'
const font = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] })
```

## 🚀 Antes do Deploy

- [ ] Todas as chaves PIX atualizadas
- [ ] Todos os links de redes sociais funcionando
- [ ] Textos personalizados
- [ ] Imagens adicionadas
- [ ] Valores de orçamento corretos
- [ ] Informações do intercâmbio precisas
- [ ] FAQ relevante
- [ ] Testado em mobile e desktop
- [ ] Modo claro e escuro funcionando

## 📊 Atualizar Progresso (Manual)

Sempre que receber uma contribuição:

1. Atualize `currentAmount` em `Progress.tsx`
2. Incremente `supportersCount`
3. Faça commit e push
4. Vercel fará deploy automático

## 🔄 Automação Futura

Para atualização automática do progresso, considere:
- Backend com API Routes do Next.js
- Firebase/Supabase para armazenar dados
- Webhook do sistema de pagamento

---

**Dúvidas?** Abra uma issue no GitHub ou entre em contato!
