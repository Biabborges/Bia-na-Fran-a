# Vercel Deployment Guide

## 🚀 Deploy Rápido (5 minutos)

### Opção 1: Deploy via GitHub (Recomendado)

1. **Push para GitHub:**
```bash
git add .
git commit -m "Initial commit - Bia na França website"
git push origin main
```

2. **Configure no Vercel:**
   - Acesse [vercel.com/new](https://vercel.com/new)
   - Faça login com GitHub
   - Selecione o repositório `Bia-na-Fran-a`
   - Clique em "Import"
   - Vercel detectará Next.js automaticamente
   - Clique em "Deploy"

3. **Aguarde o deploy (1-2 minutos)**
   - Vercel construirá e publicará automaticamente
   - Você receberá um link `seu-projeto.vercel.app`

### Opção 2: Deploy via CLI

```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Para produção
vercel --prod
```

## ⚙️ Configurações do Vercel

### Build Settings (Automático)
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install`
- **Node.js Version:** 18.x

### Environment Variables (Opcional)

Se você adicionar funcionalidades com backend:

```bash
# No dashboard do Vercel:
Settings → Environment Variables

# Adicionar variáveis:
NEXT_PUBLIC_API_URL=https://sua-api.com
DATABASE_URL=sua-conexao-db
```

## 🌐 Domínio Personalizado

### Adicionar Domínio Próprio

1. **No Vercel Dashboard:**
   - Settings → Domains
   - Add domain
   - Digite: `seunome.com.br`

2. **Configure DNS (no seu provedor):**
   ```
   Tipo: A
   Nome: @
   Valor: 76.76.21.21
   
   Tipo: CNAME
   Nome: www
   Valor: cname.vercel-dns.com
   ```

3. **Aguarde propagação (até 48h)**

### Domínios Gratuitos Sugeridos

- [Freenom](https://www.freenom.com) - .tk, .ml, .ga
- [GitHub Student Pack](https://education.github.com/pack) - .me grátis por 1 ano
- Subdomínio Vercel: `bianfranca.vercel.app`

## 📊 Analytics (Opcional)

### Vercel Analytics (Grátis)

```bash
npm install @vercel/analytics
```

Em `src/app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Google Analytics

1. Crie conta em [analytics.google.com](https://analytics.google.com)
2. Obtenha ID de medição (G-XXXXXXXXXX)
3. Adicione ao projeto:

```typescript
// src/app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## 🔄 Deploy Automático

Configurado automaticamente! Sempre que você fizer push:

```bash
git add .
git commit -m "Atualizar progresso da vaquinha"
git push
```

→ Vercel fará deploy automaticamente em ~2 minutos

## 🐛 Troubleshooting

### Build Failed

```bash
# Teste localmente primeiro:
npm run build

# Se funcionar local mas falhar no Vercel:
# Verificar versão do Node.js no vercel.json
```

Criar `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "framework": "nextjs"
}
```

### Imagens Não Aparecem

Certifique-se que estão em `public/`:
```typescript
// ✅ Correto
<Image src="/images/foto.jpg" />

// ❌ Errado
<Image src="../images/foto.jpg" />
```

### Erros de TypeScript

```bash
# Ignorar erros no build (não recomendado):
# next.config.js
module.exports = {
  typescript: {
    ignoreBuildErrors: true,
  },
}
```

## 📱 Testar Deploy

Após deploy, teste:
- [ ] Todas as seções carregam
- [ ] Links funcionam
- [ ] Modo escuro funciona
- [ ] Mobile responsivo
- [ ] Formulários/botões funcionam
- [ ] Imagens carregam
- [ ] Performance (use Lighthouse)

## 🎯 Performance Tips

### Otimizar Imagens
```bash
# Use next/image para otimização automática
import Image from 'next/image'
```

### Lazy Loading
Já implementado via Framer Motion `whileInView`

### Cache
Configurado automaticamente pelo Next.js/Vercel

## 🔒 Segurança

- HTTPS automático
- Headers de segurança configurados
- Proteção DDoS inclusa
- Backups automáticos

## 💰 Custos

**Plano Hobby (Grátis):**
- Bandwidth: 100GB/mês
- Builds: Ilimitados
- Domínios: Ilimitados
- Analytics básico

**Suficiente para vaquinhas pessoais!**

## 📞 Suporte

- [Documentação Vercel](https://vercel.com/docs)
- [Fórum Vercel](https://github.com/vercel/vercel/discussions)
- [Next.js Docs](https://nextjs.org/docs)

---

**Pronto! Seu site está no ar! 🎉**

Compartilhe o link: `https://seu-projeto.vercel.app`
